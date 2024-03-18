'use client';

import StyledJsxRegistry from './lib/registry'
import { roboto } from '@/app/fonts'
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from '@/contexts/Auth';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <AuthProvider>
          <Toaster
            toastOptions={{
              style: {
                background: "rgb(51, 65,85)",
                color: '#fff'
              }
            }}
          />
          <StyledJsxRegistry>
            <GlobalStyles />
            <ThemeProvider theme={theme}>
              {children}
            </ThemeProvider>
          </StyledJsxRegistry>
        </AuthProvider>
      </body>
    </html>
  );
}
