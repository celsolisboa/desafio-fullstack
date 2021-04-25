import { getCustomRepository, Repository } from "typeorm"
import { User } from "../entities/User"
import { UsersRepository } from "../repositories/UsersRepository"

interface IUsersCreate {
    name: string;
    email: string;
    password: string;
}

class UserService {
    private usersRepository: Repository<User>

    constructor() {
        this.usersRepository = getCustomRepository(UsersRepository)
    }

    async create({ name, email, password }: IUsersCreate) { 
        const userAlreadyExists = await this.usersRepository.findOne({ email })

        if(userAlreadyExists){
            throw new Error("User already exists!")
        }

        const users = this.usersRepository.create({
            name,
            email,
            password
        })

        await this.usersRepository.save(users)

        return users
    }

    async findUser(email: any, password: any) {
        if(!email && !password) throw new Error("Error bad request!")

        const user = await this.usersRepository.findOne({ email })

        if(!user) { 
            throw new Error("This user does not exists!")
        }

        if(user.password != password) { 
            throw new Error("Wrong password!")
        }

        return user
    }
}

export { UserService } 