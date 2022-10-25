import request from 'supertest'
import {initializeApp} from '../src/app'
const app = initializeApp()

describe("It tests auth route", () => {
   describe("It tests /register route", () => {

      // test for creating an account
      test("POST request to /api/auth/register should return a 200 OK response", async () => {
         const response = await request(app).post('/api/auth/register').send({
            username: "jonh_doe",
            password: "password123"
         })
         expect(response.statusCode).toBe(200)
         expect(response.body).toEqual(
            expect.objectContaining({
               message: "account created succesfully"
            })
         )
      })

   })
})