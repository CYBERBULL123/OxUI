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
  title: "OxSecure Intelligence", // Main title for the page
  description: "OxSecure Intelligence offers advanced security solutions, leveraging cutting-edge technology for threat detection and response. Discover our suite of AI-powered tools designed to protect your digital assets.",
  keywords: "security, AI, threat detection, cybersecurity, OxSecure Intelligence",
  author: "Aditya Pandey", // Replace with your name or company name
  robots: "index, follow", // Directives for search engines
  openGraph: {
    title: "OxSecure Intelligence", // Open Graph title
    description: "Explore OxSecure Intelligence for comprehensive security solutions using AI technologies.",
    url: "#", // Replace with your actual URL
    site_name: "OxSecure Intelligence", // Site name for Open Graph
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
    cardType: "summary_large_image", // Twitter card type
    site: "##", // Replace with your Twitter handle
    title: "OxSecure Intelligence",
    description: "Explore OxSecure Intelligence for comprehensive security solutions using AI technologies.",
    image: "##", // Replace with an actual image URL
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
