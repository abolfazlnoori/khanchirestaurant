export function GET() {
  return Response.json(
    {
      status: "ok",
      service: "khanchi-web",
      version: process.env.APP_VERSION ?? "development",
    },
    {
      headers: {
        "Cache-Control": "no-store",
      },
    },
  );
}
