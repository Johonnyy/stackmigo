import type { Metadata } from "next";
import { Source_Serif_4, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PostHogProvider } from "./providers";

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Stackmigo: security and liability audits for AI-built apps",
  description:
    "Stackmigo reviews vibe-coded apps for the security and liability gaps that ship with fast code: exposed secrets, missing authorization, unsafe data access. Found and located before they cost you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sourceSerif.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}
