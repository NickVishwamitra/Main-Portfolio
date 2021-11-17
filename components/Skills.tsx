import { Avatar, Text } from '@mantine/core';
import { useMediaQuery, useWindowScroll } from '@mantine/hooks';
import { useMantineColorScheme } from '@mantine/styles';
import { Button, Card, Progress } from '@nextui-org/react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { Fragment, useEffect, useState } from 'react';
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10%',
          marginBottom: phoneSize ? '15%' : '5%',
        }}
      >
        <div style={{ display: 'flex', gap: '2%' }}>
          <Avatar radius="xl" src={props.src} />
          <Text style={{ fontWeight: 700, fontSize: '1.5rem', color: '#FFF' }}>{props.title}</Text>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '5%',
            width: phoneSize ? '100%' : '95%',
          }}
        >
          <Progress value={props.value} size="medium" color={props.color} />
          {/* <Text style={{ color: '#FFF', fontSize: '1.25rem' }}>{props.level}</Text> */}
          <Stars starLevel={props.starLevel} />
        </div>
      </motion.div>
    );
  };

  const FrontEnd = () => {
    return (
      <Fragment>
        <SkillItem
          title="Next.js/React.js"
          src="https://decodenatura.com/static/fb8aa1bb70c9925ce1ae22dc2711b343/nextjs-logo.png"
          starLevel={5}
          value={expert}
          color="gradient"
        />
        <SkillItem
          title="CSS"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Devicon-css3-plain.svg/1200px-Devicon-css3-plain.svg.png"
          value={expert}
          starLevel={5}
        />
        <SkillItem
          title="HTML"
          src="https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png"
          value={expert}
          starLevel={5}
          color="#E44E26"
        />
        <SkillItem
          title="Node.js"
          src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"
          value={expert}
          starLevel={5}
          color="success"
        />
        <SkillItem
          title="SASS"
          src="https://sass-lang.com/assets/img/styleguide/seal-color-aef0354c.png"
          value={intermediate}
          starLevel={3}
          color="#f4a"
        />
      </Fragment>
    );
  };

  const BackEnd = () => {
    return (
      <Fragment>
        <SkillItem
          title="MongoDB"
          src="https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Emblem.jpg"
          color="success"
          value={expert}
          starLevel={5}
        />
        <SkillItem
          title="Firebase"
          src="https://cdn.dribbble.com/users/528264/screenshots/3140440/firebase_logo.png"
          color="warning"
          value={intermediate}
          starLevel={3}
        />
        <SkillItem
          title="Python"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"
          color="primary"
          value={beginner}
          starLevel={2}
        />
        <SkillItem
          title="php"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Webysther_20160423_-_Elephpant.svg/2560px-Webysther_20160423_-_Elephpant.svg.png"
          color="primary"
          value={beginner - 10}
          starLevel={1}
        />
      </Fragment>
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
          Blockchain
        </Button>
        <Button
          style={{ backgroundColor: selected == 4 ? '#E63946' : '#2C2E33' }}
          onClick={() => selectSkillsPage(4)}
        >
          Other
        </Button>
      </Button.Group>
      <Card
        style={{
          backgroundColor: '#2C2E33',
          height: phoneSize ? '70%' : '90%',
          padding: '1%',
        }}
      >
        {selected == 1 ? <FrontEnd /> : selected == 2 ? <BackEnd /> : null}
      </Card>
    </div>
  );
};
export default Skills;

const Stars = (props: any) => {
  // all;
  const sL = props.starLevel;
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {sL < 3 ? <Text>Beginner</Text> : sL < 5 ? <Text>Intermediate</Text> : <Text>Expert</Text>}

      <div style={{ display: 'flex' }}>
        <FontAwesomeIcon icon={solidStar} color="#FFF" />
        {props.starLevel > 1 ? (
          <FontAwesomeIcon icon={solidStar} color="#FFF" />
        ) : (
          <FontAwesomeIcon icon={solidStar} color="rgba(255,255,255,0.15)" />
        )}
        {props.starLevel > 2 ? (
          <FontAwesomeIcon icon={solidStar} color="#FFF" />
        ) : (
          <FontAwesomeIcon icon={solidStar} color="rgba(255,255,255,0.15)" />
        )}
        {props.starLevel > 3 ? (
          <FontAwesomeIcon icon={solidStar} color="#FFF" />
        ) : (
          <FontAwesomeIcon icon={solidStar} color="rgba(255,255,255,0.15)" />
        )}
        {props.starLevel > 4 ? (
          <FontAwesomeIcon icon={solidStar} color="#FFF" />
        ) : (
          <FontAwesomeIcon icon={solidStar} color="rgba(255,255,255,0.15)" />
        )}
      </div>
    </div>
  );
};
