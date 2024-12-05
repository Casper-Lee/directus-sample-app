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
            <Link className="hover:text-neutral-400" href="/">
              Home
            </Link>
            {" | "}
            <Link className="hover:text-neutral-400" href="/about">
              About
            </Link>
            {" | "}
            <Link className="hover:text-neutral-400" href="/conduct">
              Code of Conduct
            </Link>
            {" | "}
            <Link className="hover:text-neutral-400" href="/privacy">
              Privacy Policy
            </Link>
            {" | "}
            <Link className="hover:text-neutral-400" href="/blog">
              Blog
            </Link>
          </nav>
        </div>
        <main>{children}</main>
      </body>
    </html>
  );
}
