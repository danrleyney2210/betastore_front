import type { Metadata } from "next";
import { roboto } from '@/app/fonts'

export const metadata: Metadata = {
  title: "Beta Store",
  description: "Creat Store page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
