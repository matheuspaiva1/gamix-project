import type { Metadata } from "next";
import "./globals.css";
import Provider from "@/contexts/provider";


export const metadata: Metadata = {
  title: "GamIX",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
