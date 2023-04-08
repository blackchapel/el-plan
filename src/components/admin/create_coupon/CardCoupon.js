import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, Button, ButtonGroup } from "@chakra-ui/react";
import "./CardCoupon.css"
import scratch_coupon from "../../../assets/scratch_coupon.jpg"

const CardCoupon = () => {
  return (
    <Card maxW="sm" className = 'card-coupon' maxH="md">
      <CardBody height={200}>
        <Image
          src={scratch_coupon}
          alt="Scratch Card coupong"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">Scratch and win</Heading>
          <Text>
            Create a scratch and win coupon for users. Dispatched as an incentive when user spends a certain amount
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

export default CardCoupon