import { Router } from 'express'
import { UserController } from './controllers/UserController'
import { CourseController } from './controllers/CourseController'

const routes = Router()

const userController = new UserController()
const courseController = new CourseController()

routes.post("/users", userController.create)
routes.get("/users", userController.findUserByEmailAndPassword)
routes.post("/courses", courseController.create)
routes.get("/courses/:id", courseController.findByUser)

export { routes }