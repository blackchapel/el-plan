import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Icon,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { ReactElement } from 'react';
  import "./admin_landing.css"
  
  
  
  const Card = ({ heading, description, icon, href }) => {
    return (
      <Box
        bg={"#fff"}
        maxW={{ base: 'full', md: '275px' }}
        w={'full'}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={5}>
        <Stack align={'start'} spacing={2}>
          <Flex
            w={16}
            h={16}
            align={'center'}
            justify={'center'}
            color={'white'}
            rounded={'full'}
            bg={useColorModeValue('gray.100', 'gray.700')}>
            {icon}
          </Flex>
          <Box mt={2}>
            <Heading size="md">{heading}</Heading>
            <Text mt={1} fontSize={'sm'}>
              {description}
            </Text>
          </Box>
          <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
            Learn more
          </Button>
        </Stack>
      </Box>
    );
  };
  
  export default function gridListWith() {
    return (<div className='admin-landing-main'>
      <Box p={4}>
        {/* <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
          <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
            Short heading
          </Heading>
          <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            obcaecati ut cupiditate pariatur, dignissimos, placeat amet officiis.
          </Text>
        </Stack> */}
  
        <Container maxW={'5xl'} mt={12}>
          <Flex flexWrap="wrap" gridGap={6} justify="center">
            <Card
              heading={'Scratch and Win'}
              icon={<Icon w={10} h={10} />}
              description={
                'Create a scratch and win coupon which will be dispatched '
              }
              href={'#'}
              className="admin-card"
            />
            <Card
              heading={'Create Combos'}
              icon={<Icon w={10} h={10} />}
              description={
                'Create combos for users that increase sales and customize products based on sales'
              }
              href={'#'}
              className="admin-card"
            />
            <Card
              heading={'View Sales'}
              icon={<Icon w={10} h={10} />}
              description={
                'Detailed statistics about current sales used for analysis and planning strategy'
              }
              href={'#'}
              className="admin-card"
            />
            <Card
              heading={'Loyalty program'}
              icon={<Icon w={10} h={10} />}
              description={
                'Program that awards points and maintains a leaderboard of customers'
              }
              href={'#'}
              className="admin-card"
            />
            <Card
              heading={'Manage Products'}
              icon={<Icon w={10} h={10} />}
              description={
                'List of all products along with inventory management like adding new products, deleting existing products.'
              }
              href={'#'}
              className="admin-card"
            />
          </Flex>
        </Container>
      </Box>
      </div>
    );
  }