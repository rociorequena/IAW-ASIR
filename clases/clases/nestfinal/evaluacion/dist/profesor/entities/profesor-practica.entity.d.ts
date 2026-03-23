import { Profesor } from './profesor.entity';
import { Practica } from '../../practica/entities/practica.entity';
export declare class ProfesorPractica {
    id_profesor: number;
    id_practica: number;
    fecha: string;
    profesor: Profesor;
    practica: Practica;
}
