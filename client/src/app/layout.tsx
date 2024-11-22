import Link from "next/link";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav data-testid="navbar">
          <Link href="/">Home</Link>
          {" | "}
          <Link href="/about">About</Link>
          {" | "}
          <Link href="/conduct">Code of Conduct</Link>
          {" | "}
          <Link href="/privacy">Privacy Policy</Link>
          {" | "}
          <Link href="/blog">Blog</Link>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
