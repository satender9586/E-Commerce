import React, { useState } from "react";
import Layout from "../Components/Layout/Layout";
import { Heading, Box, Text } from "@chakra-ui/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Button,
  Select,
} from "@chakra-ui/react";
import customer from "../assets/contact.jpg";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeCart } from "../Components/redux/slice/CartSlice";
import { addtoCart } from "../Components/redux/slice/CartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const Navigate = useNavigate();
  const CartDatas = useSelector((state) => state.cart);
  const Dispatch = useDispatch();
  const [valuecart, setValuecart] = useState();

  const NavigateonShippingFun = () => {
    return Navigate("/shipping");
  };

  return (
    <Layout>
      <Box p={"0 5%"} height={"100vh"}>
        <Box mt={"1rem"}>
          <Text fontSize={"50px"} fontWeight={"500"} textAlign={"center"}>
            Shopping Cart
          </Text>
        </Box>
        <Box height={"100%"} display={"flex"} gap={4} m={"1.5rem 0"}>
          <Box>
            <Box>
              {CartDatas?.items?.map((data, value) => (
                <>
                  <Card
                    direction={{ base: "column", sm: "column" }}
                    overflow="hidden"
                    variant="outline"
                    mt={"0.5rem"}
                  >
                    <CardBody>
                      <Box display={"flex"} gap={4}>
                        <Box borderRadius={"5"} w={"25%"}>
                          {/* <Image w="100%" borderRadius={"5"} src={data.image}></Image> */}
                          <Image
                            w="100%"
                            borderRadius={"5"}
                            src={"C:UsersAdminPicturesScreenshots"}
                          ></Image>
                        </Box>
                        <Box>
                          <Text fontSize={"25px"} fontWeight={"400"}>
                            {data.name}
                          </Text>
                          <Text fontSize={"18px"}>
                            {data.price} <span>Free Delivery Worth 40</span>
                          </Text>
                        </Box>
                        <Box mt={"10px"}>
                          <Select
                            w={"100%"}
                            value={data.quantity}
                            onChange={(e) => {
                              setValuecart(e.target.value);
                            }}
                            fontSize={"18px"}
                          >
                            <option value="1"> 1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4"> 4</option>
                            <option value="5">5</option>
                          </Select>
                        </Box>
                        <Box mt={"10px"}>
                          <Button
                            onClick={(e) => Dispatch(removeCart(data._id))}
                            colorScheme="blue"
                            textTransform={"capitalize"}
                          >
                            remove
                          </Button>
                        </Box>
                      </Box>
                    </CardBody>
                  </Card>
                </>
              ))}
            </Box>
          </Box>
          <Box>
            <Box>
              {CartDatas.items.length !== 0 && (
                <Card
                  direction={{ base: "column", sm: "column" }}
                  overflow="hidden"
                  variant="outline"
                  mt={"0.5rem"}
                >
                  <CardBody w={"400px"}>
                    <Text fontSize={"25px"} textTransform={"capitalize"}>
                      Order Summery
                    </Text>
                    <Box
                      p={"0.5rem 0"}
                      display={"flex"}
                      justifyContent={"space-between"}
                    >
                      <Text fontSize={"20px"}>
                        Price ({CartDatas.items.length} item)
                      </Text>
                      <Text fontSize={"20px"}>
                        {CartDatas.items.reduce(
                          (accumulater, currentvalue) =>
                            accumulater + currentvalue.price,
                          0
                        )}
                      </Text>
                    </Box>
                    <Box
                      p={"0.5rem 0"}
                      display={"flex"}
                      justifyContent={"space-between"}
                    >
                      <Text fontSize={"20px"}>Save</Text>
                      <Text fontSize={"20px"}>50</Text>
                    </Box>
                    <Box
                      p={"0.5rem 0"}
                      display={"flex"}
                      justifyContent={"space-between"}
                    >
                      <Text fontSize={"20px"}>Delivery Charges</Text>
                      <Text fontSize={"20px"}>50</Text>
                    </Box>
                    <hr></hr>
                    <Box
                      p={"0.5rem 0"}
                      display={"flex"}
                      justifyContent={"space-between"}
                    >
                      <Text fontSize={"20px"} fontWeight={"500"}>
                        Total Amount
                      </Text>
                      <Text fontSize={"20px"}>
                        {CartDatas.items.reduce(
                          (accumulater, currentvalue) =>
                            accumulater + currentvalue.price,
                          0
                        )}
                      </Text>
                    </Box>
                    <hr></hr>
                    <Box
                      p={"0.5rem 0"}
                      display={"flex"}
                      justifyContent={"space-between"}
                    >
                      <Text
                        fontSize={"20px"}
                        fontWeight={"500"}
                        color={"green"}
                      >
                        You will save ₹58 on this order
                      </Text>
                    </Box>
                  </CardBody>
                </Card>
              )}
              <Box>
                <Button onClick={NavigateonShippingFun}>Place Order</Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Cart;
