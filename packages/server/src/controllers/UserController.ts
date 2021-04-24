import { Request, Response } from 'express'
import { UserService } from '../services/UserService'

class UserController {
    async create(req: Request, res: Response): Promise<Response> {
        const { name, email, password } = req.body

        const userService = new UserService()

        try {
            const users = await userService.create({ name, email, password })

            return res.json(users)
        } catch (err) {
            return res.status(400).json({
                message: err.message,
            })
        }
    }

    async findUserByEmailAndPassword(req: Request, res: Response): Promise<Response> {
        const { email, password } = req.query

        const userService = new UserService()

        try {
            const user = await userService.findUser(email, password)

            return res.json(user)
        } catch (err) {
            return res.status(400).json({
                message: err.message,
            })
        }
    }
}

export { UserController }