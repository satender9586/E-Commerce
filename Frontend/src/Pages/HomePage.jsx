import React from 'react'
import Layout from '../Components/Layout/Layout'
import { Box, Image, Text } from '@chakra-ui/react'
import shop from "../assets/shop.jpg"


const HomePage = () => {
    return (
        <Layout>
            <Box position={"relative"} height={"91vh"}>
                <Image objectFit={"cover"} height={"91vh"} w={"100%"} src={shop} ></Image>
                <Box position={"absolute"} top={"30%"} left={"5%"}>
                    <Text fontSize={"60px"} fontWeight={"700"} color={"white"}>The <span style={{ color: "red" }}>SunShine </span> Store</Text>
                    <Text fontSize={"20px"} fontWeight={"500"} color={"blue"}><span>Timeless</span> Treasures, Forever Yours - Discover Elegance in <br></br>Every Moment.</Text>
                </Box>
            </Box>

        </Layout>
    )
}

export default HomePage
