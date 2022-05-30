import { PrismaClient, Classroom } from "@prisma/client"

class ClassroomController {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    async findAll() {
        try {
            return await this.prisma.classroom.findMany({
                select: {
                    id: true,
                    room_number: true,
                    start_time: true,
                    end_time: true,
                    courses: {
                        select: {
                            name: true,
                        },
                    },
                    teacher: true
                }
            })
        } catch (e) {
            return e
        }
    }
    async create(data: Omit<Classroom, 'id'>) {
        try {
           return this.prisma.classroom.create({
                data: {
                    ...data,
                }
            })
        } catch(e) {
            return e
        }
    }
}

export default ClassroomController;