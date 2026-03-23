import { Alumno } from './alumno.entity';
import { Practica } from '../../practica/entities/practica.entity';
export declare class AlumnoPractica {
    id_alumno: number;
    id_practica: number;
    fecha: string;
    nota: number;
    alumno: Alumno;
    practica: Practica;
}
