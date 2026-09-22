import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "8px solid #a97228",
          borderRadius: 36,
          background: "#002b17",
          color: "#f8f6f0",
          fontFamily: "serif",
          fontSize: 72,
          letterSpacing: -6,
        }}
      >
        KH
      </div>
    ),
    size,
  );
}
