import { validator } from '@ioc:Adonis/Core/Validator'
import { RequestContract } from '@ioc:Adonis/Core/Request'

export default class BaseValidator {
  /**
   * Returns all validation rules and messages.
   *
   * YOU MUST OVERRIDE THIS.
   */

  public static async getValidationRules (_request?: RequestContract) : Promise<any> {}

  /**
   * Appends correct parameters for validation schema.
   */
  
  protected static async buildValidationParams (request: RequestContract) {

      return {
        ...await this.getValidationRules(request),
        reporter: validator.reporters.api,
      }
  }

  /**
   * Validates a given request.
``*/
  public static async validate (request: RequestContract) {
    const params = await this.buildValidationParams(request)
    return request.validate(params)
  }
}
