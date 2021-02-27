import { Controller } from '@/presentation/protocols'
import { SquareMetrePriceController } from '@/presentation/controllers'
import { makeDbSquareMeter } from '@/main/factories/usecases/load-square-meter-factory'

export const makeSquareMetrePriceController = (): Controller => {
  return new SquareMetrePriceController(makeDbSquareMeter())
}
