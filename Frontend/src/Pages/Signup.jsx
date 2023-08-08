import React, { useEffect, useState } from 'react'
import Layout from '../Components/Layout/Layout'
import { useDisclosure, Button, Input, InputGroup, InputRightAddon, Text, Box } from '@chakra-ui/react'
import { BiSolidHide, BiShow } from "react-icons/bi"
import { SinginputValidation } from '../Validation/validationFuncltion'
import { FormControl, FormLabel, FormErrorMessage, FormHelperText, } from '@chakra-ui/react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Image } from '@chakra-ui/react'
import shop from "../assets/shop.jpg"




const Signup = () => {

    const [formData, setFormData] = useState({ name: "", phone: "", email: "", password: "", repassword: "", address: "" })
    const [showPassword, setShowPassword] = useState(false)
    const [repassword, setrepassword] = useState(false)
    const [formError, setFormError] = useState({})
    const [submitem, setFormSubmit] = useState(false)


    // form clear function 

    const formclear = () => {
        setFormData({ name: "", phone: "", email: "", password: "", repassword: "", address: "" })
        setFormError({})
    }

    // password Hide & Show Function
    const PasswordShow = () => { setShowPassword(!showPassword) }
    const Reenterpassword = () => { setrepassword(!repassword) }

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

    // modal open
    useEffect(() => {
        onOpen()
    }, [])

    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Layout>
            <>
                <Box height={"91vh"}>
                    <Box position={"relative"} height={"91vh"}>
                        <Image objectFit={"cover"} height={"91vh"} w={"100%"} src={shop} ></Image>
                        <Box position={"absolute"} top={"30%"} left={"5%"}>
                            <Text fontSize={"60px"} fontWeight={"700"} color={"white"}>The <span style={{ color: "red" }}>SunShine </span> Store</Text>
                            <Text fontSize={"20px"} fontWeight={"500"} color={"blue"}><span>Timeless</span> Treasures, Forever Yours - Discover Elegance in <br></br>Every Moment.</Text>
                        </Box>
                    </Box>

                    <Modal isOpen={isOpen} size={'xl'} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>Register User</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody p={"0 5%"}>
                                <form >
                                    <FormControl>
                                        <FormLabel>Full Name</FormLabel>
                                        <Input value={formData.name} name="name" onChange={handlerChange} type='text' />
                                        <Text color={"Red"} fontSize={"12px"}>{formError.name}</Text>
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel>Email Id</FormLabel>
                                        <Input value={formData.email} name="email" onChange={handlerChange} type='email' />
                                        <Text color={"Red"} fontSize={"12px"}>{formError.email}</Text>
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel>Phone Number</FormLabel>
                                        <Input value={formData.phone} name="phone" onChange={handlerChange} type='number' />
                                        <Text color={"Red"} fontSize={"12px"}>{formError.phone}</Text>
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel>Enter Password</FormLabel>
                                        <InputGroup >
                                            <Input value={formData.password} onChange={handlerChange} name="password" type={showPassword ? "text" : 'password'} />
                                            <InputRightAddon padding={"0"} children={<Button w={"100%"} variant={"none"} onClick={PasswordShow}>{showPassword ? <BiShow /> : <BiSolidHide />}</Button>} />

                                        </InputGroup>
                                        <Text color={"Red"} fontSize={"12px"}>{formError.password}</Text>
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel>Re-Enter Password</FormLabel>
                                        <InputGroup>
                                            <Input value={formData.repassword} onChange={handlerChange} name="repassword" type={repassword ? "text" : 'password'} />
                                            <InputRightAddon padding={"0"} children={<Button w={"100%"} variant={"none"} onClick={Reenterpassword}>{repassword ? <BiShow /> : <BiSolidHide />}</Button>} />

                                        </InputGroup>
                                        <Text color={"Red"} fontSize={"12px"}>{formError.repassword}</Text>
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel>Address </FormLabel>
                                        <Input value={formData.address} name="address" onChange={handlerChange} type='text' />
                                    </FormControl>
                                </form>
                            </ModalBody>

                            <ModalFooter>
                                <Button colorScheme='red' mr={3} onClick={formclear} >
                                    Clear
                                </Button>
                                <Button colorScheme='blue' mr={3} onClick={submitFormHandler} >
                                    Save
                                </Button>

                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                </Box>
            </>
        </Layout>
    )
}

export default Signup
