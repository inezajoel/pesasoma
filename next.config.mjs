/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // The service worker must never be cached by the browser itself,
        // otherwise users would not receive updates.
        source: "/sw.js",
        headers: [
          { key: "Cache-Control", value: "no-cache, no-store, must-revalidate" },
          { key: "Service-Worker-Allowed", value: "/" },
        ],
      },
    ];
  },
};

export default nextConfig;
