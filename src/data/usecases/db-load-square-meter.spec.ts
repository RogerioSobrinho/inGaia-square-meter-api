import faker from 'faker'
import { LoadSquareMeterRepository } from '@/data/protocols'
import { SquareMeterModel } from '@/domain/models'
import { DbLoadSquareMeter } from '.'

export const throwError = (): never => {
  throw new Error()
}

export const mockSquareMeterModel = (): SquareMeterModel => {
  return {
    price: faker.random.number()
  }
}

export class LoadSquareMeterRepositorySpy implements LoadSquareMeterRepository {
  surveyModel = mockSquareMeterModel()
  async load (): Promise<SquareMeterModel> {
    return this.surveyModel
  }
}

type SutTypes = {
  sut: DbLoadSquareMeter
  loadSquareMeterRepositorySpy: LoadSquareMeterRepositorySpy
}

const makeSut = (): SutTypes => {
  const loadSquareMeterRepositorySpy = new LoadSquareMeterRepositorySpy()
  const sut = new DbLoadSquareMeter(loadSquareMeterRepositorySpy)
  return {
    sut,
    loadSquareMeterRepositorySpy
  }
}

describe('DbLoadSquareMeter UseCase', () => {
  test('Should throw if load throws', async () => {
    const { sut, loadSquareMeterRepositorySpy } = makeSut()
    jest.spyOn(loadSquareMeterRepositorySpy, 'load').mockImplementationOnce(throwError)
    const promise = sut.load()
    await expect(promise).rejects.toThrow()
  })

  test('Should call load if return null', async () => {
    const { sut, loadSquareMeterRepositorySpy } = makeSut()
    loadSquareMeterRepositorySpy.surveyModel = null
    await sut.load()
    expect(loadSquareMeterRepositorySpy.surveyModel).toBe(null)
  })

  test('Should return load on success', async () => {
    const { sut, loadSquareMeterRepositorySpy } = makeSut()
    const squareMeterResult = await sut.load()
    expect(squareMeterResult).toEqual(loadSquareMeterRepositorySpy.surveyModel)
  })
})
