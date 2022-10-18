import request from 'supertest'
import app from '../src/app'

test("GET /: Should return 200 OK response", async () => {
   const response = await request(app).get('/')
   expect(response.statusCode).toBe(200)
})
