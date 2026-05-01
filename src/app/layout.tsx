import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"]
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "600", "700", "800"]
});

export const metadata: Metadata = {
  title: "Perlad — Innovación Sostenible en Cartón Panal",
  description: "Estructuras de cartón panal fabricadas con papel 100% reciclable. Soluciones de empaque sostenibles que protegen tu producto y el planeta.",
  keywords: ["cartón panal", "empaque sostenible", "reciclaje", "innovación", "Perlad", "estructuras de papel"],
  authors: [{ name: "Perlad" }],
  openGraph: {
    title: "Perlad — Innovación Sostenible",
    description: "Soluciones de empaque en cartón panal 100% reciclable.",
    url: "https://perlad.com",
    siteName: "Perlad",
    images: [
      {
        url: "/assets/logo-perlad.png",
        width: 800,
        height: 600,
        alt: "Logo Perlad - Innovación Sostenible",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Perlad — Innovación Sostenible",
    description: "Soluciones de empaque en cartón panal 100% reciclable.",
    images: ["/assets/logo-perlad.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${dmSans.variable} ${playfair.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Perlad",
              "url": "https://perlad.com",
              "logo": "https://perlad.com/assets/logo-perlad.png",
              "description": "Estructuras de cartón panal fabricadas con papel 100% reciclable. Soluciones de empaque sostenibles.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "MX"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "contacto@perlad.com"
              }
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}
