import { Box, Button, Grid, GridItem, Select } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Layout from '../Layout/Layout'
import contact from "../../assets/contact.jpg"
import { Image, Text } from '@chakra-ui/react'
import { FaRupeeSign } from "react-icons/fa"
import HomeProducts from './HomeProducts'
import { SingleProdtGet } from '../../Api/getApi'

const AboutProduct = () => {

    const [singleproduct, setSingleProduct] = useState("")
    const { data, status, error } = useSelector((state) => state.product);
    const product = data?.data?.products


    const path = useParams()

    console.log(singleproduct)
    // Single product get api function

    const GetSingleProduct = async () => {
        try {
            const reponse = await SingleProdtGet({ id: path.id })

            setSingleProduct(reponse?.data)




        } catch (error) {

        }
    }
    useEffect(() => {
        GetSingleProduct()
    }, [path.id])


    return (
        <Layout>
            <Box padding={"5% 5%"}>
                <Grid templateColumns={"repeat(2, 1fr)"} gap={4}>
                    <GridItem>
                        <Image borderRadius={"10px"} maxW={"500px"} src={singleproduct.image} objectFit={"cover"} width={"100%"}></Image>
                    </GridItem>
                    <GridItem>
                        <Box>
                            <Text fontSize={"30px"}>Iconic (Accessories)</Text>
                            <Text fontSize={"40px"}>{singleproduct.name}</Text>
                            <Text fontSize={"30px"}>{singleproduct.price} </Text>
                        </Box>
                        <Box mt={"10px"}>
                            <Select w={"25%"} fontSize={"18px"} placeholder='Quantity'>
                                <option value='1'> 1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'> 4</option>
                                <option value='5'>5</option>

                            </Select>
                        </Box>
                        <Box mt={"10px "}>
                            <Button colorScheme='blue'>Add To Cart</Button>
                        </Box>

                        <Box mt={"10px"}>
                            <Text fontWeight={"500"} fontSize={"25px"}>Description</Text>
                            <Text mt={"10px"}>68.58cm/27-inch (diagonal) 5120-by-2880 Retina 5K display 3.1GHz 6-core 10th-generation Intel Core i5 AMD Radeon Pro 5300 graphics Ultrafast SSD storage Two Thunderbolt 3 (USB-C) ports Four USB-A ports Gigabit Ethernet port</Text>
                        </Box>
                    </GridItem>
                </Grid>
                <HomeProducts product={product} />
            </Box>
        </Layout>
    )
}

export default AboutProduct
