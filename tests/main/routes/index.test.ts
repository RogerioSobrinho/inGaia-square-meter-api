import app from '@/main/config/app'
import request from 'supertest'

describe('Routes', () => {
  describe('GET /square-metre/price', () => {
    test('Should return 200 on success', async () => {
      await request(app)
        .get('/api/square-metre/price')
        .expect(200)
    })
  })
})
