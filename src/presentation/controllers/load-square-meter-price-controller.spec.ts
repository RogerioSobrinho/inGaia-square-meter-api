import { LoadSquareMeter } from '@/domain/usecases'
import { SquareMeterModel } from '@/domain/models'
import { SquareMetrePriceController } from '.'
import { noContent, ok, serverError } from '@/presentation/helpers'

import faker from 'faker'

export const throwError = (): never => {
  throw new Error()
}

export const mockSquareMeterModel = (): SquareMeterModel => {
  return {
    price: faker.random.number()
  }
}

export class LoadSquareMeterSpy implements LoadSquareMeter {
  surveyModel = mockSquareMeterModel()
  async load (): Promise<SquareMeterModel> {
    return this.surveyModel
  }
}

type SutTypes = {
  sut: SquareMetrePriceController
  loadSquareMeterSpy: LoadSquareMeterSpy
}

const makeSut = (): SutTypes => {
  const loadSquareMeterSpy = new LoadSquareMeterSpy()
  const sut = new SquareMetrePriceController(loadSquareMeterSpy)
  return {
    sut,
    loadSquareMeterSpy
  }
}

describe('SquareMetrePriceController', () => {
  describe('load', () => {
    test('should throw if load throws', async () => {
      const { sut, loadSquareMeterSpy } = makeSut()
      jest.spyOn(loadSquareMeterSpy, 'load').mockImplementationOnce(throwError)
      const httpResponse = await sut.handle()
      expect(httpResponse).toEqual(serverError(new Error()))
    })

    test('Should return 204 if Square Meter returns empty or null', async () => {
      const { sut, loadSquareMeterSpy } = makeSut()
      jest.spyOn(loadSquareMeterSpy, 'load').mockReturnValueOnce(null)
      const httpResponse = await sut.handle()
      expect(httpResponse).toEqual(noContent())
    })

    test('Should return 200 on success', async () => {
      const { sut, loadSquareMeterSpy } = makeSut()
      const httpResponse = await sut.handle()
      expect(httpResponse).toEqual(ok(loadSquareMeterSpy.surveyModel))
    })
  })
})
