import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abu Hossain Foysal | Full-Stack Developer",
  description:
    "Full-stack developer working with TypeScript, Next.js, NestJS, and PostgreSQL. Based in Dhaka, Bangladesh.",
  openGraph: {
    title: "Abu Hossain Foysal | Full-Stack Developer",
    description:
      "Full-stack developer working with TypeScript, Next.js, NestJS, and PostgreSQL.",
    url: "https://ahfoysal.vercel.app",
    siteName: "Abu Hossain Foysal",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
