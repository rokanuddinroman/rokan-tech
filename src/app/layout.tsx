import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({
  display: "swap",
  weight: ["300", "400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rokan.tech"),
  title: {
    default: "Rokan Tech – NextJS and Framer Developer",
    template: `%s | Rokan tech`,
  },
  description:
    "Rokan is a Full-Stack Developer, specialized in NextJS and Framer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-grotesk@200,700,400,600,300,1,500&display=swap"
          rel="stylesheet"
        />
        <meta property="og:image" content="/opengraph-image.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image" content="/opengraph-image.png" />
        <meta name="twitter:image:type" content="image/png" />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="630" />
        <meta property="og:image:alt" content="About Rokan" />
        <meta name="twitter:image:alt" content="About Rokan" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
