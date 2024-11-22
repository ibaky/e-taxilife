'use client';

import './globals.css';
import { KitchnProvider } from 'kitchn';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <KitchnProvider>
          {children}
        </KitchnProvider>
      </body>
    </html>
  );
}
