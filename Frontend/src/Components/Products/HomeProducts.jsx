import React from 'react'
import { Box, Flex, Text, Heading, Link } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, Divider, CardFooter, Stack, Button, Image, ButtonGroup } from '@chakra-ui/react'
import { datas } from '../../Pages/data'

const HomeProducts = () => {
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
                        color: "blue", // Change to the desired hover color
                        transform: "translateY(-5px)" // Apply translation on hover
                    }}
                >
                    Our Products
                </Text>




            </Box>
            <Flex flexWrap={"wrap"} justifyContent={"center"} alignItems={"center"} w={"100%"}>
                {
                    datas.map((data, index) => (
                        <Box id={index} m={"20px"} w={"25%"}>
                            <Card >
                                <CardBody >
                                    <Image objectFit={"cover"} w={"100%"} src={data.img}></Image>
                                    <Stack mt='1' spacing='2'>
                                        <Flex alignItems={"center"} justifyContent={"space-between"}>
                                            <Heading textTransform={"capitalize"} fontSize={"24px"}>{data.name}</Heading>
                                            <Text fontSize={"20px"} fontWeight={"500"} color={"red"}>{data.price}</Text>
                                        </Flex>
                                        <Text fontSize={"18px"} color={"gray"} lineHeight={"1"}>
                                            {data.des}
                                        </Text>
                                        <Box mt={"10px"}>
                                            <Button variant={"none"} fontWeight={"600"} textTransform={"capitalize"} color={"white"} bg={"green.500"}>Order Now</Button>
                                        </Box>
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
