import type { Metadata, Viewport } from "next";
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
  title: "VIBE-ID | AI Aesthetic Persona Analysis",
  description: "Discover your aesthetic archetype. One selfie. Nine possibilities. Find your visual DNA.",
  keywords: ["aesthetic", "persona", "AI", "style", "fashion", "identity", "archetype"],
  authors: [{ name: "VIBE-ID" }],
  openGraph: {
    title: "VIBE-ID | AI Aesthetic Persona Analysis",
    description: "Discover your aesthetic archetype through AI-powered visual analysis.",
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "VIBE-ID | AI Aesthetic Persona Analysis",
    description: "Discover your aesthetic archetype through AI-powered visual analysis.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#F9F9F7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var savedTheme = localStorage.getItem('vibe-id-theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#F9F9F7] dark:bg-[#0a0a0a] text-[#171717] dark:text-[#F9F9F7] transition-colors`}
      >
        {children}
      </body>
    </html>
  );
}
