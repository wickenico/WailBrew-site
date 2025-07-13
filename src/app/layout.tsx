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
  title: "WailBrew - A Minimalistic Homebrew GUI",
  description: "WailBrew is a beautiful and intuitive GUI for Homebrew package management on macOS. Install, update, and manage your packages with ease.",
  keywords: ["homebrew", "gui", "macos", "package manager", "wailbrew"],
  authors: [{ name: "WailBrew Team" }],
  openGraph: {
    title: "WailBrew - A Minimalistic Homebrew GUI",
    description: "WailBrew is a beautiful and intuitive GUI for Homebrew package management on macOS.",
    type: "website",
    url: "https://wailbrew.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "WailBrew - A Minimalistic Homebrew GUI",
    description: "WailBrew is a beautiful and intuitive GUI for Homebrew package management on macOS.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
