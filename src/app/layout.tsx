import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "thedwincmpy",
  description: "thedwincmpy-site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`app-container antialiased`}>
        <div className="content-container">{children}</div>
      </body>
    </html>
  );
}
