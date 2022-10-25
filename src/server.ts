import app from './app'
import connectDB from './app'

const PORT: number = 8085
connectDB()

app.listen(PORT, () => { console.log(`server listening on ${PORT}`)})