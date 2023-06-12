/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import { Metadata } from 'next';
import { ThemeProviderBody } from '../src/theme/ThemeProvider';
import './global.css';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'Title',
  description: 'Description',
  authors: [
    {
      name: 'Melvynx',
      url: 'https://melvynx.com',
    },
  ],
  keywords: ['app-keywords'],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <Providers>
        <ThemeProviderBody className="h-full flex flex-col">
          {children}
        </ThemeProviderBody>
      </Providers>
    </html>
  );
}
