import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PT. Trans Nusa Services - Solusi Transportasi & Logistik Terpercaya",
  description:
    "PT. Trans Nusa Services adalah perusahaan induk yang bergerak di bidang transportasi dan logistik. Dengan anak perusahaan Drive-in (kursus mengemudi) dan Sumatrans (logistik & pengiriman).",
  icons: {
    icon: "/favicon.png",
  },
  other: {
    "facebook-domain-verification": "1zpv9dhucdmiou4g431y8cso4ronqe",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
