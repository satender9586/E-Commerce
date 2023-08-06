import React, { useEffect, useState } from 'react'
import Layout from '../Components/Layout/Layout'
import { useDisclosure, Button, Input, InputGroup, InputRightAddon, Text } from '@chakra-ui/react'
import { BiSolidHide, BiShow } from "react-icons/bi"
import { SinginputValidation } from '../Validation/validationFuncltion'
import { FormControl, FormLabel, FormErrorMessage, FormHelperText, } from '@chakra-ui/react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, } from '@chakra-ui/react'


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


                <Modal isOpen={isOpen} size={'xl'} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Register User</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
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
            </>
        </Layout>
    )
}

export default Signup
