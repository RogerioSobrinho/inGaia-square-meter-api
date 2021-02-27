import { SquareMeterInMemoryRepository } from '.'

export const throwError = (): never => {
  throw new Error()
}

const makeSut = (): SquareMeterInMemoryRepository => {
  return new SquareMeterInMemoryRepository()
}

describe('SquareMeterInMemoryRepository', () => {
  describe('load()', () => {
    test('Should throw if load throws', async () => {
      const sut = makeSut()
      jest.spyOn(sut, 'load').mockRejectedValueOnce(throwError)
      const promise = sut.load()
      await expect(promise).rejects.toThrow()
    })

    test('Should not exception if load null', async () => {
      const sut = makeSut()
      jest.spyOn(sut, 'load').mockReturnValueOnce(null)
      const squareMeterResult = await sut.load()
      expect(squareMeterResult).toBeNull()
    })

    test('Should return a square meter on success', async () => {
      const sut = makeSut()
      const squareMeter = await sut.load()
      expect(squareMeter).toEqual({ price: 150.45 })
    })
  })
})
