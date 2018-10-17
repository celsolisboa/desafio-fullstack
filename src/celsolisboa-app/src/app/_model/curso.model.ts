import { Professor } from './professor.model';
import { Sala } from './sala.model';

export class Curso {
    nome: string;
    professores: Array<Professor>;
    salas: Array<Sala>;
    inicio: string;
    fim: string
}