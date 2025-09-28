import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../../src/shared/styles/globals.css";
import { Header } from "../shared/components/Layout/Header";
import { Footer } from "../shared/components/Layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EasyRoute",
  description: "Otimizando suas entregas com grafos!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <div className="flex flex-col min-h-screen">
          {/* header */}
          <Header />

          {/* content */}
          <main className="flex-grow">{children}</main>

          {/* footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
