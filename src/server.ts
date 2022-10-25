import {initializeApp} from './app'
import { connectToDB } from './db'
require('dotenv/config')

const PORT = process.env.PORT 
const DB_URI = process.env.DEV_DB_URI as string

const app = initializeApp()
connectToDB(DB_URI)

app.listen(PORT, () => { console.log(`server listening on ${PORT}`)})