import {
  Box,
  Stack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  SimpleGrid,
  useBreakpointValue,
  IconProps,
  Icon,
} from '@chakra-ui/react';
import axios from 'axios';
import React from 'react';
import NavBar from '../src/components/admin/mainNavBar';
export default function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = async () => {
    console.log(process.env.BASE_URL)
    try{
      const response = await axios.post("https://el-plan-production.up.railway.app/api/auth/login", {
        email: email,
        password: password,
      });
      console.log(response);
      setEmail('');
      setPassword('');
    }catch(e){
      alert(e.response.data.message);
    }
  };

  return (
    <>
    <NavBar />
    <Box position={'relative'} marginTop={30}>
      <Container
        as={SimpleGrid}
        maxW={'7xl'}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}>
        <Stack spacing={{ base: 10, md: 20 }}>
          <Heading
            lineHeight={1.1}
            fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}>
            Let's Start{' '}
            <Text
              as={'span'}
              bgGradient="linear(to-r, #563300,#E2C2AA)"
              bgClip="text">
              Where you{' '}
            </Text>
            left off
          </Heading>
        </Stack>
        <Stack
          bg={'#DCB9A3'}
          rounded={'xl'}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: 'lg' }}>
          <Stack spacing={4}>
            <Heading
              color={'gray.800'}
              lineHeight={1.1}
              fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
              Welcome Back
              <Text
                as={'span'}
                bgGradient="linear(to-r, #563300,#563300)"
                bgClip="text">
                !
              </Text>
            </Heading>
            <Text color={'#563300'} fontSize={{ base: 'sm', sm: 'md' }}>
            We believe that every sip should be an experience to remember, whether you're looking for a quick caffeine boost to start your day or a relaxing afternoon pick-me-up.
            </Text>
          </Stack>
          <Box as={'form'} mt={10}>
            <Stack spacing={4}>
              <Input
                placeholder="Email Address"
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
                type='email'
                required={true}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <Input
                placeholder="Password"
                bg={'gray.100'}
                border={0}
                color={'gray.500'}
                _placeholder={{
                  color: 'gray.500',
                }}
                type='password'
                required={true}
                onChange={
                  (e) => {
                    setPassword(e.target.value);
                }}
              />
            </Stack>
            <Button
              fontFamily={'heading'}
              mt={8}
              w={'full'}
              bgGradient="linear(to-r, #563300,#E2C2AA)"
              color={'white'}
              _hover={{
                bgGradient: 'linear(to-r, #E2C2AA,#563300)',
                boxShadow: 'xl',
              }}
              onClick={handleSubmit}
              >
              Login
            </Button>
          </Box>
          form
        </Stack>
      </Container>
      <Blur
        position={'absolute'}
        top={-10}
        left={-10}
        style={{ filter: 'blur(70px)' }}
      />
    </Box>
    </>
  );
}

export const Blur = (props: IconProps) => {
  return (
    <Icon
      width={useBreakpointValue({ base: '100%', md: '40vw', lg: '30vw' })}
      zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
      height="560px"
      viewBox="0 0 528 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <circle cx="71" cy="61" r="111" fill="#FFFFF"/>
      <circle cx="244" cy="106" r="139" fill="#FFFFF" />
      <circle cy="291" r="139" fill="#DEAD84" />
      <circle cx="80.5" cy="189.5" r="101.5" fill="#DEAD84" />
      <circle cx="196.5" cy="317.5" r="101.5" fill="#E2C2AA" />
      <circle cx="70.5" cy="458.5" r="101.5" fill="#E2C2AA" />
      <circle cx="426.5" cy="-0.5" r="101.5" fill="#E2C2AA" />
    </Icon>
  );
};