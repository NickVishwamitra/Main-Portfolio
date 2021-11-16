import Head from 'next/head';
import { Button, Container, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import { useNotifications } from '@mantine/notifications';
import { Prism } from '@mantine/prism';
import { DatePicker } from '@mantine/dates';
import HeroSection from '../components/HeroSection';
import Navigation from '../components/Navigation';
import Skills from '../components/Skills';

export default function Home() {
  const notifications = useNotifications();
  const theme = useMantineTheme();
  return (
    <>
      <Head>
        <title>Mantine Next template</title>
        <meta name="description" content="Mantine Next template" />
        <link
          rel="icon"
          href="https://mantine.dev/favicon.svg?v=c7bf473b30e5d81722ea0acf3a11a107"
          type="image/svg+xml"
        />
      </Head>
      <main>
        <Navigation />
        <HeroSection />
        <Skills />
      </main>
    </>
  );
}
