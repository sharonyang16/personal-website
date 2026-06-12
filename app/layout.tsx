import type { Metadata } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import { DrawerProvider } from "@/contexts/DrawerContext";

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Sharon Yang",
    default: "Sharon Yang",
  },
  description: "Sharon Yang's Personal + Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.className}`}>
      <body
        className={`$${geist.variable} ${instrumentSerif.variable} antialiased m-auto min-h-full flex flex-col max-w-[1184px] px-4 lg:px-16 bg-white text-black dark:bg-black dark:text-white`}
      >
        <DrawerProvider>
          <Layout>{children}</Layout>
        </DrawerProvider>
      </body>
    </html>
  );
}
