import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { BiLogoFacebook } from "react-icons/bi"
import { FiTwitter } from "react-icons/fi"
import { FaAccessibleIcon, FaYoutube } from "react-icons/fa"
import { FaWhatsappSquare } from "react-icons/fa"
import { AiOutlineInstagram } from "react-icons/ai"

const Footer = () => {
    return (
        <Box padding={"0 5%"} bg={"#304146"} >
            <Grid templateColumns={"repeat(3, 1fr)"} color={"white"} padding={"1.5rem 0"}>
                <GridItem>
                    <Text fontSize={"25px"} fontWeight={"700"} fontFamily={"roboto"}>About</Text>
                    <Box fontFamily={"roboto"} fontWeight={"500"} gap={"1"} display={"flex"} flexDir={"column"}>
                        <li>
                            <Link to="/">About Us</Link>
                        </li>
                        <li>
                            <Link to="/">Delivery Infomation</Link>
                        </li>
                        <li>
                            <Link to="/">Privacy & Policy</Link>
                        </li>
                        <li>
                            <Link to="/">Tearm & Condition</Link>
                        </li>

                    </Box>
                </GridItem>
                <GridItem>
                    <Text fontSize={"25px"} fontWeight={"700"} fontFamily={"roboto"}>My Account</Text>
                    <Box fontFamily={"roboto"} fontWeight={"500"} gap={"1"} display={"flex"} flexDir={"column"}>
                        <li>
                            <Link to="/">Contact Us</Link>
                        </li>
                        <li>
                            <Link to="/">View Cart</Link>
                        </li>
                        <li>
                            <Link to="/">Orders</Link>
                        </li>
                        <li>
                            <Link to="/">Help</Link>
                        </li>

                    </Box>
                </GridItem>
                <GridItem>
                    <Text fontSize={"25px"} fontWeight={"700"} fontFamily={"roboto"}>Address</Text>
                    <Box fontFamily={"roboto"} fontWeight={"500"} gap={"1"} display={"flex"} flexDir={"column"}>
                        <Flex>
                            <Text>Address : </Text>
                            <Text>Narela Delhi  10082</Text>
                        </Flex>
                        <Flex>
                            <Text>Phone : </Text>
                            <Text>9810411724</Text>
                        </Flex>
                        <Flex>
                            <Text>Timing : </Text>
                            <Text>8AM To 9PM</Text>
                        </Flex>
                        <Flex fontSize={"2rem"} gap={"3"}>
                            <Box>
                                <AiOutlineInstagram />
                            </Box>


                            <Box>
                                <FaWhatsappSquare />
                            </Box>
                            <Box>
                                <FiTwitter />
                            </Box>
                            <Box>
                                <FaYoutube />
                            </Box>
                        </Flex>
                    </Box>
                </GridItem>
            </Grid>
        </Box>
    )
}

export default Footer
