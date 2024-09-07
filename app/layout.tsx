import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dania's Farewell",
  description: "Adios Amigo :)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icons/favicon.png" />

        {/* Change this to your favicon file */}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
