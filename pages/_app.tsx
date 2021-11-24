import { AppProps } from 'next/app';
import Head from 'next/head';
import {
  MantineProvider,
  NormalizeCSS,
  GlobalStyles,
  ColorSchemeProvider,
  ColorScheme,
} from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { useState } from 'react';
import '../styles/globals.css';

export default function App(props: AppProps) {
  const [colorScheme, setColorScheme] = useState<any>('dark');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Mantine next example</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
          theme={{
            /** Put your mantine theme override here */
            colorScheme: colorScheme,
            colors: {
              main: [
                '#85A7D6',
                '#6e96cf',
                '#5785C7',
                '#4876b8',
                '#3867A8',
                '#335e99',
                '#24416B',
                '#1d3557',
                '#1d3557',
              ],
            },
            primaryColor: 'main',
          }}
        >
          <NormalizeCSS />
          <GlobalStyles />
          <NotificationsProvider>
            <Component {...pageProps} />
          </NotificationsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}
