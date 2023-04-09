import React, { useState, useEffect } from "react";
import AdminNavbar from "../../components/admin/admin_navbar/adminNavbar";
import Coupon3 from "../../assets/coupon3.png";
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

import axios from "axios";

const CreateEvents = () => {
  const [events, setEvents] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const eventDeleteHandler = async (id) => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.delete(
        "https://el-plan-production.up.railway.app/api/event/" + id,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert(response.data.message);
      const new_events = events.filter((prod) => prod._id !== id);
      setEvents(new_events);
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.set("name", name);
    formData.set("date", date);
    formData.set("description", description);

    const data = {
      name: formData.get("name"),
      date: formData.get("date"),
      description: formData.get("description"),
    };
    console.log(data);
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "https://el-plan-production.up.railway.app/api/event",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert(response.data.message);
      console.log(response);
      setName("");
      setDescription("");
      setDate("");
    } catch (err) {
      alert(err.response.data.message);
      console.log(err);
    }
  };

  const getEvents = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(
        "https://el-plan-production.up.railway.app/api/event",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      setEvents(response.data.data.events);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <>
      <AdminNavbar />
      <Tabs variantColor="#56330">
        <TabList>
          <Tab>View Events</Tab>
          <Tab>Create Events</Tab>
        </TabList>
        <TabPanels backgroundColor={"#FEEDDC"}>
          <TabPanel className="manage-tabs">
            <SimpleGrid columns={3} spacing={3}>
              {events &&
                events.map((event, index) => {
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
                            src={event.thumbnail}
                          />
                        </Box>
                        <Stack pt={10} align={"center"} position={"relative"}>
                          <Heading
                            fontSize={"2xl"}
                            fontFamily={"body"}
                            fontWeight={500}
                          >
                            {event.name}
                          </Heading>
                          <Text
                            color={"gray.500"}
                            fontSize={"sm"}
                            textTransform={"uppercase"}
                            height={100}
                          >
                            Event date: {event.date}
                          </Text>
                          <Flex
                            flexDirection={"row"}
                            justifyContent={"space-around"}
                            width="100%"
                          >
                            <Stack direction={"row"} align={"center"}>
                              <Text fontWeight={800} fontSize={"xl"}>
                                {event.description}
                              </Text>
                            </Stack>
                            <Spacer />
                            <Button
                              color={"red"}
                              onClick={() => {
                                eventDeleteHandler(event._id);
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
                  <img src={Coupon3} className="coupon" />
                </Center>
              </Box>
              <Flex width="full" align="center" justifyContent="center">
                <Box p={2}>
                  <Box textAlign="center">
                    <Heading>Add Event details</Heading>
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
                        <FormLabel>Date (dd/mm/yyyy)</FormLabel>
                        <Input
                          type="text"
                          placeholder=""
                          value={date}
                          onChange={handleDateChange}
                          border={"solid"}
                        />
                        {/* <Select
                          placeholder="Select Tier"
                          value={tier}
                          onChange={handleTierChange}
                          border={"solid"}
                        >
                          <option value="silver">Silver</option>
                          <option value="gold">Gold</option>
                          <option value="platinum">Platinum</option>
                        </Select> */}
                      </FormControl>

                      <FormControl>
                        <FormLabel>Event description</FormLabel>
                        <Input
                          type="text"
                          placeholder=""
                          value={description}
                          onChange={handleDescriptionChange}
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

export default CreateEvents;
