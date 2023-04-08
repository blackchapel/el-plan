import React, { useEffect, useState, useRef, ReactNode } from "react";
import axios from "axios";
import "./manage_products.css";
import coffee from "../../assets/coffee.webp";
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
  Text,
  Stack,
  Image,
  SimpleGrid,
  Spacer,
  Select,
} from "@chakra-ui/react";
import AdminNavbar from "../../components/admin/admin_navbar/adminNavbar";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [file, setFile] = React.useState(null);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState();
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.set("name", name);
    formData.set("category", category);
    formData.set("thumbnail", file);
    formData.set("price", price);
    formData.set("description", description);

    const data = {
      name: formData.get("name"),
      category: formData.get("category"),
      thumbnail: file,
      price: formData.get("price"),
      description: formData.get("description"),
    };
    console.log(data);
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "https://el-plan-production.up.railway.app/api/product",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert(response.data.message);
      console.log(response);
    } catch (err) {
      alert(err.response.data.message);
      console.log(err);
    }
  };

  const getProduct = async () => {
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
      setProducts(response.data.data.products);
      console.log(products);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const productDeleteHandler = async (id) => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.delete(
        "https://el-plan-production.up.railway.app/api/product/" + id,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert(response.data.message);
      const new_prods = products.filter((prod) => prod._id !== id);
      setProducts(new_prods);
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <AdminNavbar />

      <Tabs>
        <TabList>
          <Tab>View Products</Tab>
          <Tab>Create product</Tab>
        </TabList>
        <TabPanels backgroundColor={"#FEEDDC"}>
          <TabPanel className="manage-tabs">
            <SimpleGrid columns={3} spacing={3}>
              {products &&
                products.map((prod, index) => {
                  return (
                    <Center py={12} key={index}>
                      <Box
                        role={"group"}
                        p={6}
                        maxW={"330px"}
                        w={"full"}
                        //   bg={useColorModeValue("white", "gray.800")}
                        bg="white"
                        _dark={{ bg: "gray.800" }}
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
                            backgroundImage: `url(${prod.thumbnail})`,
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
                            src={prod.thumbnail}
                          />
                        </Box>
                        <Stack pt={10} align={"center"} position={"relative"}>
                          <Heading
                            fontSize={"2xl"}
                            fontFamily={"body"}
                            fontWeight={500}
                          >
                            {prod.name}
                          </Heading>
                          <Text
                            color={"gray.500"}
                            fontSize={"sm"}
                            textTransform={"uppercase"}
                            height={100}
                          >
                            {prod.description}
                          </Text>
                          <Flex
                            flexDirection={"row"}
                            justifyContent={"space-around"}
                            width="100%"
                          >
                            <Stack direction={"row"} align={"center"}>
                              <Text fontWeight={800} fontSize={"xl"}>
                                Rs. {prod.price}
                              </Text>
                            </Stack>
                            <Spacer />
                            <Button
                              color={"red"}
                              onClick={() => {
                                productDeleteHandler(prod._id);
                              }}
                            >
                              Delete
                            </Button>
                          </Flex>
                        </Stack>
                      </Box>
                    </Center>
                  );
                })}
            </SimpleGrid>
          </TabPanel>
          <TabPanel className="manage-tabs">
            <SimpleGrid columns={2} spacing={1}>
              <Box>
                <Center>
                  <img src={coffee} className="rotate" />
                </Center>
              </Box>
              <Flex width="full" align="center" justifyContent="center">
                <Box p={2}>
                  <Box textAlign="center">
                    <Heading>Add product details</Heading>
                  </Box>
                  <Box my={4} textAlign="left">
                    <form>
                      <FormControl>
                        <FormLabel>Name</FormLabel>
                        <Input
                          type="text"
                          placeholder=""
                          value={name}
                          onChange={handleNameChange}
                          border={"solid"}
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel>Category</FormLabel>
                        {/* <Input
                        type="text"
                        placeholder=""
                        value={category}
                        onChange={handleCategoryChange}
                      /> */}
                        <Select
                          placeholder="Select category"
                          value={category}
                          onChange={handleCategoryChange}
                          border={"solid"}
                        >
                          <option value="hotCoffee">Hot Coffee</option>
                          <option value="coldCoffee">Cold Coffee</option>
                          <option value="coffeeCoolers">Coffee Coolers</option>
                          <option value="notCoffee">Not coffee</option>
                          <option value="manualBrew">Manual Brew</option>
                        </Select>
                      </FormControl>

                      <FormControl>
                        <FormLabel>File</FormLabel>
                        <Input
                          type="file"
                          onChange={(e) => setFile(e.target.files[0])}
                          border={"none"}
                        ></Input>
                      </FormControl>
                      <FormControl>
                        <FormLabel>Price</FormLabel>
                        <Input
                          type="number"
                          placeholder=""
                          value={price}
                          onChange={handlePriceChange}
                          border={"solid"}
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel>Description</FormLabel>
                        <Input
                          type="text"
                          placeholder=""
                          value={description}
                          onChange={handleDescriptionChange}
                          border={"solid"}
                        />
                      </FormControl>
                      <Button mt={4} type="submit" onClick={handleSubmit}>
                        Submit
                      </Button>
                    </form>
                  </Box>
                </Box>
              </Flex>
            </SimpleGrid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default ManageProducts;
