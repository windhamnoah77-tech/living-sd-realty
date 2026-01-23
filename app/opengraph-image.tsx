import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #0a0a0a 0%, #1f1f1f 60%, #0a0a0a 100%)",
          color: "white",
          fontFamily:
            'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
        }}
      >
        <div style={{ fontSize: 56, lineHeight: 1.05 }}>
          Living San Diego Realty
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 30, opacity: 0.9, maxWidth: 980 }}>
            Trust & estate real estate for trustees, executors, and investors.
          </div>

          <div
            style={{
              fontSize: 18,
              opacity: 0.75,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              fontFamily:
                'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial',
            }}
          >
            Noah Windham · CA DRE #02227646 · R B Haley Inc CA DRE #01843189
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
