import type {Metadata} from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: 'FloatType',
  description: 'A floating keyboard and quick actions interface.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} dark`}> {/* Apply font variables to html tag */}
      <body className="antialiased"> {/* antialiased class for font smoothing */}
        {children}
        <Toaster />
      </body>
    </html>
  );
}
