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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  UnorderedList,
  ListItem,
  Input,
  FormLabel,
  Select
} from "@chakra-ui/react";
import { ReactElement, useState } from "react";
import "./admin_landing.css";
import {
  FaBoxOpen,
  FaCoffee,
  FaGift,
  FaSalesforce,
  FaTrophy,
  FaCheck,
  FaWineGlass
} from "react-icons/fa";
import AdminNavbar from "../../components/admin/admin_navbar/adminNavbar";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Card = ({ heading, description, icon, func }) => {
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

export default function GridListWith() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [combo, setCombo] = React.useState([]);
  const [selectedCombo, setSelectedCombo] = React.useState([]);
  const [comboName, setComboName] = React.useState("");
  const [comboPrice, setComboPrice] = React.useState(0);
  const navigate = useNavigate();

  const getProducts = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(
        "https://el-plan-production.up.railway.app/api/product/",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setCombo(response.data.data.products);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const createCombo = async () => {
    const token = localStorage.getItem("token");
    const ids = selectedCombo.map((item) => item._id);
    try {
      const response = await axios.post(
        "https://el-plan-production.up.railway.app/api/combo/",
        {
          name: comboName,
          comboPrice: parseInt(comboPrice),
          productIds: ids,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert(response.data.message);
      setComboName("");
      setComboPrice(0);
      onClose();
    } catch (error) {
      alert(error.response.data.message);
    }
  };


  const scratchWinHandler = () => {
    navigate("/admin/couponManager")
  };

  const createComboHandler = () => {
    onOpen();
    getProducts();
  };

  const viewSalesHandler = () => {
    console.log("View sales");
    navigate("/admin/viewSales");
  };

  const loyaltyProgramHandler = () => {
    console.log("Loyalty program handler");
    navigate("/admin/loyalty")
  };

  const manageProductHandler = () => {
    navigate("/admin/manageProducts");
  };

  const manageEventsHandler = () => {
    navigate('/admin/manageEvents')
  }

  return (
    <div className="admin-landing-main">
      <AdminNavbar />
      <Box p={4}>
        <Stack spacing={3} as={Container} maxW={"3xl"} textAlign={"center"}>
          <Heading
            fontSize={{ base: "2xl", sm: "4xl" }}
            fontWeight={"bold"}
            fontFamily={"Delicious Handrawn"}
          >
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
              func={createComboHandler}
            />
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Create a Combo</ModalHeader>
                <ModalCloseButton />
                <ModalBody bgColor={"#FEEDDC"}>
                  <div
                    style={{
                      fontWeight: "bold",
                      textAlign: "center",
                      marginBottom: 10,
                    }}
                  >
                    Products:
                  </div>
                  {combo &&
                    combo.map((item) => {
                      return (
                        <div>
                          {selectedCombo.includes(item) ? (
                            <div
                              className="combo-hover"
                              bgColor={"grey.500"}
                              onClick={() => {
                                const newCombo = selectedCombo.filter(
                                  (comboItem) => comboItem !== item
                                );
                                setSelectedCombo(newCombo);
                              }}
                            >
                              <Icon as={FaCheck} />
                              {item.name} - Rs.{item.price}
                            </div>
                          ) : (
                            <div
                              onClick={() => {
                                const newCombo = [...selectedCombo, item];
                                setSelectedCombo(newCombo);
                              }}
                            >
                              {item.name} - Rs.{item.price}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  <Box mt={4}>
                    <Text>Combo Name:</Text>
                    <Input
                      placeholder="Combo Name"
                      onChange={(e) => setComboName(e.target.value)}
                      value={comboName}
                    />
                  </Box>
                  <Box mt={4}>
                    <Text>Combo Price:</Text>
                    <Input
                      placeholder="Combo Price"
                      onChange={(e) => setComboPrice(e.target.value)}
                      value={comboPrice}
                    />
                  </Box>
                </ModalBody>
                <ModalFooter>
                  <Button
                    bgColor={"#563300"}
                    color={"#FEEDDC"}
                    mr={3}
                    onClick={onClose}
                  >
                    Close
                  </Button>
                  <Button
                    variant="outline"
                    color={"#563300"}
                    onClick={createCombo}
                  >
                    Create
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
            <Card
              heading={"Manage Sales"}
              icon={<Icon as={FaSalesforce} w={10} h={10} />}
              description={
                "Detailed statistics about current sales used for analysis and planning strategy"
              }
              func={viewSalesHandler}
            />
            <Card
              heading={"Loyalty program"}
              icon={<Icon as={FaTrophy}   w={10} h={10} />}
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
            <Card
              heading={"Create events"}
              icon={<Icon as={FaWineGlass} w={10} h={10} />}
              description={
                "Can create new events based on the needs and/or festivals in the near future."
              }
              func={manageEventsHandler}
            />
          </Flex>
        </Container>
      </Box>
    </div>
  );
}
