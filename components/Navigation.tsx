import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Divider, Tooltip } from '@mantine/core';
import { useMediaQuery, useWindowScroll } from '@mantine/hooks';
import { useMantineColorScheme } from '@mantine/styles';
import { forwardRef, Fragment, useEffect, useState } from 'react';
import { faCodeBranch, faGraduationCap, faHome, faPhone } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { faChartBar } from '@fortawesome/free-regular-svg-icons';
const Navigation = (props: any) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const phoneSize = useMediaQuery('(max-width: 600px)');
  const [scroll, scrollTo] = useWindowScroll();
  const skillVisible = useOnScreen(props.skillsRef);
  const projectsVisible = useOnScreen(props.projectsRef);
  const educationVisible = useOnScreen(props.educationRef);
  const contactVisible = useOnScreen(props.contactRef);
  const heroVisible = useOnScreen(props.heroRef);

  const Icon = forwardRef((props: any, ref: any) => (
    <div ref={ref}>
      <FontAwesomeIcon icon={props.icon} size={props.size} color={props.color} />
    </div>
  ));
  const FontIcon = motion(Icon);

  return (
    <Fragment>
      <div
        style={{
          height: '100%',
          width: '5vw',
          display: phoneSize ? 'none' : 'flex',
          position: 'fixed',
          backgroundColor: colorScheme == 'dark' ? '#1D3557' : '#6E96CF',
        }}
      >
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '5%',
          }}
        >
          <Tooltip
            label="Home"
            withArrow
            position="right"
            transition="slide-right"
            gutter={15}
            color="red"
          >
            <FontIcon
              icon={faHome}
              size="2x"
              whileHover={{ scale: 1.25, color: '#e63946' }}
              whileTap={{ scale: 0.75 }}
              onTap={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              color={scroll.y < 400 && heroVisible ? '#e63946' : ''}
            />
          </Tooltip>
          <Tooltip
            label="Skills"
            withArrow
            position="right"
            transition="slide-right"
            gutter={15}
            color="red"
          >
            <FontIcon
              icon={faChartBar}
              size="2x"
              whileHover={{ scale: 1.25, color: '#e63946' }}
              whileTap={{ scale: 0.75 }}
              color={scroll.y > 600 && scroll.y < 1500 && skillVisible ? '#e63946' : ''}
              onTap={() => {
                props.skillsRef.current?.scrollIntoView({ behavior: 'smooth' });
              }}
            />
          </Tooltip>
          <Tooltip
            label="My Projects"
            withArrow
            position="right"
            transition="slide-right"
            gutter={15}
            color="red"
          >
            <FontIcon
              icon={faCodeBranch}
              size="2x"
              whileHover={{ scale: 1.25, color: '#e63946' }}
              whileTap={{ scale: 0.75 }}
              color={scroll.y > 1600 && scroll.y < 2500 && projectsVisible ? '#e63946' : ''}
              onTap={() => {
                props.projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
              }}
            />
          </Tooltip>
          <Tooltip
            label="Previous Education/Experience"
            withArrow
            position="right"
            transition="slide-right"
            gutter={15}
            color="red"
          >
            <FontIcon
              icon={faGraduationCap}
              size="2x"
              whileHover={{ scale: 1.25, color: '#e63946' }}
              whileTap={{ scale: 0.75 }}
              color={scroll.y > 2600 && scroll.y < 3500 && educationVisible ? '#e63946' : ''}
              onTap={() => {
                props.educationRef.current?.scrollIntoView({ behavior: 'smooth' });
              }}
            />
          </Tooltip>
          <Tooltip
            label="Contact Me"
            withArrow
            position="right"
            transition="slide-right"
            gutter={15}
            color="red"
          >
            <FontIcon
              icon={faPhone}
              size="2x"
              whileHover={{ scale: 1.25, color: '#e63946' }}
              whileTap={{ scale: 0.75 }}
              color={scroll.y > 3500 && contactVisible ? '#e63946' : ''}
              onTap={() => {
                props.contactRef.current?.scrollIntoView({ behavior: 'smooth' });
              }}
            />
          </Tooltip>
        </div>
        {/* <div
          style={{
            height: '100%',
            width: '2px',
            backgroundColor: 'white',
            marginLeft: 'auto',
            opacity: '20%',
          }}
        ></div> */}
      </div>
    </Fragment>
  );
};
export default Navigation;

function useOnScreen(ref: any) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting));
    observer.observe(ref.current);
    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);

  return isIntersecting;
}
