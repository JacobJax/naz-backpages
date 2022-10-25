import express from 'express'
import authRoute from './routes/auth'
import mongoose from 'mongoose'
require('dotenv/config')

export function initializeApp() {
   const app = express()

   // setup app middlewares
   app.use(express.json())

   // setup route middlewares
   app.use('/api/auth', authRoute)

   app.get('/', (req, res) => {
      res.status(200).send()
   })

   return app
}