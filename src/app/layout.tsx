import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import NotificationPage from "@/components/Notification";
import Navbar from "@/components/Navbar";
import CreateStore from "@/Store/CreateStore";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Delicious",
  description: "my Restraunt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CreateStore>
          <NotificationPage />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </CreateStore>
      </body>
    </html>
  );
}
