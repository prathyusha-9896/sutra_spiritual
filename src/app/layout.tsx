import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Sutra Spiritual clinic",
  description: "Technology meets Tradition",
  icons: {
    icon: "/favicon.png",
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
      >
        {children}
      </body>
    </html>
  );
}
