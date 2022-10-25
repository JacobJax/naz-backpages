import { Schema } from "mongoose"

const mongoose =  require('mongoose')

interface User {
   username: string,
   password: string,
   email?: string,
   mobile?: string,
   created_on: Date
}

const userSchema =  new Schema<User>({
   username: {
      type: String,
      min: 3,
      max: 22,
      required: true
   },
   email: {
      type: String,
      min: 3,
      max: 100,
   },
   mobile: {
      type: String,
      min: 10,
      max: 13
   },
   password: {
      type: String,
      min: 6,
      max: 1024,
      required: true
   },
   created_on: {
      type: Date,
      default: Date.now
   }
})

export default mongoose.model('User', userSchema)