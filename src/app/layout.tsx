import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";

const NotoSansJP = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Social",
  description: "Next.jsで作成した日本人専用のSNSです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${NotoSansJP.className}`}>
        <div className="mx-auto w-full max-w-6xl flex flex-col">
          <Header />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
