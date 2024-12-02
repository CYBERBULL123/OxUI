import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
  title: "OxSecure Intelligence",
  description:
    "OxSecure Intelligence offers advanced security solutions, leveraging cutting-edge technology for threat detection and response. Discover our suite of AI-powered tools designed to protect your digital assets.",
  keywords: "security, AI, threat detection, cybersecurity, OxSecure Intelligence",
  author: "Aditya Pandey",
  robots: "index, follow",
  openGraph: {
    title: "OxSecure Intelligence",
    description: "Explore OxSecure Intelligence for comprehensive security solutions using AI technologies.",
    url: "#", // Replace with your actual URL
    site_name: "OxSecure Intelligence",
    images: [
      {
        url: "##", // Replace with an actual image URL
        width: 1200,
        height: 630,
        alt: "OxSecure Intelligence - Protecting Your Digital Assets",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "##", // Replace with your Twitter handle
    title: "OxSecure Intelligence",
    description: "Explore OxSecure Intelligence for comprehensive security solutions using AI technologies.",
    images: ["##"], // Replace with an actual image URL
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
        <link rel="icon" href="logo.ico" type="image/x-icon" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="robots" content={metadata.robots} />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.site_name} />
        {metadata.openGraph.images.map((image, index) => (
          <meta key={index} property="og:image" content={image.url} />
        ))}
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        {metadata.twitter.images && <meta name="twitter:image" content={metadata.twitter.images[0]} />}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
