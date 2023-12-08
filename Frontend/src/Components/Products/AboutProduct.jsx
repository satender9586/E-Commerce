import { Box, Button, Grid, GridItem } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "../Layout/Layout";
import { Image, Text } from "@chakra-ui/react";
import HomeProducts from "./HomeProducts";
import { SingleProdtGet } from "../../Api/getApi";
import { useDispatch } from "react-redux";
import { addtoCart } from "../redux/slice/CartSlice";

const AboutProduct = () => {
  const path = useParams();
  const Dispatch = useDispatch();
  const [quantityIncDec, setQuantityIncDec] = useState(0);
  const [singleproduct, setSingleProduct] = useState("");
  const { data, status, error } = useSelector((state) => state.product);
  const product = data?.data?.products;
  const datas = useSelector((state) => state.cart);

  // cart data store in localstorage
  function AddtoCartFucntion() {
    Dispatch(addtoCart(singleproduct));
    setQuantityIncDec(quantityIncDec + 1);
  }
  // Single product get api function
  const GetSingleProduct = async () => {
    try {
      const reponse = await SingleProdtGet({ id: path.id });
      setSingleProduct(reponse?.data);
    } catch (error) {}
  };
  useEffect(() => {
    GetSingleProduct();
  }, [path.id]);

  return (
    <Layout>
      <Box padding={"5% 5%"}>
        <Grid templateColumns={"repeat(2, 1fr)"} gap={4}>
          <GridItem>
            <Image
              borderRadius={"10px"}
              maxW={"500px"}
              src={singleproduct.image}
              objectFit={"cover"}
              width={"100%"}
            ></Image>
          </GridItem>
          <GridItem>
            <Box>
              <Text fontSize={"40px"}>{singleproduct.name}</Text>
              <Text fontSize={"30px"}>{singleproduct.price} </Text>
            </Box>
            <Box mt={"10px"}>
              <Box>
                <Box
                  display={"flex"}
                  gap={2}
                  alignItems={"center"}
                  bgColor={"gray.500"}
                  width={"fit-content"}
                >
                  <Button colorScheme="blue">-</Button>
                  <Box>
                    <Text fontSize={"25px"} color={"white"}>
                      {quantityIncDec}
                    </Text>
                  </Box>
                  <Button colorScheme="blue" onClick={AddtoCartFucntion}>
                    +
                  </Button>
                </Box>
              </Box>
            </Box>
            <Box mt={"10px "}>
              <Button onClick={AddtoCartFucntion} colorScheme="blue">
                Add To Cart
              </Button>
            </Box>

            <Box mt={"10px"}>
              <Text fontWeight={"500"} fontSize={"25px"}>
                Description
              </Text>
              <Text mt={"10px"}>{singleproduct.about}</Text>
            </Box>
          </GridItem>
        </Grid>
        <HomeProducts product={product} />
      </Box>
    </Layout>
  );
};

export default AboutProduct;
