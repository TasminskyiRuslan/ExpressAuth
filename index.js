import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import cookieParser from "cookie-parser"
import "dotenv/config"

const PORT = process.env.PORT || 5000
const app = express()

app.use(cors)
app.use(cookieParser)

const start = () => {
    app.listen(PORT, () => console.log(`Server has been started on http://localhost:${PORT}`))
}

start()