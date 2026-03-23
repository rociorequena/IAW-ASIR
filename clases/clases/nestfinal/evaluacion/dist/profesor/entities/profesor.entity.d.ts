import { ExamenTeorico } from '../../examen/entities/examen-teorico.entity';
import { ProfesorPractica } from './profesor-practica.entity';
export declare class Profesor {
    id: number;
    nif: string;
    nombre: string;
    apellido1: string;
    apellido2: string;
    examenesDisenados: ExamenTeorico[];
    practicasDisenadas: ProfesorPractica[];
}
