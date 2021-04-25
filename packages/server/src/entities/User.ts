import { 
    Entity, 
    Column, 
    CreateDateColumn, 
    UpdateDateColumn, 
    PrimaryColumn 
} from 'typeorm'

import { v4 as uuid } from 'uuid'

@Entity("users")
class User {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @UpdateDateColumn()
    updated_at: Date;

    @CreateDateColumn()    
    created_at: Date;

    constructor() {
        if(!this.id) this.id = uuid()
    }
}

export { User }