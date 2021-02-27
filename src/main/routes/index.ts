import { adaptRoute } from '@/main/adapters'
import { makeSquareMetrePriceController } from '@/main/factories'
import { Router } from 'express'

export default (router: Router): void => {
  router.get('/square-metre/price', adaptRoute(makeSquareMetrePriceController()))
}
