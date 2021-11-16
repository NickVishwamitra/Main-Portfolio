import { Divider } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useMantineColorScheme } from '@mantine/styles';
import { Fragment } from 'react';

const Navigation = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const phoneSize = useMediaQuery('(max-width: 600px)');
  return (
    <Fragment>
      <div
        style={{
          height: '100vh',
          width: '5vw',
          display: phoneSize ? 'none' : 'flex',
          position: 'fixed',
          backgroundColor: colorScheme == 'dark' ? '#1D3557' : '#6E96CF',
        }}
      >
        <div style={{ width: '98%' }}></div>
        <div
          style={{
            height: '100vh',
            width: '2px',
            backgroundColor: 'white',
            marginLeft: 'auto',
            opacity: '20%',
          }}
        ></div>
      </div>
    </Fragment>
  );
};
export default Navigation;
