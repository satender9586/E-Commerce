const path = "http://localhost:8080/api/v1/product/singleproduct"


import axios from "axios"



// /////////////////////////////////
////////////////////////////////


export const SingleProdtGet = async (data) => {
    const reponse = axios.get(`${path}/${data.id}`)

    if (!reponse) {
        throw new Error("Some Thing gone Sign up api")
    }
    return reponse;
}

