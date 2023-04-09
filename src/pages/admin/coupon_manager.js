import React, { useEffect, useState } from "react";
import "./coupon_manager.css"
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
import Coupon1 from "../../assets/coupon1.png";
import Coupon2 from "../../assets/coupon2.png";
import Coupon3 from "../../assets/coupon3.png";
import Coupon4 from "../../assets/coupon4.png";

import axios from "axios";

const CouponManager = () => {
  const [coupons, setCoupons] = useState([]);
  const [name, setName] = useState("");
  const [tier, setTier] = useState("");
  const [code, setCode] = useState("");

  const couponDeleteHandler = async (id) => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.delete(
        "https://el-plan-production.up.railway.app/api/coupon/" + id,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert(response.data.message);
      const new_coups = coupons.filter((prod) => prod._id !== id);
      setCoupons(new_coups);
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.set("name", name);
    formData.set("tier", tier);
    formData.set("code", code);

    const data = {
      name: formData.get("name"),
      tier: formData.get("tier"),
      code: formData.get("code"),
    };
    console.log(data);
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "https://el-plan-production.up.railway.app/api/coupon/",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert(response.data.message);
      console.log(response);
      setName("")
      setTier("")
    } catch (err) {
      alert(err.response.data.message);
      console.log(err);
    }
  };

  const getCoupons = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(
        "https://el-plan-production.up.railway.app/api/coupon/",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      setCoupons(response.data.data.coupons);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const handleTierChange = (e) => {
    setTier(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCodeChange = e => {
    setCode(e.target.value)
  }

  useEffect(() => {
    getCoupons();
  }, []);

  return (
    <>
      <AdminNavbar />
      <Tabs variantColor="#56330">
        <TabList>
          <Tab>View Coupons</Tab>
          <Tab>Create Coupon</Tab>
        </TabList>
        <TabPanels backgroundColor={"#FEEDDC"}>
          <TabPanel className="manage-tabs">
            <SimpleGrid columns={3} spacing={3}>
              {coupons &&
                coupons.map((coupon, index) => {
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
                            // backgroundImage: "url(../../assets/coupon.png)",
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
                            src={Coupon1}
                          />
                        </Box>
                        <Stack pt={10} align={"center"} position={"relative"}>
                          <Heading
                            fontSize={"2xl"}
                            fontFamily={"body"}
                            fontWeight={500}
                          >
                            {coupon.name}
                          </Heading>
                          <Text
                            color={"gray.500"}
                            fontSize={"sm"}
                            textTransform={"uppercase"}
                            height={100}
                          >
                            Coupon code: {coupon.code}
                          </Text>
                          <Flex
                            flexDirection={"row"}
                            justifyContent={"space-around"}
                            width="100%"
                          >
                            <Stack direction={"row"} align={"center"}>
                              <Text fontWeight={800} fontSize={"xl"}>
                                {coupon.tier}
                              </Text>
                            </Stack>
                            <Spacer />
                            <Button
                              color={"red"}
                              onClick={() => {
                                couponDeleteHandler(coupon._id);
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
                <Center><img src={Coupon2} className="coupon"/></Center>
              </Box>
              <Flex width="full" align="center" justifyContent="center">
                <Box p={2}>
                  <Box textAlign="center">
                    <Heading>Add Coupon details</Heading>
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
                        <FormLabel>Tier</FormLabel>
                        {/* <Input
                        type="text"
                        placeholder=""
                        value={category}
                        onChange={handleCategoryChange}
                      /> */}
                        <Select
                          placeholder="Select Tier"
                          value={tier}
                          onChange={handleTierChange}
                          border={"solid"}
                        >
                          <option value="silver">Silver</option>
                          <option value="gold">Gold</option>
                          <option value="platinum">Platinum</option>
                        </Select>
                      </FormControl>

                      <FormControl>
                        <FormLabel>Coupon Code</FormLabel>
                        <Input
                          type="text"
                          placeholder=""
                          value={code}
                            onChange={handleCodeChange}
                          border={"solid"}
                        />
                      </FormControl>

                      <Button
                        mt={4}
                        type="submit"
                        onClick={handleSubmit}
                        bgColor={"#563300"}
                        color={"#E2C2AA"}
                        _hover={{ bgColor: "#AB877D" }}
                      >
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

export default CouponManager;
