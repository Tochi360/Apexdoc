import type { Metadata } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.apexdms.ca"),
  title:
    "Apex Document Management Services · Premium Records Management for Canadian SMBs",
  description:
    "A discreet, professional records management practice for Canadian small and medium-sized businesses. Complimentary records audit, digital filing systems, document digitization, and compliance solutions.",
  keywords: [
    "records management Canada",
    "premium document management services Canada",
    "digital filing system small business",
    "document digitization Canada",
    "records management consulting",
    "compliance document management Canada",
    "Canadian SMB records management",
    "Canadian records retention",
    "professional records audit",
    "PIPEDA compliance",
    "small business records solutions",
    "records management Toronto",
    "discreet document management",
    "Canadian records practice",
  ],
  openGraph: {
    title: "Apex Document Management Services",
    description:
      "A discreet, professional records management practice for Canadian SMBs.",
    type: "website",
    locale: "en_CA",
    siteName: "Apex Document Management Services",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Apex — Records management for Canadian businesses",
      },
    ],
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "https://www.apexdms.ca" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Apex Document Management Services",
  description:
    "A discreet, professional records management practice for Canadian small and medium-sized businesses.",
  url: "https://www.apexdms.ca",
  areaServed: { "@type": "Country", name: "Canada" },
  serviceType: [
    "Records Management",
    "Document Digitization",
    "Digital Filing Systems",
    "Compliance Policy",
    "Staff Training",
  ],
  foundingDate: "2025",
  address: { "@type": "PostalAddress", addressCountry: "CA" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-CA"
      className={`${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} h-full scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full bg-paper-light text-ink-muted antialiased">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
