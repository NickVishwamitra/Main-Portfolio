import { TextInput, Title, Text, Textarea } from '@mantine/core';
import { useForm, useMediaQuery } from '@mantine/hooks';
import { useMantineColorScheme } from '@mantine/styles';
import { Button } from '@nextui-org/react';
import { useEffect } from 'react';

const ContactMe = (props: any) => {
  useEffect(() => {
    import('@lottiefiles/lottie-player');
  });
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const phoneSize = useMediaQuery('(max-width: 600px)');
  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      message: '',
    },

    validationRules: {
      email: (value: any) => /^\S+@\S+$/.test(value),
    },
  });
  return (
    <div
      style={{
        width: phoneSize ? '100%' : '95%',
        height: phoneSize ? '1000px' : '900px',
        backgroundColor: colorScheme == 'dark' ? '#1D3557' : '#6e96cf',
        marginLeft: phoneSize ? 0 : '5%',
        padding: '5%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: phoneSize ? '2%' : '8%',
        maxHeight: '150%',
        maxWidth: '100%',
      }}
      ref={props.contactref}
    >
      <Text
        style={{
          fontWeight: 900,
          fontSize: phoneSize ? '2rem' : '3rem',
          zIndex: 3,
          color: colorScheme == 'dark' ? '#C1C2C5' : '#FFF',
        }}
      >
        Want To Hire Me?
      </Text>
      <div style={{ display: 'flex', flexDirection: phoneSize ? 'column' : 'row' }}>
        <div style={{ width: phoneSize ? '100%' : '50%' }}>
          <lottie-player
            autoplay
            loop
            mode="normal"
            src="https://assets2.lottiefiles.com/packages/lf20_fycwvm0l.json"
            style={{ width: '100%', maxHeight: '90%' }}
          ></lottie-player>
        </div>
        <div
          style={{
            justifyContent: 'center',
            display: 'flex',
            width: phoneSize ? '100%' : '50%',
            flexDirection: 'column',
            padding: '10%',
            paddingTop: phoneSize ? '0%' : '10%',
          }}
        >
          <form
            onSubmit={form.onSubmit((values) => console.log(values))}
            style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
          >
            <TextInput
              label="Name"
              required
              placeholder="Your Name"
              radius="xl"
              value={form.values.name}
              type="text"
              onChange={(event: any) => form.setFieldValue('name', event.currentTarget.value)}
            ></TextInput>
            <TextInput
              type="email"
              label="Email"
              required
              placeholder="Your@email.com"
              radius="xl"
              value={form.values.email}
              onChange={(event: any) => form.setFieldValue('email', event.currentTarget.value)}
            ></TextInput>
            <Textarea
              label="Message"
              placeholder="Your Message"
              required
              value={form.values.message}
              style={{ marginBottom: '5%' }}
              onChange={(event: any) => form.setFieldValue('message', event.currentTarget.value)}
            ></Textarea>
            <Button color="#e63946" style={{ alignSelf: 'flex-end', width: '20%' }}>
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ContactMe;
