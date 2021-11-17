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
        <title>Nick Vishwamitra Portfolio</title>
        <meta name="description" content="Nick Vishwamitra Portfolio" />
        <link rel="icon" href="../images/myLogo.ico" />
      </Head>
      <main>
        <Navigation />
        <HeroSection />
        <Skills />
      </main>
    </>
  );
}
