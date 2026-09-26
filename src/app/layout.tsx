import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ThemeRegistry from "@/theme/ThemeRegistry";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ajay Ram Kumar | Senior Full Stack Developer & Architect",
  description: "Portfolio of Ajay Ram Kumar H C — Senior Full Stack Developer (React.js, Next.js, React Native, Node.js, Three.js, GSAP) with 9+ years experience delivering enterprise platforms for Walmart, Asato.ai & more.",
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
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
