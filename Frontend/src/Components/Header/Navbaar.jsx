import { Box, Button, Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import React from 'react'
import { NavLink, Navigate } from 'react-router-dom'


const Navbaar = () => {


    return (
        <Box padding={"0 5%"} position={"sticky"} top="0" height={"55px"} transition="box-shadow 0.3s ease" boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)" zIndex={"1"} bgGradient="linear(to right, #2CB7A4, #D4AF37)" >
            <Grid w={"100%"} height={"55px"} display={"flex"} justifyContent={"space-between"} alignItems={"center"} templateColumns='repeat(2, 1fr)'>
                <GridItem colSpan={6}>
                    <Box>
                        <NavLink to="/">
                            <Text fontSize={"30px"} color={"white"} fontFamily={"roboto"} fontWeight={"700"}>The Test Of Fast-Food</Text>
                        </NavLink>
                    </Box>
                </GridItem>

                <GridItem colSpan={6}>
                    <Flex alignItems={"center"} color={"White"} gap={"5"} fontFamily={"roboto"} fontWeight={"600"} >
                        <Box >
                            <NavLink to="/" className="nav-Link">
                                Home
                            </NavLink>
                        </Box>
                        <Box>
                            <NavLink to="/category" className="nav-Link">
                                Shop
                            </NavLink>
                        </Box>
                        <Box>
                            <NavLink to="/about" className="nav-Link">
                                About
                            </NavLink>
                        </Box>
                        <Box>
                            <NavLink to="/contact" className="nav-Link">
                                Contact
                            </NavLink>
                        </Box>

                        <Box>
                            <NavLink to="/login" className="nav-Link">
                                <Button bg={"blue.400"} color={"white"} variant={"none"} fontWeight={"600"}>LogIn</Button>
                            </NavLink>
                        </Box>
                        <Box>
                            <NavLink to="/signup" className="nav-Link">
                                <Button
                                    onClick={() => NavLink("/signup")}
                                    fontWeight={"600"}
                                >SignUp</Button>
                            </NavLink>
                        </Box>
                    </Flex>
                </GridItem>
            </Grid>
        </Box>
    )
}

export default Navbaar
