import { Badge, Card, Col, Grid, Group, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useMantineColorScheme } from '@mantine/styles';
import hostingImage from './hosting.png';
import Image from 'next/image';
import React from 'react';
const Projects = (props: any) => {
  const phoneSize = useMediaQuery('(max-width: 600px)');
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <div
      style={{
        width: phoneSize ? '100vw' : '95vw',
        height: '125vh',
        backgroundColor: colorScheme == 'dark' ? '#1D3557' : '#6e96cf',
        marginLeft: phoneSize ? 0 : '5vw',
        padding: '5% 10%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        maxHeight: '150vh',
      }}
    >
      <Text
        style={{
          fontSize: '3rem',
          zIndex: 3,
          color: colorScheme == 'dark' ? '#C1C2C5' : '#FFF',
          fontWeight: 900,
          marginBottom: 'auto',
        }}
      >
        My Projects
      </Text>
    </div>
  );
};

export default Projects;
