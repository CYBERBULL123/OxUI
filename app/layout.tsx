import type { Metadata } from "next";
import React, { useState, useEffect } from 'react'
import localFont from "next/font/local";
import "./globals.css";

// Font definitions
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

// Metadata export
export const metadata: Metadata = {
  title: "OxSecure Intelligence | Advanced AI Cybersecurity Solutions",
  description:
    "OxSecure Intelligence delivers cutting-edge AI-powered cybersecurity solutions for threat detection, response, and digital asset protection. Discover our innovative tools.",
  keywords:
    "AI cybersecurity, OxSecure Intelligence, threat detection, security solutions, artificial intelligence, digital protection, penetration testing",
  authors: [{ name: "Aditya Pandey", url: "https://www.linkedin.com/in/aditya-pandey-896109224" }],
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
  openGraph: {
    title: "OxSecure Intelligence | AI-Driven Security Solutions",
    description:
      "Explore OxSecure Intelligence's advanced AI tools for comprehensive cybersecurity and digital asset protection.",
    url: "https://www.oxsecure.in",
    siteName: "OxSecure Intelligence",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://www.oxsecure.in/og-image.jpg", // Update with actual image URL
        width: 1200,
        height: 630,
        alt: "OxSecure Intelligence - AI Cybersecurity Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@OxSecure",
    creator: "@AdityaPandey",
    title: "OxSecure Intelligence | AI Cybersecurity Solutions",
    description:
      "Advanced AI-powered tools for cybersecurity by OxSecure Intelligence.",
    images: ["https://www.oxsecure.in/twitter-image.jpg"], // Update with actual image URL
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" /> {/* Adjust to match your brand */}
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.authors[0].name} />
        <meta name="robots" content="index, follow" />
        <title>{metadata.title as string}</title>
        <link rel="canonical" href="https://www.oxsecure.in" />

        {/* Favicon Setup */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta name="msapplication-TileImage" content="/favicon.ico" />



        {/* Font Preloading */}
        <link
          rel="preload"
          href="./fonts/GeistVF.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="./fonts/GeistMonoVF.woff"
          as="font"
          type="font/woff"
          crossOrigin="anonymous"
        />

        {/* Open Graph */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        {metadata.openGraph.images.map((image, index) => (
          <React.Fragment key={index}>
            <meta property="og:image" content={image.url} />
            <meta property="og:image:width" content={image.width.toString()} />
            <meta property="og:image:height" content={image.height.toString()} />
            <meta property="og:image:alt" content={image.alt} />
          </React.Fragment>
        ))}

        {/* Twitter */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:creator" content={metadata.twitter.creator} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        {metadata.twitter.images && (
          <meta name="twitter:image" content={metadata.twitter.images[0]} />
        )}

        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "OxSecure Intelligence",
              url: "https://www.oxsecure.in",
              logo: "/favicon.ico", // Update with actual logo URL
              description:
                "OxSecure Intelligence offers AI-powered cybersecurity solutions for advanced threat detection and response.",
              sameAs: [
                "https://www.linkedin.com/company/oxsecure-cyberbull",
                "https://twitter.com/OxSecure",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-555-123-4567", // Update with actual phone
                contactType: "Customer Service",
                email: "support@oxsecure.com", // Update with actual email
              },
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}