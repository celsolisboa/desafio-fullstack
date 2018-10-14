import { IProfessor } from './iprofessor.interface';
import { ISala } from './isala.interface';

export interface ICurso {
    nome: string,
    professores: Array<IProfessor>,
    salas: Array<ISala>,
    inicio: Date,
    fim: Date
}