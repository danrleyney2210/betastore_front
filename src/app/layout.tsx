'use client';

import StyledJsxRegistry from './lib/registry'
import { roboto } from '@/app/fonts'
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <StyledJsxRegistry>
          <GlobalStyles />
          <ThemeProvider theme={theme}>
            {children}
          </ThemeProvider>
        </StyledJsxRegistry>
      </body>
    </html>
  );
}
