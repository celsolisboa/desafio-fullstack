import { Sala } from "../comum/models/sala.model";
import { Professor } from "../comum/models/professor.model";

export class Curso {

    constructor(public id: number = undefined,
        public nome: string = undefined,
        public horaInicio: string = undefined,
        public horaFim: string = undefined,
        public Salas: Array<Sala> = [],
        public Professores: Array<Professor> = []
    ) { }


    public teste(){
        return "teste2"
    }

}