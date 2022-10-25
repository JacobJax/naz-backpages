import mongoose from 'mongoose'

export async function connectToDB(URI: string): Promise<void> {
   try {
      await mongoose.connect(URI, () => {
         console.log("Connected to db")
      })
   } catch (error) {
      console.log("DB Connection error")
   } 
}

export async function disconnectDB(): Promise<void> {
   try {
      await mongoose.connection.close()
   } catch (error) {
      console.log("DB disconnect error")
   }
}