import { Box, Button, Grid, GridItem, Select } from "@chakra-ui/react";
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
  const [singleproduct, setSingleProduct] = useState("");
  const { data, status, error } = useSelector((state) => state.product);
  const product = data?.data?.products;
  const datas = useSelector((state) => state.cart);
  console.log("cartdata", datas);
  const [valuecart, setValuecart] = useState();

  console.log("value cart", valuecart);

  // cart data store in localstorage
  function AddtoCartFucntion() {
    Dispatch(addtoCart(singleproduct));
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
              <Select
                w={"25%"}
                fontSize={"18px"}
                onChange={(e) => {
                  setValuecart(e.target.value);
                }}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Select>
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
