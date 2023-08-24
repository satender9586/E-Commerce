import React, { useEffect, useState } from 'react'
import Layout from '../Components/Layout/Layout'
import shop from "../assets/shop.jpg"
import { Box, Text, Input, InputGroup, InputRightAddon, } from '@chakra-ui/react'
import { FormControl, FormLabel, FormErrorMessage, FormHelperText, useDisclosure, Button } from '@chakra-ui/react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Image } from '@chakra-ui/react'
import { BiSolidHide, BiShow } from "react-icons/bi"
import { SinginputValidation } from '../Validation/validationFuncltion'
import { useNavigate } from "react-router-dom"
import { OtpverifyApi } from '../Api/postApi'


const Otp = () => {

    const [email, setEmail] = useState("")
    const [otp, setOtp] = useState("")

    // OTP Verify Api
    const OtpHandler = async () => {

    }

    const Navigate = useNavigate()
    const { isOpen, onOpen, onClose } = useDisclosure()

    useEffect(() => {
        onOpen()
    }, [])

    return (
        <>
            <Layout>
                <Box>
                    <Box position={"relative"} height={"91vh"}>
                        <Box w="100%" h="91vh" position="relative">
                            <Box
                                position="absolute"
                                top="0"
                                left="0"
                                w="100%"
                                h="100%"
                                bgGradient="linear(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7))"
                            />
                            <Image
                                objectFit="cover"
                                height="100%"
                                width="100%"
                                src={shop}
                                alt="Shop"
                            />
                        </Box>

                        <Box position="absolute" top="30%" left="5%">
                            <Text fontSize="50px" fontWeight="700" color="white">
                                The <span style={{ color: "#FF0000" }}>Test of Fast-Food</span> Store
                            </Text>
                            <Text fontSize="20px" fontWeight="500" color="#007BFF">
                                <span>Timeless</span> Treasures, Fast Delivery, Forever Yours -{' '}
                                <span style={{ color: "white" }}>Elegance in Every Moment.</span>
                            </Text>
                        </Box>
                    </Box>
                    <Modal isOpen={isOpen} size={'md'} >
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>OTP Verify</ModalHeader>
                            <ModalCloseButton onClick={() => Navigate("/")} />
                            <ModalBody p={"0 5%"}>
                                <form >

                                    <FormControl>
                                        <FormLabel>Email Id</FormLabel>
                                        <Input disabled value={email} name="email" type='email' />
                                        {/* <Text color={"Red"} fontSize={"12px"}>{formError.email}</Text> */}
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel>Enter OTP</FormLabel>
                                        <Input name="name" type='text' onChange={(e) => setOtp(e.target.value)} />
                                        {/* <Text color={"Red"} fontSize={"12px"}>{formError.name}</Text> */}
                                    </FormControl>



                                </form>
                            </ModalBody>

                            <ModalFooter>
                                <Button colorScheme='red' mr={3} >
                                    Clear
                                </Button>
                                <Button colorScheme='blue' mr={3} >
                                    LogIn
                                </Button>

                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                </Box>
            </Layout>
        </>
    )
}

export default Otp
