import { DbLoadSquareMeter } from '@/data/usecases'
import { LoadSquareMeter } from '@/domain/usecases'
import { SquareMeterInMemoryRepository } from '@/infra/repositories'

export const makeDbSquareMeter = (): LoadSquareMeter => {
  const squareMeterInMemoryRepository = new SquareMeterInMemoryRepository()
  return new DbLoadSquareMeter(squareMeterInMemoryRepository)
}
