import React from 'react'
import Layout from '../Components/Layout/Layout'
import { Box, Flex, Text, Heading, Link } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, Divider, CardFooter, Stack, Button, Image, ButtonGroup } from '@chakra-ui/react'

import datas from '../data.jsx'
import { AiFillLinkedin } from "react-icons/ai"

const About = () => {

    console.log(datas)
    return (
        <Layout>
            <Box p={"0 5%"} pb={"2rem"} bg={"whatsapp.100"}>
                <Box py={"2rem"}>
                    <Text fontSize={"25px"} fontWeight={"700"}>About The SunShine Company</Text>
                    <Text mt={"0.5rem"} fontWeight={"400"} color={"wheat.200"}>Once upon a time, in a small town, there was a passionate and ambitious entrepreneur named Emily. Inspired by her love for fashion and a desire to make shopping more enjoyable for everyone, Emily decided to start her own ecommerce venture called "Sunshine Ecommerce Company."</Text>
                    <Text fontSize={"20px"} fontWeight={"500"}>Goal</Text>
                    <Text mt={"0.5rem"} color={"wheat.200"}>The goal of Sunshine Ecommerce Company was simple yet impactful—to bring a ray of sunshine into people's lives through a delightful shopping experience. Emily believed that shopping should be more than just transactions; it should be a way for customers to express themselves, feel confident, and discover unique products that brighten their days.</Text>
                    <Text fontSize={"20px"} fontWeight={"500"}>Purpose</Text>
                    <Text mt={"0.5rem"} color={"wheat.200"}>With every sunrise, Sunshine Ecommerce Company continued to grow and touch the lives of more people. Emily's unwavering dedication, combined with her team's passion, made it a beacon of hope in the world of ecommerce. The Sunshine Ecommerce Company had become more than just a business; it was a movement that celebrated fashion, sustainability, and the joy of living life to the fullest—all under the warm embrace of the sun.</Text>
                </Box>

                {/* Team and Members */}

                <Box mt={"0.5rem"}>
                    <Text fontSize={"25px"} color={"blue.400"} fontWeight={"500"}>Our Team & Members</Text>

                    <Box py={"1rem"} w={"100%"}>
                        <Flex justifyContent={"space-between"} w={"100%"}>
                            {
                                datas.map((data, index) => (
                                    <Box id={index} w={"25%"} >
                                        <Card >
                                            <CardBody p={"1"}>
                                                <Image objectFit={"cover"} borderRadius={"5px"} w={"100%"} height={"260px"} src={data.image}></Image>
                                                <Stack mt='1' spacing='2'>
                                                    <Flex alignItems={"center"} justifyContent={"space-between"}>
                                                        <Heading p={"0 0.2rem"} size="35px">{data.postin}</Heading>
                                                        <Link href={data.link} fontSize={"25px"}><AiFillLinkedin /></Link>
                                                    </Flex>
                                                    <Text p={"0 0.2rem"} fontSize={"15px"}>
                                                        {data.about}
                                                    </Text>
                                                </Stack>
                                            </CardBody>
                                        </Card>
                                    </Box>
                                ))
                            }

                        </Flex>
                    </Box>
                </Box>
            </Box>
        </Layout >
    )
}

export default About
