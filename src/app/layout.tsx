import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// 1. Import komponen Navbar yang baru kita buat
import Navbar from "@/components/Navbar"; 
import Searchbar from "@/components/Searchbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Movie DB - Next.js",
  description: "Explore millions of movies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950`}>
        <Navbar /> 
        {children}
      </body>
    </html>
  );
}