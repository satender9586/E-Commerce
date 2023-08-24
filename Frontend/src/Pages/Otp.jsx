import React, { useEffect, useState, useRef } from 'react'
import Layout from '../Components/Layout/Layout'
import shop from "../assets/shop.jpg"
import { Box, Text, Input, InputGroup, InputRightAddon, } from '@chakra-ui/react'
import { FormControl, FormLabel, FormErrorMessage, FormHelperText, useDisclosure, Button } from '@chakra-ui/react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Image } from '@chakra-ui/react'
import { BiSolidHide, BiShow } from "react-icons/bi"
import { SinginputValidation } from '../Validation/validationFuncltion'
import { useNavigate } from "react-router-dom"
import { OtpverifyApi, ResendotpApi } from '../Api/postApi'

import { useSelector } from "react-redux"


const Otp = () => {

    const datas = useSelector((state) => state)
    const Navigate = useNavigate()
    const [email, setEmail] = useState(datas?.user[0]?.email)
    const [otp, setOtp] = useState()
    const [otpTime, setOtpTime] = useState(90);
    const intervalIdRef = useRef(null);




    // OTP Verify Api
    const OtpHandler = async () => {
        const newobj = {
            email: datas?.user[0]?.email,
            otp: otp
        }
        try {
            const response = await OtpverifyApi({ path: "/Otp-verify", datas: newobj })
            if (response.statusText == "OK") {
                Navigate("/login")
            }

        } catch (error) {
            console.log("This Error from OTP-Verify Api", error)
        }
    }

    // Otp Expire Time & And Calling Resend OTP For Verify


    function timeclaution() {
        useEffect(() => {
            if (otpTime > 0) {
                intervalIdRef.current = setInterval(() => {
                    setOtpTime(prevTime => prevTime - 1);
                }, 1000);
            } else {
                clearInterval(intervalIdRef.current);
            }

            return () => {
                clearInterval(intervalIdRef.current);
            };
        }, [otpTime]);

    }
    timeclaution()


    // Resend Otp function 

    async function ResendOtp() {

        const newobj = {
            email: datas?.user[0]?.email,
        }
        try {
            const reponse = await ResendotpApi({ path: "/resend-otp", datas: newobj })
            if (reponse.statusText == "OK") {
                setOtpTime(90)
                timeclaution()
                Navigate("/login")

            }
        } catch (error) {
            console.log("Error From Resend Otp api", error)
        }
    }

    useEffect(() => {
        onOpen()

    }, [])
    const { isOpen, onOpen, onClose } = useDisclosure()


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
                    <Modal isOpen={isOpen} size={'sm'} >
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>OTP Verify</ModalHeader>
                            <ModalCloseButton onClick={() => Navigate("/")} />
                            <ModalBody p={"0 5%"}>
                                <form >

                                    <FormControl>
                                        <FormLabel>Email Id</FormLabel>
                                        <Input disabled value={email} fontSize={"18px"} name="email" type='email' />
                                        {/* <Text color={"Red"} fontSize={"12px"}>{formError.email}</Text> */}
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel>Enter OTP</FormLabel>
                                        <Input name="name" type='text' fontSize={"18px"} onChange={(e) => setOtp(e.target.value)} />
                                        {/* <Text color={"Red"} fontSize={"12px"}>{formError.name}</Text> */}
                                    </FormControl>

                                </form>
                                <Box mt={"10px"}>
                                    <Text textTransform={"capitalize"} fontSize={"12px"} color={"red"}>OTP Will Expire with in : <span style={{ color: "black" }}>{otpTime}</span> Sec</Text>
                                </Box>
                            </ModalBody>

                            <ModalFooter>

                                <Button display={otpTime == 0 ? "flex" : "none"} onClick={ResendOtp} colorScheme='red' mr={3} >
                                    Resend-OTP
                                </Button>
                                <Button colorScheme='blue' onClick={OtpHandler} mr={3} >
                                    Verify
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
