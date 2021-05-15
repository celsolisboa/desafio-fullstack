const coursesActions = require('./../../app/courses/')

const accounts = {
  getOne: async (request, response) => {
    try {
      const [course] = await coursesActions.search(request.params.id)
      return response.status(200).json(course)
    } catch (error) {
      return response.status(422).send(error)
    }
  },
  get: async (request, response) => {
    try {
      const courses = await coursesActions.search()
      return response.status(200).json(courses)
    } catch (error) {
      return response.status(422).send(error)
    }
  },
  post: async (request, response) => {
    try {
      const [course] = await coursesActions.create(request.body)
      return response.status(200).json(course)
    } catch (error) {
      return response.status(422).send(error)
    }
  },
  put: async (request, response) => {
    try {
      const [course] = await coursesActions.update(request.params.id, request.body)
      return response.status(200).json(course)
    } catch (error) {
      return response.status(422).send(error)
    }
  },
  delete: async (request, response) => {
    try {
      await coursesActions.remove(request.params.id)
      return response.status(202).json({})
    } catch (error) {
      return response.status(422).send(error)
    }
  }
}

module.exports = accounts
