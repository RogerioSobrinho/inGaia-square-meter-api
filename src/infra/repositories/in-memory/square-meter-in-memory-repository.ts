import { LoadSquareMeterRepository } from '@/data/protocols/db'
import { SquareMeterModel } from '@/domain/models'

export class SquareMeterInMemoryRepository implements LoadSquareMeterRepository {
  private readonly squareMeter: SquareMeterModel = {
    price: 150.45
  }

  async load (): Promise<SquareMeterModel> {
    return Promise.resolve(this.squareMeter)
  }
}
