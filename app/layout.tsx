import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Mehkar Connect - आपल्या शहराची Digital ओळख | Local App for Mehkar",
  description: "Mehkar Connect (मेहकर कनेक्ट) is the ultimate local community app for Mehkar. Get city updates, request local products, find home services (plumber, electrician), seek emergency help, and support local businesses.",
  keywords: [
    "Mehkar", "Mehkar Connect", "Local App Mehkar", "Digital Mehkar", 
    "Mehkar City App", "Mehkar News", "Mehkar Updates", "Local Services Mehkar",
    "Mehkar Community", "Buldhana District", "Maharashtra", "Buy Local Mehkar",
    "Mehkar Social App", "Mehkar Marketplace"
  ],
  authors: [{ name: "Mehkar Connect Team" }],
  creator: "Mehkar Connect",
  publisher: "Mehkar Connect",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Mehkar Connect - The Official Community App for Mehkar",
    description: "Connect with Mehkar digitally! Get local updates, request items, find services, and support local businesses in Mehkar.",
    url: "https://mehkarconnect.pages.dev",
    siteName: "Mehkar Connect",
    images: [
      {
        url: "/image.png",
        width: 1200,
        height: 630,
        alt: "Mehkar Connect App Preview",
      },
    ],
    locale: "mr_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mehkar Connect - Digital Mehkar",
    description: "The all-in-one local community app for Mehkar city. Updates, services, and local shopping.",
    images: ["/image.png"],
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
  appLinks: {
    android: {
      package: 'com.mehkar.connect',
      app_name: 'Mehkar Connect',
    },
    web: {
      url: 'https://mehkarconnect.pages.dev',
      should_fallback: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data (JSON-LD) for AEO and GEO optimization
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Mehkar Connect',
    operatingSystem: 'ANDROID',
    applicationCategory: 'SocialNetworkingApplication',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1540'
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
    },
    description: 'Mehkar Connect is a localized social and utility application for the citizens of Mehkar, Maharashtra. It offers news updates, local service bookings, emergency assistance, and local business support. Download the app directly from our website.',
    url: 'https://mehkarconnect.pages.dev',
    publisher: {
      '@type': 'Organization',
      name: 'Mehkar Connect Team'
    }
  };

  return (
    <html lang="mr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}
