import React from 'react'
import Layout from '../Components/Layout/Layout'
import { Grid, GridItem, Box, Text, Input, Textarea, Button } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import customer from "../assets/contact.jpg"
import { FormControl, FormLabel, FormErrorMessage, FormHelperText, } from '@chakra-ui/react'

const Contact = () => {
    return (
        <Layout>
            <Box height={"91.1vh"} p={"0 5%"} bg="#f7f5f8">
                <Grid templateColumns={"repeat(2,1fr)"} height={"100%"}>
                    <GridItem>
                        <Box pt={"0.5rem"}>
                            <Text textAlign={"center"} color={"red.600"} fontSize={"30px"} fontWeight={"700"}>Welcome to the "<spna style={{ color: "Green" }}>The Test of Fast-Food</spna>"</Text>
                            <Text textAlign={"center"} color={"blue"} fontWeight={"500"} fontSize={"25px"}>We are avilable 24*7 for you</Text>
                        </Box>
                        <Box p={"0 10%"} pt={"1.5rem"}>
                            <form>
                                <FormControl>
                                    <FormLabel>Full Name</FormLabel>
                                    <Input border={"1px solid #9ba8b6"} name="name" type='text' />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Email Address</FormLabel>
                                    <Input border={"1px solid #9ba8b6"} name="email" type='email' />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Phone No</FormLabel>
                                    <Input border={"1px solid #9ba8b6"} name="number" type='number' />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Message</FormLabel>
                                    <Textarea border={"1px solid #9ba8b6"} resize={"none"} name="number" type='textarea' />
                                </FormControl>
                                <Box mt={"1rem"}>
                                    <Button border={"1px solid #9ba8b6"} w={"100%"} color={"white"} bg='blue.400' mr={3}  >
                                        Send Message
                                    </Button>
                                </Box>
                            </form>
                        </Box>
                    </GridItem>
                    <GridItem display={"flex"} justifyContent={"center"} alignItems={"center"}>
                        <Box>
                            <Image src={customer}></Image>
                        </Box>
                    </GridItem>
                </Grid>
            </Box>
        </Layout >
    )
}

export default Contact
