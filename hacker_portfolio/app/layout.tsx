import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chandrashekar | Portfolio",
  description: "Software Development Engineer & AI/ML Engineer Portfolio"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header style={{ padding: 20, display: "flex", gap: 20 }}>
          <Link href="/">Home</Link>
          <Link href="/skills">Skills</Link>
          <Link href="/work">Work</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/blog">Blog</Link>
        </header>
        <main style={{ padding: 20 }}>{children}</main>
      </body>
    </html>
  );
}
