import { schema } from '@ioc:Adonis/Core/Validator'
import BaseValidator from 'App/Validations/BaseValidator'

export default class CourseValidator extends BaseValidator {

  public static async getValidationRules () {
    return {
      schema: schema.create({
        name: schema.string({}),
        class_room: schema.string(),
        beginning: schema.string({}),
        end: schema.string({}),
        teacher_id: schema.string({}),
      }),
      messages: {
        'name.required': 'Nome do curso é obrigatório.',
        'class_room.required': 'Número da sala é obrigatório.',
        'beginning.required': 'Início do curso é obrigatório.',
        'end.required': 'Fim do curso é obrigatório.',
        'teacher_id.required': 'Nome do professor é obrigatório.',
      },
    }
  }
}
