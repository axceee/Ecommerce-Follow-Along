import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(cors())
app.use((req, res, next) => {
res.status(404).json({ error: "Not Found" });
});

app.use((err, req, res, next) => {
console.error(err.stack);
res.status(500).json({ error: "Internal Server Error" });
});
export default app
