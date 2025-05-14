import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "三角ロジック組立演習システム",
  description: "三角ロジック組立演習システム2025",
};

const notoSansJP = Noto_Sans_JP({
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={notoSansJP.className} suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  );
}
