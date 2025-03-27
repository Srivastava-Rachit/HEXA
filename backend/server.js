import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import 'dotenv/config'
import adminRouter from "./routes/adminRoute.js"
import ytcontentrouter from "./routes/ytcontentRoute.js"
import ytgamerouter from "./routes/ytgamesRoute.js"

// APP CONFIG
const app = express()
const port = process.env.PORT || 4000

// MIDDLEWARE
app.use(express.json())
app.use(cors())

connectDB();

// API ENDPOINTS

app.use("/images", express.static('uploads'))
app.use("/api/admin", adminRouter)
app.use('/api/ytcontent', ytcontentrouter);
app.use('/api/games', ytgamerouter)


app.get("/", (req, res) => {
    res.send("API WORKING")
})


app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`)
})
