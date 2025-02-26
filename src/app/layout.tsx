import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "W&S Chuck Norris Quotes"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/ryx5pcm.css"/>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
