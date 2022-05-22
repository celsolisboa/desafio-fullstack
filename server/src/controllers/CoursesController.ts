import { PrismaClient, Courses } from "@prisma/client"

class CoursesController {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }
    async create(data: Omit<Courses, 'id'>) {
        try {
           return this.prisma.courses.create({
                data: {
                    ...data,
                }
            })
        } catch(e) {
            return e
        }
    }
}

export default CoursesController;