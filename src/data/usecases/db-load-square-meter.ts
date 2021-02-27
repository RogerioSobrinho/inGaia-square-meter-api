import { LoadSquareMeter } from '@/domain/usecases'
import { SquareMeterModel } from '@/domain/models'
import { LoadSquareMeterRepository } from '@/data/protocols'

export class DbLoadSquareMeter implements LoadSquareMeter {
  constructor (
    private readonly loadSquareMeterRepository: LoadSquareMeterRepository
  ) { }

  async load (): Promise<SquareMeterModel> {
    return await this.loadSquareMeterRepository.load()
  }
}
