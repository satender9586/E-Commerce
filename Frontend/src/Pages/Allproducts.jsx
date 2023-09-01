import React, { useEffect, useState } from 'react'
import Layout from '../Components/Layout/Layout'
import { Heading, Box, Text, Select } from '@chakra-ui/react';
import HomeProducts from '../Components/Products/HomeProducts';
import { useSelector } from "react-redux"
import { compose } from '@reduxjs/toolkit';



const Allproducts = () => {

    const { data, status, error } = useSelector((state) => state.product);
    const product = data?.data?.products
    const [uniquproductCategory, setuniquproductCategory] = useState([]);
    const [productfilter, setProductFilter] = useState(product)
    const [filter, setFilter] = useState("All")
    let AllMixcatoryProduct = []

    // Product Filtering base on conditions
    const datas = product?.filter((data) => {
        return filter == "All" ? data : data.catogary == filter;

    })



    // taking categogory from redux
    async function catogaryfunction() {
        try {
            for (let i = 0; i < product?.length; i++) {
                AllMixcatoryProduct.push(product[i]?.catogary)
            }

            const setscategory = new Set(AllMixcatoryProduct)
            const uniqueCategories = Array.from(setscategory);
            setuniquproductCategory(uniqueCategories);

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        catogaryfunction()

    }, [product, filter])


    return (
        <>
            <Layout>
                <Box p={"0 5%"}>
                    <Box p={"1rem 0"}>
                        <Text fontSize={"50px"} fontWeight={"400"} textAlign={"center"}>All Food Products</Text>
                        <Text fontSize={"20px"} textAlign={"center"}>Search Food base on Your choice</Text>
                    </Box>
                    <Box display={"flex"} >
                        <Select w={"10%"} placeholder='Select' onChange={(e) => setFilter(e.target.value)}>
                            <option value="All">ALL</option>
                            {uniquproductCategory?.map((data, index) => (
                                <option key={index} value={data}>{data}</option>
                            ))}
                        </Select>
                    </Box>
                    <Box>
                        <HomeProducts product={datas} />
                    </Box>
                </Box>
            </Layout>
        </>
    )
}

export default Allproducts
