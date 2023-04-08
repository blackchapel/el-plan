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
} from "@chakra-ui/react";
import { ReactElement } from "react";
import "./admin_landing.css";
import {
  FaBoxOpen,
  FaCoffee,
  FaGift,
  FaSalesforce,
  FaTrophy,
} from "react-icons/fa";
import AdminNavbar from "../../components/admin/admin_navbar/adminNavbar"

const Card = ({ heading, description, icon, func }) => {
    const handler = () => {
        
    }
  return (
    <Box
      className="admin-card"
      bg={"#DCB9A3"}
      maxW={{ base: "full", md: "275px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="8px"
      overflow="hidden"
      p={5}
      color={"#563300"}
      onClick={func}
    >
      <Stack align={"start"} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={useColorModeValue("gray.100", "gray.700")}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={"sm"}>
            {description}
          </Text>
        </Box>
        {/* <Button variant={"link"} colorScheme={"blue"} size={"sm"}>
          Learn more
        </Button> */}
      </Stack>
    </Box>
  );
};

export default function gridListWith() {
  const scratchWinHandler = () => {
    console.log("Scratch and win");
  };

  const comboHandler = () => {
    console.log("Create combo")
  }

  const viewSalesHandler = () => {
    console.log("View sales")
  }

  const loyaltyProgramHandler = () => {
    console.log("Loyalty program handler")
  }

  const manageProductHandler = () => {
    console.log("Manage products")
  }

  return (
    <div className="admin-landing-main">
    <AdminNavbar />
      <Box p={4}>
        <Stack spacing={3} as={Container} maxW={'3xl'} textAlign={'center'}>
          <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'} fontFamily={"Delicious Handrawn"}>
            The coffee house
          </Heading>
        </Stack>

        <Container maxW={"5xl"} mt={12}>
          <Flex flexWrap="wrap" gridGap={6} justify="center">
            <Card
              heading={"Scratch and Win"}
              icon={<Icon as={FaGift} w={10} h={10} />}
              description={
                "Create a scratch and win coupon which will be dispatched "
              }
              func={scratchWinHandler}
              
            />
            <Card
              heading={"Create Combos"}
              icon={<Icon as={FaCoffee} w={10} h={10} />}
              description={
                "Create combos for users that increase sales and customize products based on sales"
              }
              func={comboHandler}
            />
            <Card
              heading={"View Sales"}
              icon={<Icon as={FaSalesforce} w={10} h={10} />}
              description={
                "Detailed statistics about current sales used for analysis and planning strategy"
              }
              func={viewSalesHandler}
            />
            <Card
              heading={"Loyalty program"}
              icon={<Icon as={FaTrophy} w={10} h={10} />}
              description={
                "Program that awards points and maintains a leaderboard of customers"
              }
              func={loyaltyProgramHandler}
            />
            <Card
              heading={"Manage Products"}
              icon={<Icon as={FaBoxOpen} w={10} h={10} />}
              description={
                "List of all products along with inventory management like adding new products, deleting existing products."
              }
              func={manageProductHandler}
            />
          </Flex>
        </Container>
      </Box>
    </div>
  );
}
