'use client';
import './globals.css';
import { KitchnProvider } from 'kitchn';
import { LanguageProvider } from '../context/LanguageContext';
import MobileNav from '../components/MobileNav';

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
            <MobileNav />
          </KitchnProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}