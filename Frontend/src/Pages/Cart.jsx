import React from 'react'
import Layout from '../Components/Layout/Layout'
import { Heading, Box, Text } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Button, Select } from '@chakra-ui/react'
import customer from "../assets/contact.jpg"

const Cart = () => {
    return (
        <Layout>
            <Box height={"100vh"} p={"0 5%"}>
                <Box mt={"1rem"}>
                    <Text fontSize={"50px"} fontWeight={"500"} textAlign={"center"}>Shopping Cart</Text>
                </Box>
                <Box height={"100%"} display={"flex"} gap={4} m={"1.5rem 0"}>
                    <Box>
                        <Box>
                            <Card
                                direction={{ base: 'column', sm: 'column' }}
                                overflow='hidden'
                                variant='outline'
                            >

                                <CardBody>
                                    <Box display={"flex"} gap={4}>
                                        <Box borderRadius={"5"} w={"25%"}>
                                            <Image w="100%" borderRadius={"5"} src={customer}></Image>
                                        </Box>
                                        <Box>
                                            <Text fontSize={"25px"} fontWeight={"400"}>Samose</Text>
                                            <Text fontSize={"18px"}>50 <span>Free Delivery Worth 40</span></Text>
                                        </Box>
                                        <Box mt={"10px"}>
                                            <Select w={"100%"} fontSize={"18px"} placeholder='Quantity'>
                                                <option value='1'> 1</option>
                                                <option value='2'>2</option>
                                                <option value='3'>3</option>
                                                <option value='4'> 4</option>
                                                <option value='5'>5</option>

                                            </Select>
                                        </Box>
                                        <Box mt={"10px"}>
                                            <Button colorScheme='blue' textTransform={"capitalize"}>remove</Button>
                                        </Box>
                                    </Box>
                                </CardBody>
                            </Card>
                        </Box>

                    </Box>
                    <Box>
                        <Box>
                            <Card
                                direction={{ base: 'column', sm: 'column' }}
                                overflow='hidden'
                                variant='outline'
                            >

                                <CardBody w={"400px"}>
                                    <Text fontSize={"25px"} textTransform={"capitalize"}>Order Summery</Text>
                                    <Box p={"0.5rem 0"} display={"flex"} justifyContent={"space-between"}>
                                        <Text fontSize={"20px"}>Price (1 item)</Text>
                                        <Text fontSize={"20px"}>50</Text>
                                    </Box>
                                    <Box p={"0.5rem 0"} display={"flex"} justifyContent={"space-between"}>
                                        <Text fontSize={"20px"}>Save</Text>
                                        <Text fontSize={"20px"}>50</Text>
                                    </Box>
                                    <Box p={"0.5rem 0"} display={"flex"} justifyContent={"space-between"}>
                                        <Text fontSize={"20px"}>Delivery Charges</Text>
                                        <Text fontSize={"20px"}>50</Text>
                                    </Box>
                                    <hr></hr>
                                    <Box p={"0.5rem 0"} display={"flex"} justifyContent={"space-between"}>
                                        <Text fontSize={"20px"} fontWeight={"500"}>Total Amount</Text>
                                        <Text fontSize={"20px"}>50</Text>
                                    </Box>
                                    <hr></hr>
                                    <Box p={"0.5rem 0"} display={"flex"} justifyContent={"space-between"}>
                                        <Text fontSize={"20px"} fontWeight={"500"} color={"green"}>You will save ₹58 on this order</Text>

                                    </Box>
                                </CardBody>
                            </Card>
                        </Box>
                    </Box>

                </Box>
            </Box>
        </Layout>
    )
}

export default Cart
