import React, { useEffect, useState } from 'react'
import Layout from '../Components/Layout/Layout'
import shop from "../assets/shop.jpg"
import { Box, Text, Input, InputGroup, InputRightAddon, } from '@chakra-ui/react'
import { FormControl, FormLabel, FormErrorMessage, FormHelperText, useDisclosure, Button } from '@chakra-ui/react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Image } from '@chakra-ui/react'
import { BiSolidHide, BiShow } from "react-icons/bi"
import { SinginputValidation } from '../Validation/validationFuncltion'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const Navigate = useNavigate()
    const [formData, setFormData] = useState({ name: "", email: "", password: "" })
    const [showPassword, setShowPassword] = useState(false)
    const [formError, setFormError] = useState({})
    const [submitem, setFormSubmit] = useState(false)

    // Form Clear fun
    const formclear = () => {
        setFormData({ name: "", phone: "", email: "", password: "", repassword: "", address: "" })
        setFormError({})
    }


    // show password Function
    const PasswordShow = () => { setShowPassword(!showPassword) }

    // Input take form
    const handlerChange = (e) => {
        const { name, value } = e.target;
        const newoformobj = { ...formData, [name]: value }
        setFormData({ ...newoformobj })

        if (submitem) {
            const errorform = SinginputValidation(newoformobj)
            setFormError(errorform)
        }

    }
    // form Data collected
    const submitFormHandler = (e) => {
        e.preventDefault()
        setFormSubmit(true)

        const finalvalidation = SinginputValidation(formData)
        setFormError(finalvalidation)

    }



    const { isOpen, onOpen, onClose } = useDisclosure()

    useEffect(() => {
        onOpen()
    }, [])

    return (
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
                        <ModalHeader>SignUp</ModalHeader>
                        <ModalCloseButton onClick={() => Navigate("/")} />
                        <ModalBody p={"0 5%"}>
                            <form >
                                <FormControl>
                                    <FormLabel>Full Name</FormLabel>
                                    <Input value={formData.name} onChange={handlerChange} name="name" type='text' />
                                    <Text color={"Red"} fontSize={"12px"}>{formError.name}</Text>
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Email Id</FormLabel>
                                    <Input value={formData.email} onChange={handlerChange} name="email" type='email' />
                                    <Text color={"Red"} fontSize={"12px"}>{formError.email}</Text>
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Enter Password</FormLabel>
                                    <InputGroup >
                                        <Input value={formData.password} onChange={handlerChange} name="password" type={showPassword ? "text" : 'password'} />
                                        <InputRightAddon padding={"0"} children={<Button w={"100%"} variant={"none"} onClick={PasswordShow}>{showPassword ? <BiShow /> : <BiSolidHide />}</Button>} />

                                    </InputGroup>
                                    <Text color={"Red"} fontSize={"12px"}>{formError.password}</Text>
                                </FormControl>


                            </form>
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme='red' mr={3} onClick={formclear} >
                                Clear
                            </Button>
                            <Button colorScheme='blue' mr={3} onClick={submitFormHandler}  >
                                LogIn
                            </Button>

                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Box>
        </Layout>
    )
}

export default Login
