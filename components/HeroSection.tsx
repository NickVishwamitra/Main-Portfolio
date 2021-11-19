import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Avatar, Button, Container, Title, Popover } from '@mantine/core';
import { faEnvelope, faCopy, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useMantineColorScheme, useMantineTheme } from '@mantine/styles';
import { faTwitter, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Typist from 'react-typist';
import styles from './styles/HeroSection.module.css';
import Pic from '../images/profilePic.jpg';
import { motion } from 'framer-motion';
import { useClipboard, useMediaQuery, useWindowScroll } from '@mantine/hooks';
import { Switch } from '@nextui-org/react';
const HeroSection = (props: any) => {
  const manTheme = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const [typing, setTyping] = useState(true);
  const clipboard = useClipboard({ timeout: 500 });
  const phoneSize = useMediaQuery('(max-width: 600px)');
  const [scroll, scrollTo] = useWindowScroll();
  const [emailOpened, setEmailOpened] = useState(false);
  const typingdone = () => {
    setTyping(false), setTyping(true);
  };
  useEffect(() => {
    import('@lottiefiles/lottie-player');
  });
  return (
    <div
      style={{
        width: phoneSize ? '100vw' : '95vw',
        height: '100vh',
        backgroundColor: colorScheme == 'dark' ? '#1D3557' : '#6e96cf',
        marginLeft: phoneSize ? 0 : '5vw',
        padding: '5%',
        display: 'flex',
        flexDirection: 'column',
        gap: '2%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Switch
        checked={true}
        style={{
          position: 'absolute',
          top: phoneSize ? '15%' : '5%',
          marginLeft: phoneSize ? '0%' : '75%',
          transform: phoneSize ? 'scale(1.25)' : '',
        }}
        size="xlarge"
        iconOn={<FontAwesomeIcon icon={faMoon} style={{ color: '#5C5F66' }} />}
        iconOff={<FontAwesomeIcon icon={faSun} style={{ color: 'gold' }} />}
        onChange={() => toggleColorScheme()}
        bordered
      />
      <motion.div
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          gap: '2%',
          height: '50%',
          transform: phoneSize ? 'scale(1)' : 'scale(1.25)',
          marginTop: phoneSize ? '15%' : '5%',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Avatar size={150} radius={150} src={Pic.src} style={{ boxShadow: ' 0px 0px 10px #222' }} />
        <Title style={{ color: 'white' }}>Nick Vishwamitra</Title>
        {typing ? (
          <Typist
            onTypingDone={typingdone}
            cursor={{
              blink: true,
              element: '|',
            }}
            className={styles.typistText}
          >
            <span>I'm a </span>
            <span style={{ color: '#e63946' }}>Full-Stack Developer</span>
            <Typist.Backspace count={20} delay={2000} />
            <span style={{ color: '#e63946' }}>UX/UI Designer</span>
            <Typist.Backspace count={14} delay={2000} />
            <span style={{ color: '#e63946' }}>Blockchain Developer</span>
            <Typist.Backspace count={20} delay={2000} />
            <span style={{ color: '#e63946' }}>PC Enthusiast</span>
            <Typist.Backspace count={30} delay={2000} />
          </Typist>
        ) : null}
        <div className={styles.iconContainer}>
          <FontAwesomeIcon
            icon={faTwitter}
            size="2x"
            className={styles.socialIcon}
            onClick={() => window.open('https://twitter.com/NickV525', '_blank')}
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            icon={faLinkedinIn}
            size="2x"
            className={styles.socialIcon}
            onClick={() =>
              window.open('https://www.linkedin.com/in/nick-vishwamitra-6a093149', '_blank')
            }
          ></FontAwesomeIcon>
          <FontAwesomeIcon
            icon={faGithub}
            size="2x"
            className={styles.socialIcon}
            onClick={() => window.open('https://github.com/NickVishwamitra', '_blank')}
          ></FontAwesomeIcon>
          <Popover
            position="right"
            opened={emailOpened}
            withArrow
            onClose={() => setEmailOpened(false)}
            withCloseButton
            gutter={0}
            target={
              <FontAwesomeIcon
                icon={faEnvelope}
                size="2x"
                className={styles.socialIcon}
                onClick={() => setEmailOpened(!emailOpened)}
              ></FontAwesomeIcon>
            }
          >
            <span>Nickvish2@gmail.com</span>
            <Button
              onClick={() => {
                clipboard.copy('Nickvish2@gmail.com');
                setEmailOpened(false);
              }}
            >
              <FontAwesomeIcon icon={faCopy}></FontAwesomeIcon>
            </Button>
          </Popover>
        </div>
        <Button
          radius="xl"
          styles={{ filled: { backgroundColor: '#e63946' } }}
          onClick={() => props.contactRef.current?.scrollIntoView({ behavior: 'smooth' })}
        >
          Contact Me
        </Button>
      </motion.div>
      <div style={{ marginTop: '10%' }}>
        <lottie-player
          autoplay
          className={styles.lottie}
          loop
          mode="normal"
          src="https://assets9.lottiefiles.com/packages/lf20_zxmmpjnt.json"
        ></lottie-player>
      </div>
    </div>
  );
};

export default HeroSection;
