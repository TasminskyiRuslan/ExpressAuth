import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import "dotenv/config"

const PORT = process.env.PORT || 5000

const app = express()

app.use(cors)
app.use(cookieParser)

const start = async () => {
    try {
        app.listen(PORT, () => console.log(`Server has been started on ${process.env.API_URL}:${PORT}`))
    } catch (error) {
        console.error(error)
    }
}

start()