'use strict'

const { post } = require('@adonisjs/framework/src/Route/Manager')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
/**
 * Resourceful controller for interacting with cursos
 */
 const Database = use('Database')
const Curso = use('App/Models/Curso')
class CursoController {
  /**
   * Show a list of all cursos.
   * GET cursos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index () {
   const curso = await Database.select('*').from('curso')
    return curso
  }

  /**
   * Render a form to be used for creating a new curso.
   * GET cursos/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   *  
  async create ({ request, response, view }) {
  } */

  /**
   * Create/save a new curso.
   * POST cursos
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request}) {
    const data = request.only(['nome_curso','inicio','fim','fk_sala','fk_professor'])
    const curso = await Curso.create(data)
    return curso
  }

  /**
   * Display a single curso.
   * GET cursos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params}) {
    const curso = await Curso.find(params.id)
    return curso
  }

  /**
   * Render a form to update an existing curso.
   * GET cursos/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
 /*  async edit ({ params, request, response, view }) {
  } */

  /**
   * Update curso details.
   * PUT or PATCH cursos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request}) {
    const curso = await Curso.find(params.id)
    const data = request.only(['nome_curso','inicio','fim','fk_sala','fk_professor'])
    curso.merge(data)
    await curso.save()

    return curso
  }

  /**
   * Delete a curso with id.
   * DELETE cursos/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params}) {
    const curso = await Curso.find(params.id)

    await curso.delete()
  }
}

module.exports = CursoController
