import type { Metadata, Viewport } from "next";
import { Fraunces, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-fraunces",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-hanken",
  display: "swap",
});

const jb = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono-jb",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Onyx — Mobile Car Detailing in West London & near Heathrow",
  description:
    "Onyx is a mobile car detailing service based in Hounslow, minutes from Heathrow. We bring a fully-equipped detail bay to your door across West London — express washes, full interior/exterior details, and ceramic paint protection.",
  keywords: [
    "mobile car detailing London",
    "mobile car wash Heathrow",
    "car detailing Hounslow",
    "ceramic coating West London",
    "mobile valeting Richmond",
  ],
  openGraph: {
    title: "Onyx — Mobile Car Detailing, West London",
    description: "We bring the detail bay to your door, anywhere within 10 miles of Heathrow.",
    type: "website",
    locale: "en_GB",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${hanken.variable} ${jb.variable}`}
    >
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
