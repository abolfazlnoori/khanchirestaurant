type IconProps = {
  className?: string;
};

export function ArrowLeft({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 20 20" aria-hidden="true">
      <path d="M17 10H3m0 0 5-5m-5 5 5 5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 8h14M5 12h14M5 16h14" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
    </svg>
  );
}

export function HomeIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4.5 10.25 12 4l7.5 6.25v8.25a1.5 1.5 0 0 1-1.5 1.5h-4.25v-5.5h-3.5V20H6a1.5 1.5 0 0 1-1.5-1.5v-8.25Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45" />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8.15 4.5 10 8.65 7.9 10.3a14.1 14.1 0 0 0 5.8 5.8L15.35 14l4.15 1.85v2.65a1.5 1.5 0 0 1-1.5 1.5C10.27 20 4 13.73 4 6a1.5 1.5 0 0 1 1.5-1.5h2.65Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}

export function StarIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden="true">
      <path d="m8 1.6 1.72 3.49 3.85.56-2.79 2.72.66 3.84L8 10.4l-3.44 1.81.66-3.84-2.79-2.72 3.85-.56L8 1.6Z" fill="currentColor" />
    </svg>
  );
}

export function UserIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9.25" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="12" cy="9" r="2.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <path d="M7.8 17.3c.45-2.3 2.05-3.7 4.2-3.7s3.75 1.4 4.2 3.7" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.2" />
    </svg>
  );
}
