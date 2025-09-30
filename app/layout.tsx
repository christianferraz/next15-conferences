import './globals.css';

import Wrapper from '@/components/ui/Wrapper';
import { cn } from '@/utils/cn';
import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

const GeistSans = Geist({ subsets: ['latin'] });

export const metadata: Metadata = {
  description: 'Next.js 15 Conference Explorer using React 19, View Transitions and Prisma',
  title: 'Conference Explorer',
};

export default async function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en">
      <body className={cn(GeistSans.className, 'mb-12 flex grow flex-col p-4 sm:p-10 xl:px-40 2xl:px-60')}>
        <Toaster toastOptions={{ duration: 5000 }} position="top-right" />
        <Wrapper>
          <main>{children}</main>
        </Wrapper>
      </body>
    </html>
  );
}
