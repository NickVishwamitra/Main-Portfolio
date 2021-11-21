import Head from 'next/head';
import { Button, Container, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import { useNotifications } from '@mantine/notifications';
import { Prism } from '@mantine/prism';
import { DatePicker } from '@mantine/dates';
import HeroSection from '../components/HeroSection';
import Navigation from '../components/Navigation';
import Skills from '../components/Skills';
import Education from '../components/Education';
import ContactMe from '../components/ContactMe';
import { useRef } from 'react';
import Projects from '../components/Projects';
import { Scrollbars } from 'react-custom-scrollbars';

export default function Home() {
  const notifications = useNotifications();
  const theme = useMantineTheme();
  const projectsRef = useRef<any>(null);
  const skillsRef = useRef<any>(null);
  const educationRef = useRef<any>();
  const contactRef = useRef<any>(null);
  const heroRef = useRef<any>(null);

  return (
    <>
      <Head>
        <title>Nick Vishwamitra Portfolio</title>
        <meta name="description" content="Nick Vishwamitra Portfolio" />
        <link rel="icon" href="../images/myLogo.ico" />
      </Head>
      <Navigation
        contactRef={contactRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        educationRef={educationRef}
        heroRef={heroRef}
      />
      <HeroSection contactRef={contactRef} skillsRef={skillsRef} heroRef={heroRef} />
      <Skills skillsRef={skillsRef} />
      <Projects projectsRef={projectsRef} />
      <Education educationRef={educationRef} />
      <ContactMe contactref={contactRef} />
    </>
  );
}
