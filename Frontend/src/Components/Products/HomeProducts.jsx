import React from 'react'
import { Box, Flex, Text, Heading, Link } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, Divider, CardFooter, Stack, Button, Image, ButtonGroup } from '@chakra-ui/react'
import { datas } from '../../Pages/data'
import { FaRupeeSign } from "react-icons/fa"
import { useNavigate } from 'react-router-dom';


const HomeProducts = ({ product }) => {

    const Navigate = useNavigate()

    function AboutProductfun(id) {
        Navigate(`/aboutProduct/${id}`)
    }

    return (
        <Box p={"5% 5%"}>
            <Box mt={"-2%"} mb={"20px"}>
                <Text
                    textAlign="center"
                    fontSize="50px"
                    color="red"
                    fontWeight="600"
                    transition="color 0.3s ease, transform 0.3s ease"

                    _hover={{
                        color: "blue",
                        transform: "translateY(-5px)"
                    }}
                >
                    Our Products
                </Text>
            </Box>
            <Flex flexWrap={"wrap"} justifyContent={"center"} alignItems={"center"} w={"100%"} >
                {
                    product?.map((data, index) => (
                        <Box id={index} m={"20px"} w={"25%"} onClick={() => { AboutProductfun(data._id) }} transition="color 0.5s ease, transform 0.3s ease" _hover={{
                            transform: "translateY(-15px)"
                        }}>
                            <Card >
                                <CardBody >
                                    <Image objectFit={"cover"} w={"100%"} maxH={"170px"} src={data.image}></Image>
                                    <Stack mt='1' spacing='2'>
                                        <Flex alignItems={"center"} justifyContent={"space-between"}>
                                            <Heading fontWeight={"none"} textTransform={"capitalize"} fontSize={"18px"}>{data.name}</Heading>

                                        </Flex>
                                        <Text fontSize={"16px"} color={"gray"} textTransform={"capitalize"} lineHeight={"1"}>
                                            {data.descrip}
                                        </Text>
                                        <Text> <Box display={"flex"} alignItems={"center"}> <Box fontSize={"15px"} color={"green"}><FaRupeeSign /></Box> <Box fontSize={"18px"} fontWeight={"500"} color={"green"}>{data.price}</Box></Box></Text>
                                        {/* <Box mt={"10px"}>
                                            <Button variant={"none"} fontWeight={"600"} textTransform={"capitalize"} color={"white"} bg={"black"}>Add To Card</Button>
                                        </Box> */}
                                    </Stack>
                                </CardBody>
                            </Card>
                        </Box>
                    ))
                }

            </Flex>


        </Box >
    )
}

export default HomeProducts
