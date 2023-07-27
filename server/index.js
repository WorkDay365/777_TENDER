import express  from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"

import cors from "cors"

import authRoute from './routes/auth.js'
    
}

const app = express()
dotenv.config()

// Constants
const OUR_PORT = process.env.PORT || 3000
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD 
const DB_NAME = process.env.DB_NAME

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/auth',vauthRoute)

// app.get('/', (req, res) => {
//     return res.json({message:'All is fine...'})
// })

async function start(){

    try{
        await mongoose.connect(
            `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.svjbwso.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
        )
        app.listen(OUR_PORT, () => {
            console.log(`Server started on port ${OUR_PORT}`)
        })
    } catch(error){
        console.log(error)
    }

}

start()
