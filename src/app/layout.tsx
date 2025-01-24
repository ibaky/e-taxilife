'use client';
import './globals.css';
import { KitchnProvider } from 'kitchn';
import { LanguageProvider } from '../context/LanguageContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <KitchnProvider>
            {children}
          </KitchnProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}