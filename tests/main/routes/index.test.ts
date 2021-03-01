import app from '@/main/config/app'
import request from 'supertest'

describe('Routes', () => {
  describe('GET /square-meter/price', () => {
    test('Should return 200 on success', async () => {
      await request(app)
        .get('/api/square-meter/price')
        .expect(200)
    })
  })
})
