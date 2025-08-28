import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script"; // Import Script component
import "./globals.css";
import { getGoogleAnalyticsId } from "./utils/helpers";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Breadcrumbs from "./components/shared/Breadcrumbs";
import { ThemeProvider } from "./context/ThemeContext";
import CookieConsent from "./components/shared/CookieConsent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cubie Group - AI-Powered Finance Ecosystem for Every Investment Decision",
  description: "Cubie Group builds the world’s most advanced investment banking SaaS — powering valuation, deal execution, and capital growth.",
  openGraph: {
    title: "Cubie Group - AI-Powered Finance Ecosystem for Every Investment Decision",
    description: "Cubie Group builds the world’s most advanced investment banking SaaS — powering valuation, deal execution, and capital growth.",
    url: "https://www.cubiegroup.com",
    siteName: "Cubie Group",
    images: [
      {
        url: "https://www.cubiegroup.com/og-image.jpg", // Replace with your actual OG image
        width: 1200,
        height: 630,
        alt: "Cubie Group",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cubie Group - AI-Powered Finance Ecosystem",
    description: "Cubie Group builds the world’s most advanced investment banking SaaS — powering valuation, deal execution, and capital growth.",
    creator: "@cubiegroup", // Replace with your actual Twitter handle
    images: ["https://www.cubiegroup.com/twitter-image.jpg"], // Replace with your actual Twitter image
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
        {/* Schema.org Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Cubie Group",
              "url": "https://www.cubiegroup.com",
              "logo": "https://www.cubiegroup.com/logo.png",
              "description": "Cubie Group builds the world’s most advanced investment banking SaaS — powering valuation, deal execution, and capital growth.",
              "sameAs": [
                "https://www.linkedin.com/company/cubiegroup",
                "https://twitter.com/cubiegroup"
              ]
            })
          }}
        />
        {/* Google Analytics */}
        {getGoogleAnalyticsId() && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${getGoogleAnalyticsId()}`}
            />
            <Script
              id="google-analytics-script"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${getGoogleAnalyticsId()}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <ThemeProvider>
          <Header />
          <Breadcrumbs />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}
