import React from 'react'
import Layout from '../Components/Layout/Layout'
import { Box, Image, Input, Textarea, } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter, Heading, Text, Button, Stack } from '@chakra-ui/react'
import {
    Step,
    StepDescription,
    StepIcon,
    StepIndicator,
    StepNumber,
    StepSeparator,
    StepStatus,
    StepTitle,
    Stepper,
    useSteps,
} from '@chakra-ui/react'

const PlaceOrder = () => {

    const steps = [
        { title: 'Shipping Address' },
        { title: 'Payments' },

    ]

    const { activeStep } = useSteps({
        index: 1,
        count: steps.length,
    })



    return (
        <Layout>
            <Box height={"100vh"} padding={"0 5%"}>
                <Box >
                    <Stepper my={"2rem"} index={activeStep}>
                        {steps.map((step, index) => (
                            <Step key={index}>
                                <StepIndicator>
                                    <StepStatus
                                        complete={<StepIcon />}
                                        incomplete={<StepNumber />}
                                        active={<StepNumber />}
                                    />
                                </StepIndicator>

                                <Box flexShrink='0'>
                                    <StepTitle>{step.title}</StepTitle>

                                </Box>

                                <StepSeparator />
                            </Step>
                        ))}
                    </Stepper>
                </Box>
                <Box>
                    <Card
                        direction={{ base: 'column', sm: 'row' }}
                        overflow='hidden'
                        variant='outline'
                    >


                        <Stack w={"100%"}>
                            <CardBody >
                                <Heading fontSize={"40px"} size='md'>Shipping Address</Heading>
                                <Stack mt={"1rem"} direction={"row"} spacing={3}>
                                    <Input border={"1px solid #C0C0C0"} placeholder='Full Name' py={"25px"} type='text'></Input>
                                    <Input border={"1px solid #C0C0C0"} placeholder='Phone No' py={"25px"} type='text'></Input>
                                </Stack>
                                <Stack mt={"1rem"} direction={"row"} spacing={3}>
                                    <Input border={"1px solid #C0C0C0"} placeholder='State' py={"25px"} type='text'></Input>
                                    <Input border={"1px solid #C0C0C0"} placeholder='City' py={"25px"} type='text'></Input>
                                </Stack>
                                <Stack mt={"1rem"} direction={"row"} spacing={3}>
                                    <Textarea border={"1px solid #C0C0C0"} placeholder='Address' resize={"none"}></Textarea>

                                </Stack>
                                <Stack mt={"1rem"} direction={"row"} spacing={3}>
                                    <Input border={"1px solid #C0C0C0"} placeholder='Pincode' py={"25px"} type='text'></Input>
                                    <Input border={"1px solid #C0C0C0"} placeholder='LandMark' py={"25px"} type='text'></Input>
                                </Stack>

                            </CardBody>

                            <CardFooter>
                                <Button border={"1px solid #C0C0C0"} fontSize={"18px"} p={"25px 40px"} variant='solid' colorScheme='blue'>
                                    Submit
                                </Button>
                            </CardFooter>
                        </Stack>
                    </Card>
                </Box>
            </Box>
        </Layout>
    )
}

export default PlaceOrder
