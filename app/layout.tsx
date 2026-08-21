import type { Metadata } from 'next';
import { Geist, DM_Sans } from 'next/font/google';
import '@/styles/globals.css';
import { DrawerProvider } from '@/contexts/DrawerContext';
import { Layout, NavDrawer } from '@/components/layout';

const geist = Geist({
  variable: '--font-sans',
  subsets: ['latin'],
});

const dmSans = DM_Sans({
  variable: '--font-serif',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Sharon Yang',
    default: 'Sharon Yang',
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
        className={`${geist.variable} ${dmSans.variable} antialiased m-auto min-h-full flex flex-col max-w-[1184px] px-4 lg:px-16 bg-white text-black dark:bg-black dark:text-white`}
      >
        <DrawerProvider>
          <NavDrawer />
          <Layout>{children}</Layout>
        </DrawerProvider>
      </body>
    </html>
  );
}
