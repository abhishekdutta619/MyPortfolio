/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === "development";

// Next's dev server uses webpack Fast Refresh, which needs eval() for hot
// module replacement -- that only exists in `next dev`, never in the
// deployed production build. Production keeps the strict policy (no
// unsafe-eval); dev gets what it actually needs to run at all.
const scriptSrc = isDev
  ? "script-src 'self' 'unsafe-inline' 'unsafe-eval'"
  : "script-src 'self' 'unsafe-inline'";
const connectSrc = isDev
  ? "connect-src 'self' https://api.web3forms.com ws:"
  : "connect-src 'self' https://api.web3forms.com";

const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    imageSizes: [256, 320, 384, 450, 640],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            // Honest tradeoff, not overclaimed: 'unsafe-inline' is needed for
            // the JSON-LD script tag and some inline styles (Framer Motion,
            // Tailwind arbitrary values) without a full nonce-based pipeline.
            // This still blocks the core CSP threat model -- loading of
            // externally-injected/malicious scripts -- just not 100% of
            // inline-injection XSS the way a nonce-based policy would.
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              scriptSrc,
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data:",
              "font-src 'self'",
              connectSrc,
              "form-action 'self' https://api.web3forms.com",
              "frame-ancestors 'none'",
              "base-uri 'self'",
            ].join("; "),
          },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
