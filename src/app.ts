import express from 'express'
import authRoute from './routes/auth'
import mongoose from 'mongoose'
require('dotenv/config')

const app = express()

// connect to database
const connectDB = (): void => {
   const DB_URI = process.env.DEV_DB_URI as string
   mongoose.connect(DB_URI, () => {
      console.log("Connected to db")
   })
}


// setup app middlewares
app.use(express.json())

// setup route middlewares
app.use('/api/auth', authRoute)

app.get('/', (req, res) => {
   res.status(200).send()
})

module.exports.connectDB = connectDB
module.exports.app = app