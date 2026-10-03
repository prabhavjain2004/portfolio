import { ImageResponse } from "next/og";

export const alt = "Prabhav Jain — Agentic AI Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#000",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 24,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#FF3E00",
          }}
        >
          Agentic AI Engineer
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 150,
            lineHeight: 0.9,
            letterSpacing: -4,
            fontFamily: "serif",
          }}
        >
          <span style={{ fontStyle: "italic" }}>PRABHAV</span>
          <span style={{ marginLeft: 120 }}>JAIN</span>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#9ca3af",
            borderTop: "1px solid #1f2937",
            paddingTop: 28,
          }}
        >
          Production multi-agent systems · LangGraph · FastAPI · NestJS
        </div>
      </div>
    ),
    size
  );
}
