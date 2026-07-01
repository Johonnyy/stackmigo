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
  title: "Stackmigo: AI receptionists & 24/7 answering for businesses",
  description:
    "Stackmigo answers every call to your business — books the job, screens the caller, dispatches the emergency, and texts you the details. AI receptionists and automated answering for home services, clinics, and any business that can't afford a missed call.",
  openGraph: {
    title: "Stackmigo: never let another call go to voicemail",
    description:
      "An AI receptionist that answers every call, 24/7 — booking jobs, screening callers, and dispatching emergencies for home services and medical practices.",
    type: "website",
  },
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
