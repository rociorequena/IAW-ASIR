import { AlumnoPractica } from './alumno-practica.entity';
import { AlumnoExamen } from './alumno-examen.entity';
export declare class Alumno {
    id: number;
    nif: string;
    grupo: string;
    nombre: string;
    apellido1: string;
    apellido2: string;
    practicasRealizadas: AlumnoPractica[];
    examenesHechos: AlumnoExamen[];
}
