import type { Metadata, Viewport } from "next";
import { Shrikhand, Nunito, Noto_Serif_JP } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Petals } from "@/components/Petals";
import "./globals.css";

const shrikhand = Shrikhand({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-shrikhand",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-noto-serif-jp",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "Haru Sushi Oskarshamn — Prisvärd hämtsushi",
  description:
    "Haru Sushi i Oskarshamn — färsk sushi, friterad maki, sushiburrito och varmrätter. Beställ och hämta på Köpmangatan 5. Öppet mån–sön.",
  metadataBase: new URL("https://harusushi.se"),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "sushi Oskarshamn",
    "hämtsushi Oskarshamn",
    "Haru Sushi",
    "japansk mat Oskarshamn",
    "maki Oskarshamn",
    "sushiburrito",
    "take away sushi",
  ],
  openGraph: {
    title: "Haru Sushi Oskarshamn — Prisvärd hämtsushi",
    description:
      "Haru Sushi i Oskarshamn — färsk sushi, friterad maki, sushiburrito och varmrätter. Beställ och hämta på Köpmangatan 5.",
    url: "https://harusushi.se",
    siteName: "Haru Sushi",
    locale: "sv_SE",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Haru Sushi",
  url: "https://harusushi.se",
  telephone: "0760052045",
  email: "kontakt@harusushi.se",
  servesCuisine: ["Japanese", "Sushi"],
  priceRange: "$$",
  currenciesAccepted: "SEK",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Köpmangatan 5",
    postalCode: "572 30",
    addressLocality: "Oskarshamn",
    addressCountry: "SE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 57.2647,
    longitude: 16.4479,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "11:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "12:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "12:00",
      closes: "19:00",
    },
  ],
  hasMap: "https://maps.google.com/?q=Köpmangatan+5,+Oskarshamn",
  sameAs: ["https://harusushi.se"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${shrikhand.variable} ${nunito.variable} ${notoSerifJP.variable}`}
      >
        <Petals />
        <Navbar />
        <main className="relative z-1 pt-16 min-h-screen flex flex-col [&>section]:flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
