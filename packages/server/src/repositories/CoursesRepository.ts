import { EntityRepository, Repository } from "typeorm"

import { Course } from "../entities/Course"

@EntityRepository(Course)
class CoursesRepository extends Repository<Course> {}

export { CoursesRepository }