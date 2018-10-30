import { Professor } from './professor.model';
import { Sala } from './sala.model';
import { Guid } from 'guid-typescript'
export class Curso {
    id: Guid;
    
    nome: string;

    professores: Array<Professor>;

    salas: Array<Sala>;

    inicio: string;

    fim: string

    constructor(curso: any) {
        this.id = Guid.create();
        this.nome = curso.courseName;
        this.professores = curso.teachers;
        this.salas = curso.rooms;
        this.inicio = curso.startDate;
        this.fim = curso.endDate;
    }
}