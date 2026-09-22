# syntax=docker/dockerfile:1.7

ARG NODE_IMAGE=docker.arvancloud.ir/library/node:20-alpine
ARG APK_MIRROR=https://mirror.arvancloud.ir/alpine

FROM ${NODE_IMAGE} AS base

WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1

ARG APK_MIRROR

RUN if [ -f /etc/apk/repositories ]; then \
      sed -i "s|https://dl-cdn.alpinelinux.org/alpine|${APK_MIRROR}|g" /etc/apk/repositories; \
    fi \
  && apk add --no-cache libc6-compat wget

FROM base AS deps

ARG NPM_REGISTRY=https://repo.hmirror.ir/npm

COPY package.json package-lock.json ./

RUN npm config set registry "${NPM_REGISTRY}" \
  && npm config set audit false \
  && npm config set fund false \
  && npm config set fetch-retries 5 \
  && npm config set fetch-retry-mintimeout 20000 \
  && npm config set fetch-retry-maxtimeout 120000 \
  && npm config set fetch-timeout 300000

RUN --mount=type=cache,id=khanchi-frontend-npm,target=/root/.npm \
  npm ci --no-audit --no-fund

FROM base AS builder

ARG NEXT_PUBLIC_SITE_URL=https://khanchirestaurant.com
ARG SITE_ALLOW_INDEXING=true
ARG GOOGLE_SITE_VERIFICATION
ARG APP_VERSION=dev

ENV NEXT_PUBLIC_SITE_URL=${NEXT_PUBLIC_SITE_URL}
ENV SITE_ALLOW_INDEXING=${SITE_ALLOW_INDEXING}
ENV GOOGLE_SITE_VERIFICATION=${GOOGLE_SITE_VERIFICATION}
ENV APP_VERSION=${APP_VERSION}
ENV NEXT_DEPLOYMENT_ID=${APP_VERSION}

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN --mount=type=cache,id=khanchi-frontend-next,target=/app/.next/cache \
  npm run build

FROM base AS runner

ARG APP_VERSION=dev

LABEL org.opencontainers.image.title="Khanchi Restaurant Website" \
      org.opencontainers.image.version="${APP_VERSION}"

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0
ENV APP_VERSION=${APP_VERSION}

RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://127.0.0.1:${PORT}/api/health || exit 1

CMD ["node", "server.js"]
