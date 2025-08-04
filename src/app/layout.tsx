import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";

export const metadata: Metadata = {
  title: "Pathmark Advisory Co. Ltd - The Path to Bringing Your Vision to Life",
  description: "Professional consulting and project execution services across Energy, Construction, Technology, Finance, and Government Relations. Based in Abuja, Nigeria.",
  keywords: "consulting, project execution, energy, construction, technology, finance, Nigeria, Abuja",
  authors: [{ name: "Pathmark Advisory Co. Ltd" }],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: "Pathmark Advisory Co. Ltd",
    description: "The Path to Bringing Your Vision to Life",
    url: "https://www.pathmarkadvisory.com",
    siteName: "Pathmark Advisory",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pathmark Advisory Co. Ltd",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pathmark Advisory Co. Ltd",
    description: "The Path to Bringing Your Vision to Life",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
