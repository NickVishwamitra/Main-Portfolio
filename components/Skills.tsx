import { Avatar, Text } from '@mantine/core';
import { useMediaQuery, useWindowScroll } from '@mantine/hooks';
import { useMantineColorScheme } from '@mantine/styles';
import { Button, Card, Progress } from '@nextui-org/react';
import { useEffect, useState } from 'react';
const Skills = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  // const [scroll, scrollTo] = useWindowScroll();
  const [selected, setSelected] = useState(3);
  const [reactProgress, setReactProgress] = useState(0);
  const phoneSize = useMediaQuery('(max-width: 600px)');

  const initial = 0;
  const beginner = 25;
  const intermediate = 65;
  const expert = 100;

  const selectSkillsPage = (page: any) => {
    setSelected(page);
  };
  const animateNumber = (level: any) => {
    var current = 0;
    for (var i = 0; (i = level); i++) {
      current++;
    }
    return current;
  };

  const SkillItem = (props: any) => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10%', marginBottom: '5%' }}>
        <div style={{ display: 'flex', gap: '2%' }}>
          <Avatar radius="xl" src={props.src} />
          <Text style={{ fontWeight: 700, fontSize: '1.5rem', color: '#FFF' }}>{props.title}</Text>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '5%',
            width: phoneSize ? '100%' : '90%',
          }}
        >
          <Progress value={props.value} size="medium" color={props.color} />
          <Text style={{ color: '#FFF', fontSize: '1.25rem' }}>{props.level}</Text>
        </div>
      </div>
    );
  };

  return (
    <div
      style={{
        width: phoneSize ? '100vw' : '95vw',
        height: '100vh',
        backgroundColor: colorScheme == 'dark' ? '#1D3557' : '#6E96CF',
        marginLeft: phoneSize ? '0' : '5vw',
        padding: phoneSize ? '5% 5%' : '5% 20%',
        paddingTop: '5%',
        // paddingBottom:""
        display: 'flex',
        flexDirection: 'column',
        gap: '2%',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          justifyItems: 'flex-start',
          alignSelf: phoneSize ? 'center' : 'flex-start',
          fontWeight: 900,
          position: 'relative',
        }}
      >
        <Text
          style={{
            fontSize: '3rem',
            zIndex: 3,
            color: colorScheme == 'dark' ? '#C1C2C5' : '#FFF',
          }}
        >
          My Skills
        </Text>
      </div>
      <Button.Group style={{ alignSelf: phoneSize ? 'center' : 'flex-start' }}>
        <Button
          style={{ backgroundColor: selected == 1 ? '#E63946' : '#2C2E33' }}
          onClick={() => selectSkillsPage(1)}
        >
          Front-End
        </Button>
        <Button
          style={{ backgroundColor: selected == 2 ? '#E63946' : '#2C2E33' }}
          onClick={() => selectSkillsPage(2)}
        >
          Back-End
        </Button>
        <Button
          style={{ backgroundColor: selected == 3 ? '#E63946' : '#2C2E33' }}
          onClick={() => selectSkillsPage(3)}
        >
          Other
        </Button>
      </Button.Group>
      <Card
        style={{
          backgroundColor: '#2C2E33',
          height: '90%',
          padding: ' 2%',
        }}
      >
        <SkillItem
          title="Next.js/React"
          src="https://decodenatura.com/static/fb8aa1bb70c9925ce1ae22dc2711b343/nextjs-logo.png"
          value={expert}
          level="Expert"
          color="gradient"
        />
        <SkillItem
          title="CSS"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Devicon-css3-plain.svg/1200px-Devicon-css3-plain.svg.png"
          value={expert}
          level="Expert"
        />
        <SkillItem
          title="HTML"
          src="https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png"
          value={expert}
          level="Expert"
          color="#E44E26"
        />
        <SkillItem
          title="SASS"
          src="https://sass-lang.com/assets/img/styleguide/seal-color-aef0354c.png"
          value={intermediate}
          level="Intermediate"
          color="#f4a"
        />
      </Card>
    </div>
  );
};
export default Skills;
