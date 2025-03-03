import dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config()

const connectDB = async function () {
    try{
        const connect = await mongoose.connect(`${process.env.MONGO_URL}`)
        console.log('mongo connected')
    }
    catch(err){
        console.error(err)
    }
}

export default connectDB