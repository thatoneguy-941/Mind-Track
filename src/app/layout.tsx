import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MindTrack | Mental Health Tracking App",
  description: "Track your mood, build healthy habits, and improve your mental wellbeing with MindTrack.",
  keywords: ["mental health", "mood tracking", "habit building", "wellbeing", "mental health app"],
  authors: [{ name: "MindTrack Team" }],
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://mindtrack.example.com"),
  openGraph: {
    title: "MindTrack | Mental Health Tracking App",
    description: "Track your mood, build healthy habits, and improve your mental wellbeing with MindTrack.",
    images: [{ url: "/hero-image.svg", width: 800, height: 600, alt: "MindTrack App Interface" }],
  },
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
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
