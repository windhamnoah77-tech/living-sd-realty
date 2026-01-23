import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#0b0b0b",
          color: "#fff",
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial',
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div
            style={{
              fontSize: 36,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.72)",
            }}
          >
            Living San Diego Realty
          </div>

          <div style={{ fontSize: 74, lineHeight: 1.0, fontWeight: 600 }}>
            Trust &amp; Estate Sales
          </div>

          <div style={{ fontSize: 30, lineHeight: 1.0, color: "rgba(255,255,255,0.80)" }}>
            San Diego · Bay Area · Los Angeles (by request)
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ fontSize: 20, color: "rgba(255,255,255,0.72)" }}>
            livingsandiegorealty.com
          </div>
            
          <div
            style={{
              fontSize: 20,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.72)",
            }}
          >
         Noah Windham·CA DRE #02227646·R B Haley Inc·CA DRE #01843189
          </div>
        </div>
      </div>
    ),
    size
  );
}
