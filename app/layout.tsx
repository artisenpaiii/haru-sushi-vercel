import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Haru Sushi — Prisvärd hämtsushi i Oskarshamn",
  description:
    "Färsk sushi, friterad maki, sushiburrito och varmrätter. Beställ och hämta — enkelt, gott och prisvärt.",
  metadataBase: new URL("https://harusushi.se"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Haru Sushi — Prisvärd hämtsushi i Oskarshamn",
    description:
      "Färsk sushi, friterad maki, sushiburrito och varmrätter. Beställ och hämta — enkelt, gott och prisvärt.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body
        className={`${shrikhand.variable} ${nunito.variable} ${notoSerifJP.variable}`}
      >
        <Petals />
        <Navbar />
        <main className="relative z-1 pt-16 min-h-[calc(100vh-4rem)] flex flex-col [&>section]:flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
