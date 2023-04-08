import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Center,
  useColorModeValue,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";
import AdminNavbar from "../../components/admin/admin_navbar/adminNavbar";

const ManageProducts = () => {
  const IMAGE =
    "https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80";
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(
        "https://el-plan-production.up.railway.app/api/product/",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        }
      );
      setProducts(response.data.data.products);
      console.log(response)
      console.log(products)
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <AdminNavbar />
      <Tabs>
        <TabList>
          <Tab>View Products</Tab>
          <Tab>Create product</Tab>
        </TabList>

        <TabPanels>
          <TabPanel className="manage-tabs">
            <p>one!</p>
            {products && products.map((prod) => {
              <Center py={12}>
                <Box
                  role={"group"}
                  p={6}
                  maxW={"330px"}
                  w={"full"}
                //   bg={useColorModeValue("white", "gray.800")}
                  bg = "white"
                  _dark={{bg: "gray.800"}}
                  boxShadow={"2xl"}
                  rounded={"lg"}
                  pos={"relative"}
                  zIndex={1}
                >
                  <Box
                    rounded={"lg"}
                    mt={-12}
                    pos={"relative"}
                    height={"230px"}
                    _after={{
                      transition: "all .3s ease",
                      content: '""',
                      w: "full",
                      h: "full",
                      pos: "absolute",
                      top: 5,
                      left: 0,
                      backgroundImage: `url(${IMAGE})`,
                      filter: "blur(15px)",
                      zIndex: -1,
                    }}
                    _groupHover={{
                      _after: {
                        filter: "blur(20px)",
                      },
                    }}
                  >
                    <Image
                      rounded={"lg"}
                      height={230}
                      width={282}
                      objectFit={"cover"}
                      src={IMAGE}
                    />
                  </Box>
                  <Stack pt={10} align={"center"}>
                    <Text
                      color={"gray.500"}
                      fontSize={"sm"}
                      textTransform={"uppercase"}
                    >
                      Brand
                    </Text>
                    <Heading
                      fontSize={"2xl"}
                      fontFamily={"body"}
                      fontWeight={500}
                    >
                      Nice Chair, pink
                    </Heading>
                    <Stack direction={"row"} align={"center"}>
                      <Text fontWeight={800} fontSize={"xl"}>
                        Rs. {prod.price}
                      </Text>
                    </Stack>
                  </Stack>
                </Box>
              </Center>;
            })}
            
          </TabPanel>
          <TabPanel className="manage-tabs">
            <Flex width="full" align="center" justifyContent="center">
              <Box p={2}>
                <Box textAlign="center">
                  <Heading>Add product details</Heading>
                </Box>
                <Box my={4} textAlign="left">
                  <form>
                    <FormControl>
                      <FormLabel>Name</FormLabel>
                      <Input type="text" placeholder="" />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Category</FormLabel>
                      <Input type="text" placeholder="" />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Price</FormLabel>
                      <Input type="number" placeholder="" />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Description</FormLabel>
                      <Input type="text" placeholder="" />
                    </FormControl>
                    <Button mt={4} type="submit">
                      Submit
                    </Button>
                  </form>
                </Box>
              </Box>
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default ManageProducts;
