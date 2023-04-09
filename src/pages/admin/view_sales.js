import React, { useState, useEffect } from "react";
import AdminNavbar from "../../components/admin/admin_navbar/adminNavbar";
import "./view_sales.css"
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Heading,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormLabel,
  Input,
  Stack, 
  Container
} from "@chakra-ui/react";
import axios from "axios";

const ViewSales = () => {
  const [customers, setCustomers] = useState([]);
  const [addPoints, setAddPoints] = useState(0);

  const getLeaderBoard = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(
        "https://el-plan-production.up.railway.app/api/user/leaderboard",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data.data.users);
      setCustomers(response.data.data.users);
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  const updatePointsHandler = async (id) => {
    const token = localStorage.getItem("token");
    console.log(id);
    try {
      const response = await axios.post(
        "https://el-plan-production.up.railway.app/api/user/add-points",
        { userId: id, ppoints: addPoints },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    const new_arr = customers.filter((cust) => cust._id!==id)
    new_arr.push(response.data.data.user)
    setCustomers(new_arr)
    getLeaderBoard()
    onClose()
    alert(response.data.message)

    } catch (err) {
      alert(err.response.data.message);
    }
  };

  const addPointsHandler = (event) => {
    setAddPoints(event.target.value);
  };

  useEffect(() => {
    getLeaderBoard();
  }, []);

  return (
    <>
      <AdminNavbar />

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack spacing={3} as={Container} maxW={"3xl"} textAlign={"center"}>
          <Heading
            fontSize={{ base: "2xl", sm: "4xl" }}
            fontWeight={"bold"}
            fontFamily={"Lato"}
          >
            The coffee house
          </Heading>
        </Stack>
      </div>
      <TableContainer marginTop={"8px"}>
        {/* <TableCaption>Customer sales with points</TableCaption> */}
        <Table>
          <Thead>
            <Th>Pos.</Th>
            <Th>Customer name</Th>
            <Th isNumeric>Points</Th>
            <Th>Action</Th>
          </Thead>
          <Tbody>
            {customers.map((customer, idx) => {
              return (
                <Tr key={idx}>
                  <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent bgColor={"#FEEDDC"}>
                      <ModalHeader>Add points</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>
                        <FormLabel>Points to add</FormLabel>
                        <Input
                          type="number"
                          border={"solid 1px"}
                          value={addPoints}
                          onChange={addPointsHandler}
                        ></Input>
                      </ModalBody>

                      <ModalFooter>
                        <Button
                          bgColor={"#DEAD84"}
                          mr={3}
                          onClick={onClose}
                          _hover={{ bgColor: "#E2C2AA" }}
                        >
                          Close
                        </Button>
                        <Button
                          _hover={{ bgColor: "#563300", color: "white" }}
                          variant="outline"
                          onClick={() => {
                            updatePointsHandler(customer._id);
                          }}
                        >
                          Submit
                        </Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
                  <Td>{idx + 1}</Td>
                  <Td>{customer.name}</Td>
                  <Td>{customer.points}</Td>
                  <Td>
                    <Button
                      bgColor={"#E2C2AA"}
                      onClick={onOpen}
                      _hover={{ bgColor: "#DEAD84" }}
                    >
                      Add
                    </Button>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ViewSales;
