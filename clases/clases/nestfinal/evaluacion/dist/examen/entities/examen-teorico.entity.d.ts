import { Profesor } from '../../profesor/entities/profesor.entity';
import { AlumnoExamen } from '../../alumno/entities/alumno-examen.entity';
export declare class ExamenTeorico {
    id: number;
    titulo: string;
    numero_preguntas: number;
    fecha: string;
    profesor: Profesor;
    alumnosQueHacen: AlumnoExamen[];
}
