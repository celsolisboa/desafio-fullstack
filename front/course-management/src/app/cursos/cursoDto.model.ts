import { Sala } from "../comum/models/sala.model";
import { Professor } from "../comum/models/professor.model";

export class CursoDto {

    constructor(public id: string,
        public nome: string,
        public horaInicio: string,
        public horaFim: string,
        public idSalas: number[],
        public idProfessores: number[]
    ) { }

}