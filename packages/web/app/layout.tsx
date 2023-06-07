/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import { Metadata } from 'next';
import Script from 'next/script';
import { Header } from '../src/components/feature/header/Header';
import { ThemeProviderBody } from '../src/components/feature/theme/ThemeContext';
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
      <ThemeProviderBody className="h-full flex flex-col">
        <Providers>
          {/* @ts-expect-error server component */}
          <Header />
          <div className="flex-1" style={{ height: 'calc(100% - 57px)' }}>
            {children}
          </div>
        </Providers>
        <Script src="./theme.js" strategy="beforeInteractive"></Script>
      </ThemeProviderBody>
    </html>
  );
}
