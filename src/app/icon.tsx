import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "22px solid #a97228",
          background: "#002b17",
          color: "#f8f6f0",
          fontFamily: "serif",
          fontSize: 210,
          letterSpacing: -18,
        }}
      >
        KH
      </div>
    ),
    size,
  );
}
