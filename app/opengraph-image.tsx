import { ImageResponse } from "next/og";
import { profile } from "@/lib/data/profile";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#0A0C10",
          padding: "80px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            color: "#52C7B8",
            letterSpacing: 4,
            textTransform: "uppercase",
            marginBottom: 28,
          }}
        >
          {profile.title} — {profile.yearsExperience} Years
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 700,
            color: "#EDEFF2",
            lineHeight: 1.15,
            maxWidth: 980,
          }}
        >
          I build interfaces that scale, and I can show you the numbers.
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#8891A0",
            marginTop: 36,
          }}
        >
          {profile.brandName}.
        </div>
      </div>
    ),
    { ...size }
  );
}
