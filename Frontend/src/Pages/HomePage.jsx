import React from "react";
import Layout from "../Components/Layout/Layout";
import { Box, Image, Text } from "@chakra-ui/react";
import shop from "../assets/shop.jpg";
import HomeProducts from "../Components/Products/HomeProducts";
import { useSelector } from "react-redux";

const HomePage = () => {
  const { data, status, error } = useSelector((state) => state.product);
  const product = data?.data?.products;

  return (
    <Layout>
      <Box position={"relative"} height={"91vh"}>
        <Box w="100%" h="91vh" position="relative">
          <Box
            position="absolute"
            top="0"
            left="0"
            w="100%"
            h="100%"
            bgGradient="linear(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7))"
          />
          <Image
            objectFit="cover"
            height="100%"
            width="100%"
            src={shop}
            alt="Shop"
          />
        </Box>
        <Box position="absolute" top="30%" left="5%">
          <Text fontSize="50px" fontWeight="700" color="white">
            The <span style={{ color: "#FF0000" }}>Test of Fast-Food</span>{" "}
            Store
          </Text>
          <Text fontSize="20px" fontWeight="500" color="#007BFF">
            <span>Timeless</span> Treasures, Fast Delivery, Forever Yours -{" "}
            <span style={{ color: "white" }}>Elegance in Every Moment.</span>
          </Text>
        </Box>
      </Box>

      <HomeProducts product={product} />
    </Layout>
  );
};

export default HomePage;
