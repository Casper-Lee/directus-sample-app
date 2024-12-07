import Link from "next/link";
import React from "react";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex justify-center">
          <nav className="flex justify-between w-2/5" data-testid="navbar">
            <Link
              data-testid="home-link"
              className="hover:text-neutral-400"
              href="/"
            >
              Home
            </Link>
            {" | "}
            <Link
              data-testid="about-link"
              className="hover:text-neutral-400"
              href="/about"
            >
              About
            </Link>
            {" | "}
            <Link
              data-testid="conduct-link"
              className="hover:text-neutral-400"
              href="/conduct"
            >
              Code of Conduct
            </Link>
            {" | "}
            <Link
              data-testid="privacy-link"
              className="hover:text-neutral-400"
              href="/privacy"
            >
              Privacy Policy
            </Link>
            {" | "}
            <Link
              data-testid="blog-link"
              className="hover:text-neutral-400"
              href="/blog"
            >
              Blog
            </Link>
          </nav>
        </div>
        <main>{children}</main>
      </body>
    </html>
  );
}
