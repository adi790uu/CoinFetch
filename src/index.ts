import express from "express"
import dotenv from "dotenv"


dotenv.config()
const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.json({success: true, message: "Welcome to CoinFetch!"})
})

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`)
})