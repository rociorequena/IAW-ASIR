import { Alumno } from './alumno.entity';
import { ExamenTeorico } from '../../examen/entities/examen-teorico.entity';
export declare class AlumnoExamen {
    id_alumno: number;
    id_examen_teorico: number;
    nota: number;
    alumno: Alumno;
    examenTeorico: ExamenTeorico;
}
