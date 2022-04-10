import BaseModel from './BaseModels'
import { column } from '@ioc:Adonis/Lucid/Orm'

export interface CourseSchema {
    id?: string 
    name: string
    beginning: string
    end: string
    class_room: string
    teacher_id: string
}

export default class Course extends BaseModel {
    public static table = 'courses'

    @column()
    public name: string

    @column()
    public class_room: string

    @column()
    public beginning: string

    @column()
    public end: string

    @column()
    public teacher_id: string
}