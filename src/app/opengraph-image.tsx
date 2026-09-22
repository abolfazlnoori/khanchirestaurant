import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "رستوران خانچی؛ طعم اصیل ایران در سعادت‌آباد تهران";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const font = readFile(
  join(process.cwd(), "src/app/fonts/AbarHighFaNum-Bold.ttf"),
);

export default async function OpenGraphImage() {
  const fontData = await font;

  return new ImageResponse(
    (
      <div
        dir="rtl"
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          background: "#f6f2ec",
          color: "#002b17",
          fontFamily: "Abar",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 34,
            display: "flex",
            border: "2px solid #a97228",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 560,
            height: 560,
            left: -210,
            bottom: -250,
            display: "flex",
            borderRadius: 999,
            background: "#002b17",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 112, lineHeight: 1 }}>خانچی</div>
          <div
            style={{
              width: 86,
              height: 3,
              margin: "28px 0 22px",
              display: "flex",
              background: "#a97228",
            }}
          />
          <div style={{ fontSize: 42 }}>طعم اصیل ایران، در قلب امروز</div>
          <div style={{ marginTop: 22, fontSize: 25, color: "#6c655b" }}>
            رستوران ایرانی در سعادت‌آباد تهران
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            right: 66,
            bottom: 54,
            display: "flex",
            fontFamily: "serif",
            fontSize: 17,
            letterSpacing: 4,
            color: "#a97228",
          }}
        >
          KHANCHI RESTAURANT
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Abar",
          data: fontData,
          weight: 700,
          style: "normal",
        },
      ],
    },
  );
}
