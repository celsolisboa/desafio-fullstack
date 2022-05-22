import { PrismaClient, Teachers } from "@prisma/client"

class TeacherController {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }
    async create(data: Omit<Teachers, 'id'>) {
        try {
           return this.prisma.teachers.create({
                data: {
                    ...data,
                }
            })
        } catch(e) {
            return e
        }
    }
}

export default TeacherController;