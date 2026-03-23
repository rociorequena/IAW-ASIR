import { AlumnoPractica } from '../../alumno/entities/alumno-practica.entity';
import { ProfesorPractica } from '../../profesor/entities/profesor-practica.entity';
export declare class Practica {
    id: number;
    titulo: string;
    dificultad: string;
    alumnosRealizan: AlumnoPractica[];
    profesoresDisenan: ProfesorPractica[];
}
