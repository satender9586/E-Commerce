import React from "react";
import { Box, Flex, Text, Heading, Link } from "@chakra-ui/react";
import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  CardFooter,
  Stack,
  Button,
  Image,
  ButtonGroup,
} from "@chakra-ui/react";
import { datas } from "../../Pages/data";
import { FaRupeeSign } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const HomeProducts = ({ product }) => {
  const Navigate = useNavigate();
  function AboutProductfun(id) {
    Navigate(`/aboutProduct/${id}`);
  }

  return (
    <Box p="5%" bg="gray.100" minHeight="100vh">
      <Box>
        <Text
          textAlign="center"
          fontSize="50px"
          color="red"
          fontWeight="600"
          transition="color 0.3s ease, transform 0.3s ease"
          _hover={{
            color: "blue",
            transform: "translateY(-5px)",
          }}
        >
          Our Products
        </Text>
      </Box>
      <Flex
        flexWrap={"wrap"}
        justifyContent={"center"}
        alignItems={"center"}
        w={"100%"}
      >
        {product?.map((data, index) => (
          <Box
            id={index}
            m={"20px"}
            w={"25%"}
            onClick={() => {
              AboutProductfun(data._id);
            }}
            transition="color 0.5s ease, transform 0.3s ease"
            _hover={{
              transform: "translateY(-15px)",
            }}
          >
            <Card>
              <CardBody>
                <Image
                  objectFit="cover"
                  w={{ base: "100%", md: "100%" }}
                  h="auto"
                  borderRadius="8px"
                  boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
                  src={data.image}
                  alt={data.name}
                ></Image>
                <Stack mt="1" spacing="2">
                  <Flex
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    mt={{ base: "4", md: "0" }}
                  >
                    <Heading
                      fontSize={{ base: "24px", md: "28px" }}
                      fontWeight="bold"
                      mb="2"
                      color="teal.500"
                    >
                      {data.name}
                    </Heading>
                  </Flex>
                  <Text
                    fontSize="16px"
                    color="gray.600"
                    textTransform="capitalize"
                    lineHeight="1"
                    mb="0"
                  >
                    {data.descrip}
                  </Text>
                  <Text
                    fontSize={{ base: "18px", md: "20px" }}
                    color="teal.500"
                  >
                    <Box display={"flex"} alignItems={"center"}>
                      {" "}
                      <Box fontSize="15px" color="green" mr="1">
                        <FaRupeeSign />
                      </Box>{" "}
                      <Box fontSize="18px" fontWeight="500" color="green">
                        {data.price}
                      </Box>
                    </Box>
                  </Text>
                </Stack>
              </CardBody>
            </Card>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default HomeProducts;
