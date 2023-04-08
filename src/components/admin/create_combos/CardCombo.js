import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, Button, ButtonGroup } from "@chakra-ui/react";
import "./CardCombo.css"
import create_combo1 from "../../../assets/create_combo.jpg"

const CardCombo = () => {
  return (
    <Card maxW="sm" className = 'card-combo' maxH="md">
      <CardBody >
        <Image
          src={create_combo1}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">Create combos</Heading>
          <Text>
            Create interesting combos that tend to attract more customers. Customize according to needs.
          </Text>
          
        </Stack>
      </CardBody>
      {/* <Divider /> */}
      {/* <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Buy now
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter> */}
    </Card>
  );
};

export default CardCombo