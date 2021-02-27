import { SquareMeterModel } from '@/domain/models'

export interface LoadSquareMeterRepository {
  load: () => Promise<SquareMeterModel>
}
