import type { Metadata, Viewport } from "next";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";
import "./globals.css";

export const metadata: Metadata = {
  title: "PesaSoma",
  description: "Wige gucunga amafaranga yawe. Learn to manage your money.",
  applicationName: "PesaSoma",
  appleWebApp: { capable: true, title: "PesaSoma", statusBarStyle: "default" },
  icons: { icon: "/icons/icon-192.png", apple: "/icons/icon-192.png" },
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
        <div className="mx-auto min-h-screen max-w-md px-4 py-6">{children}</div>
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
