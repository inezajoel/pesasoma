import type { Metadata, Viewport } from "next";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";
import { ui } from "@/lib/i18n";
import { SITE_URL, buildMetadata } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "PesaSoma",
  appleWebApp: { capable: true, title: "PesaSoma", statusBarStyle: "default" },
  icons: { icon: "/icons/icon-192.png", apple: "/icons/icon-192.png" },
  ...buildMetadata({
    title: "PesaSoma - Wige gucunga amafaranga yawe",
    description: ui.siteDescription.rw + " " + ui.siteDescription.en,
    path: "/",
    lang: "rw",
  }),
};

export const viewport: Viewport = {
  themeColor: "#047857",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="rw">
      <body className="font-sans antialiased">
        <div className="mx-auto min-h-screen max-w-md px-4 py-6 md:max-w-3xl md:px-8 md:py-10 lg:max-w-5xl">{children}</div>
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
