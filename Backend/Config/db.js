import mongoose from "mongoose"

const connectDB = async () => {
    try {

        const connect = await mongoose.connect(process.env.MONGODB_URL)
        console.log(`Connected To mongoDb ${connect.connection.host}`)

    } catch (error) {
        console.log(`Error in mongogb connection ${error}`)

    }
}

export default connectDB