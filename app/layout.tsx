import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { LanguageProvider } from "@/contexts/language-context";
import { Header } from "@/components/header";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { StructuredData } from "@/components/structured-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Stuyvesant Summer Tutoring | Free K-9 Tutoring NYC",
    template: "%s | Stuyvesant Summer Tutoring"
  },
  description: "Free K-9 ELA, Math & Science tutoring across NYC. Stuyvesant Summer Tutoring connects volunteer tutors with students at libraries in Manhattan, Queens, Brooklyn, and Staten Island. 96% satisfaction rating.",
  keywords: [
    "Stuyvesant Summer Tutoring",
    "SST",
    "free tutoring NYC",
    "K-9 tutoring",
    "Stuyvesant tutoring",
    "NYC library tutoring",
    "math tutoring",
    "ELA tutoring",
    "science tutoring",
    "volunteer tutoring",
    "Queens tutoring",
    "Brooklyn tutoring",
    "Manhattan tutoring",
    "Staten Island tutoring",
    "free education NYC",
    "Stuyvesant High School"
  ],
  authors: [{ name: "Stuyvesant Summer Tutoring" }],
  creator: "Stuyvesant Summer Tutoring",
  publisher: "Stuyvesant Summer Tutoring",
  metadataBase: new URL('https://stuyvesantsummertutoring.org'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://stuyvesantsummertutoring.org',
    title: 'Stuyvesant Summer Tutoring | Free K-9 Tutoring NYC',
    description: 'Free K-9 ELA, Math & Science tutoring across NYC. 96% satisfaction rating. Volunteer tutors from Stuyvesant High School serving students at libraries citywide.',
    siteName: 'Stuyvesant Summer Tutoring',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stuyvesant Summer Tutoring | Free K-9 Tutoring NYC',
    description: 'Free K-9 ELA, Math & Science tutoring across NYC. 96% satisfaction rating.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code-here',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <Header />
            <Navbar />
            {children}
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
