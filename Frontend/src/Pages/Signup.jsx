import React, { useEffect } from 'react'
import Layout from '../Components/Layout/Layout'
import { useDisclosure, Button, Input } from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,

} from '@chakra-ui/react'

const Signup = () => {





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
                            <form>
                                <FormControl>
                                    <FormLabel>Full Name</FormLabel>
                                    <Input type='text' />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Email Id</FormLabel>
                                    <Input type='text' />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Phone Number</FormLabel>
                                    <Input type='number' />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Enter Password</FormLabel>
                                    <Input type='text' />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Re-Enter Password</FormLabel>
                                    <Input type='text' />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Address </FormLabel>
                                    <Input type='text' />
                                </FormControl>
                            </form>
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme='blue' mr={3} onClick={onClose}>
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
