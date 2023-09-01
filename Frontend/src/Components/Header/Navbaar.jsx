import { Box, Button, Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { NavLink, Navigate } from 'react-router-dom'
import { HiOutlineUserCircle } from "react-icons/hi"
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
} from '@chakra-ui/react'


const Navbaar = () => {
    const token = localStorage.getItem("auth")
    const [count, setcout] = useState(false)

    const logoutfun = () => {
        localStorage.removeItem("auth");
        setcout(true)
    }
    useState(() => {

    }, [count])

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

                <GridItem colSpan={6} position={"relative"} >
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
                        {
                            token && (
                                <Box>
                                    <NavLink to="/contact" className="nav-Link">
                                        Order
                                    </NavLink>
                                </Box>
                            )
                        }

                        <Box>
                            <NavLink to="/cart" className="nav-Link">
                                Cart
                            </NavLink>
                        </Box>



                        {
                            token ?
                                <>

                                    <Box >
                                        <Menu>
                                            <MenuButton
                                                as={HiOutlineUserCircle}
                                                aria-label='Options'
                                                // icon={<HamburgerIcon />}
                                                variant='outline'
                                                fontSize={"30px"}
                                            />
                                            <MenuList position={"absolute"} top={"40px"} left={"30px"}>
                                                <MenuItem fontWeight={"600"} color={"green"}>
                                                    <NavLink to={"#"}>
                                                        <Button p={"0"} variant={"none"}>PROFILE</Button>
                                                    </NavLink>
                                                </MenuItem>
                                                <MenuItem fontWeight={"600"} color={"red"}>
                                                    <NavLink to={"/"}>
                                                        <Button onClick={logoutfun} p={"0"} variant={"none"}> LOGOUT</Button>
                                                    </NavLink>
                                                </MenuItem>

                                            </MenuList>
                                        </Menu>

                                    </Box>
                                </>

                                : <>
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
                                </>
                        }
                    </Flex>
                </GridItem>
            </Grid>
        </Box >
    )
}

export default Navbaar
