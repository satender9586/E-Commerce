import axios from 'axios'

const ApiPath = "http://localhost:8080/api/v1/auth"



// ------------------------------------------------------//
// -----------------Authentication------------------//
// -----------------------------------------------------//


export const SignupApi = async (data) => {
    const response = await axios.post(`${ApiPath}/${data.path}`, data.datas)
    if (!response) {
        throw new Error("Some Thing gone Sign up api")
    }
    return response;
}

export const OtpverifyApi = async (data) => {
    const response = await axios.post(`${ApiPath}/${data.path}`, data.datas)
    if (!response) {
        throw new Error("Some Thing gone otpverify api")
    }
    return response;
}

export const ResendotpApi = async (data) => {
    const response = await axios.post(`${ApiPath}/${data.path}`, data.datas)
    if (!response) {
        throw new Error("Some Thing gone otpverify api")
    }
    return response;
}


export const LoginApi = async (data) => {
    const response = await axios.post(`${ApiPath}/${data.path}`, data.datas)
    if (!response) {
        throw new Error("Some Thing gone otpverify api")
    }
    return response;
}


