import { SquareMeterModel } from '@/domain/models'

export interface LoadSquareMeter {
  load: () => Promise<SquareMeterModel>
}
