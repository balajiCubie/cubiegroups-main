import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script"; // Import Script component
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Breadcrumbs from "./components/Breadcrumbs";
import { ThemeProvider } from "./context/ThemeContext";
import CookieConsent from "./components/CookieConsent"; // Import the CookieConsent component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cubie Group - Building a Modular Future",
  description: "Cubie Group is a multi-sector holding company at the intersection of technology, hardware, creative industries, and frontier research. We are building a modular future.",
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
              "description": "Cubie Group is a multi-sector holding company at the intersection of technology, hardware, creative industries, and frontier research. We are building a modular future.",
              "sameAs": [
                "https://www.linkedin.com/company/cubiegroup",
                "https://twitter.com/cubiegroup"
              ]
            })
          }}
        />
        {/* Google Analytics */}
        <meta name="google-site-verification" content="AUwcMVU9uIVuldmtmtZtzJ5bRUQZpwa0veRyR-DnL1Y" />
        {/* Google Analytics - Replace 'YOUR_GA_TRACKING_ID' with your actual Google Analytics ID */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_TRACKING_ID"
        />
        <Script
          id="google-analytics-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'YOUR_GA_TRACKING_ID');
            `,
          }}
        />
      </head>
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300`}>
        <ThemeProvider>
          <Header />
          <Breadcrumbs />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <CookieConsent /> {/* Add the CookieConsent component */}
        </ThemeProvider>
      </body>
    </html>
  );
}
