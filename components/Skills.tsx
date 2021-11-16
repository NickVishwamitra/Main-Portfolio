import { useMantineColorScheme } from '@mantine/styles';

const Skills = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <div
      style={{
        width: '95vw',
        height: '100vh',
        backgroundColor: colorScheme == 'dark' ? '#1D3557' : '#6E96CF',
        marginLeft: '5vw',
        padding: '5%',
        display: 'flex',
        flexDirection: 'column',
        gap: '2%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    ></div>
  );
};
export default Skills;
