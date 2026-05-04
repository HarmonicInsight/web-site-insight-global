import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "HARMONIC insight — Stop juggling 4 apps for one Office file";
export const size = { width: 1200, height: 630 };
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
          background:
            "linear-gradient(135deg, #1a1a2e 0%, #2a2a4e 50%, #1a1a2e 100%)",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Gold accent blob */}
        <div
          style={{
            position: "absolute",
            top: "-200px",
            right: "-200px",
            width: "600px",
            height: "600px",
            background: "rgba(184, 148, 47, 0.25)",
            borderRadius: "50%",
            filter: "blur(80px)",
          }}
        />

        {/* Logo / brand */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            position: "relative",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "14px",
              background: "linear-gradient(135deg, #c5a55a 0%, #b8942f 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "32px",
              fontWeight: 800,
              color: "#1a1a2e",
            }}
          >
            H
          </div>
          <div
            style={{
              fontSize: "26px",
              fontWeight: 700,
              color: "white",
              letterSpacing: "-0.02em",
              display: "flex",
            }}
          >
            HARMONIC
            <span style={{ color: "#c5a55a", marginLeft: "8px" }}>insight</span>
          </div>
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "28px",
            position: "relative",
          }}
        >
          <div
            style={{
              fontSize: "76px",
              fontWeight: 800,
              color: "white",
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Stop juggling 4 apps</span>
            <span>
              for{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #dcb150 0%, #c5a55a 100%)",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                one Office file.
              </span>
            </span>
          </div>

          <div
            style={{
              fontSize: "26px",
              color: "#a0a0b8",
              lineHeight: 1.4,
              display: "flex",
            }}
          >
            Translate · Simplify · Summarize · Polish — layout always preserved.
          </div>
        </div>

        {/* Footer stats */}
        <div
          style={{
            display: "flex",
            gap: "48px",
            alignItems: "center",
            position: "relative",
          }}
        >
          {[
            { num: "47", label: "languages" },
            { num: "6", label: "AI engines" },
            { num: "4", label: "formats" },
            { num: "0", label: "cloud upload" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "4px",
              }}
            >
              <div
                style={{
                  fontSize: "44px",
                  fontWeight: 700,
                  color: "#c5a55a",
                  lineHeight: 1,
                }}
              >
                {stat.num}
              </div>
              <div
                style={{
                  fontSize: "16px",
                  color: "#8888a0",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
          <div
            style={{
              marginLeft: "auto",
              fontSize: "20px",
              color: "#c5a55a",
              fontWeight: 600,
              display: "flex",
            }}
          >
            insightoffice.io
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
