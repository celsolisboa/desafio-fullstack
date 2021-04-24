import { 
    Entity, 
    Column, 
    CreateDateColumn, 
    UpdateDateColumn, 
    PrimaryColumn, 
    ManyToOne,
    JoinColumn
} from 'typeorm'

import { User } from './User'

import { v4 as uuid } from 'uuid'

@Entity("courses")
class Course {
    @PrimaryColumn()
    id: string;

    @Column()
    user_id: string;

    @JoinColumn({name: "user_id"})
    @ManyToOne(() => User)
    user: User;

    @Column()
    title: string;

    @Column()
    teachers: string;

    @Column()
    classes: string;

    @UpdateDateColumn()
    updated_at: Date;

    @CreateDateColumn()    
    created_at: Date;

    constructor() {
        if(!this.id) this.id = uuid()
    }
}

export {Course}