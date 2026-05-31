import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Mehkar Connect - आपल्या शहराची Digital ओळख",
  description: "मेहकरमधील अपडेट्स, वस्तू विनंती, घरपोच सेवा, मदत आणि community आता एका शक्तिशाली ॲपमध्ये.",
  keywords: ["Mehkar", "Mehkar Connect", "Local App", "Community", "Digital Mehkar"],
  authors: [{ name: "Mehkar Connect Team" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="mr">
      <body className={`${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}
