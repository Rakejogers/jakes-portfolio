import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jake Rogers — Software Engineer",
  description:
    "Portfolio of Jake Rogers, a computer science student building full-stack, AI, and product experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
