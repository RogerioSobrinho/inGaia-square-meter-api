import { Controller, HttpResponse } from '@/presentation/protocols'
import { LoadSquareMeter } from '@/domain/usecases'
import { noContent, ok, serverError } from '@/presentation/helpers/http-helper'

export class SquareMetrePriceController implements Controller {
  constructor (
    private readonly loadSquareMeter: LoadSquareMeter
  ) { }

  async handle (): Promise<HttpResponse> {
    try {
      const squareMeter = await this.loadSquareMeter.load()
      if (!squareMeter) {
        return noContent()
      }
      return ok(squareMeter)
    } catch (error) {
      return serverError(error)
    }
  }
}
