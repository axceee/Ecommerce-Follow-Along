import dotenv from 'dotenv'
dotenv.config()
import app from "./app.js";
import connectDB from "./config/db.js";
const port = process.env.PORT

connectDB()
.then(
    app.listen(port,()=>{
        console.log(`port is ${port}`)
    })
)
.catch((error)=>{
    console.error(error);
    }
)