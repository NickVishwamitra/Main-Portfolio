import { Badge, Card, Col, Grid, Group, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useMantineColorScheme } from '@mantine/styles';
import hostingImage from '../images/hosting.png';
import mineImage from '../images/minesweeper.png';
import chatImage from '../images/chat.png';
import portfolioImage from '../images/portfolio.png';
import Image from 'next/image';
import React from 'react';
import { Button } from '@nextui-org/react';
import { useRouter } from 'next/dist/client/router';
const Projects = (props: any) => {
  const phoneSize = useMediaQuery('(max-width: 600px)');
  const ultraWide = useMediaQuery('(min-width: 1600px)');
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const router = useRouter();
  const ProjectItem = (props: any) => {
    return (
      <Card
        shadow="sm"
        padding="xl"
        style={{
          backgroundColor: colorScheme == 'light' ? '#335e99' : '#2C2E33',
          height: '350px',
        }}
      >
        <Card.Section>
          <Image src={props.image} height={1100} alt="Norway" />
        </Card.Section>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: phoneSize ? 'column-reverse' : 'row',
            }}
          >
            <Text style={{ fontWeight: 700 }}>{props.title}</Text>
            <Badge
              variant="light"
              style={{ marginLeft: phoneSize ? '0' : 'auto', marginBottom: phoneSize ? '10%' : 0 }}
              color={props.badgeColor}
            >
              {props.badgeTitle}
            </Badge>
          </div>
          <Text style={{ marginTop: '5%', fontSize: '0.75rem' }}>Made using: {props.built}</Text>
          <Button
            size="small"
            style={{ marginTop: ultraWide ? '10%' : '15%' }}
            color="#e63946"
            onClick={() => window.open(props.link, '_blank')}
          >
            See Demo
          </Button>
        </div>
      </Card>
    );
  };

  return (
    <div
      style={{
        width: phoneSize ? '100vw' : '95vw',
        height: phoneSize ? '1800px' : '1300px',
        backgroundColor: colorScheme == 'dark' ? '#1D3557' : '#6e96cf',
        marginLeft: phoneSize ? 0 : '5vw',
        padding: '5% 10%',
        paddingBottom: '2%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text
        style={{
          fontSize: '3rem',
          zIndex: 3,
          color: colorScheme == 'dark' ? '#C1C2C5' : '#FFF',
          fontWeight: 900,
          marginBottom: '5%',
        }}
      >
        My Projects
      </Text>
      <div
        style={{
          width: '100%',
          height: '100%',
          padding: '10%',
          display: 'flex',
          flexDirection: 'column',
          gap: phoneSize ? '0%' : '10%',
          marginTop: '2%',
        }}
      >
        <div
          style={{ height: '50%', display: 'flex', flexDirection: phoneSize ? 'column' : 'row' }}
        >
          <div
            style={{
              height: '100%',
              width: phoneSize ? '100%' : '50%',
              padding: '0% 5%',
            }}
          >
            <Card
              shadow="sm"
              padding="xl"
              style={{
                backgroundColor: colorScheme == 'light' ? '#335e99' : '#2C2E33',
                height: '350px',
              }}
            >
              <Card.Section>
                <Image src={hostingImage} height={1200} alt="Norway" />
              </Card.Section>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: phoneSize ? 'column-reverse' : 'row',
                  }}
                >
                  <Text style={{ fontWeight: 700 }}>{props.title} Hosting Site Template</Text>
                  <Badge
                    variant="light"
                    style={{
                      marginLeft: phoneSize ? '0' : 'auto',
                      marginBottom: phoneSize ? '10%' : 0,
                    }}
                    color="green"
                  >
                    Responsive
                  </Badge>
                </div>
                <Text style={{ marginTop: '5%', fontSize: '0.75rem' }}>
                  Made using: Next.js, Lottie, Mantine, NextUI, SASS, Framer Motion
                </Text>
                <Button
                  size="small"
                  style={{ marginTop: ultraWide ? '10%' : '15%' }}
                  color="#e63946"
                  onClick={() => window.open('https://hosting-site-demo.vercel.app/', '_blank')}
                >
                  See Demo
                </Button>
              </div>
            </Card>
          </div>
          <div
            style={{
              height: '100%',
              width: phoneSize ? '100%' : '50%',
              padding: ' 0% 5%',
              display: phoneSize ? 'column' : 'flex',
            }}
          >
            <ProjectItem
              image={mineImage}
              title="Minesweeper Betting"
              badgeTitle="First Project"
              badgeColor="green"
              built="Next.js, Lottie, Mantine, NextUI, SASS, Framer Motion"
              link=""
            />
          </div>
        </div>
        <div
          style={{ height: '50%', display: 'flex', flexDirection: phoneSize ? 'column' : 'row' }}
        >
          <div
            style={{
              height: '100%',
              width: phoneSize ? '100%' : '50%',
              padding: ' 0% 5%',
              display: 'flex',
            }}
          >
            <ProjectItem
              image={portfolioImage}
              title="My First Portfolio"
              badgeTitle="Responsive"
              badgeColor="green"
              built="React, Framer-motion, useSound, materialUI"
              link="https://first-portfolio-lyart.vercel.app/"
            />
          </div>
          <div
            style={{
              height: '100%',
              width: phoneSize ? '100%' : '50%',
              padding: ' 0% 5%',
              display: 'flex',
            }}
          >
            <ProjectItem
              image={chatImage}
              title="Chat App With Feed"
              badgeTitle="Requires Login"
              badgeColor="red"
              built="React, materialUI, nextUI, Firebase, Framer-motion"
              link="https://firebase-chat-app-three.vercel.app/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
