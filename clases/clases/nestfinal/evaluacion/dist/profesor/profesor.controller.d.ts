import { ProfesorService } from './profesor.service';
import { CreateProfesorDto } from './dto/create-profesor.dto';
import { UpdateProfesorDto } from './dto/update-profesor.dto';
export declare class ProfesorController {
    private readonly profesorService;
    constructor(profesorService: ProfesorService);
    create(createProfesorDto: CreateProfesorDto): Promise<import("./entities/profesor.entity").Profesor>;
    findAll(): Promise<import("./entities/profesor.entity").Profesor[]>;
    findOne(id: string): Promise<import("./entities/profesor.entity").Profesor | null>;
    update(id: string, updateProfesorDto: UpdateProfesorDto): Promise<import("./entities/profesor.entity").Profesor | null>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
    findAllPracticas(): Promise<import("./entities/profesor-practica.entity").ProfesorPractica[]>;
    findOnePractica(id: string, id_practica: string): Promise<import("./entities/profesor-practica.entity").ProfesorPractica | null>;
    asignarPractica(id: string, asignarPracticaDto: any): Promise<import("./entities/profesor-practica.entity").ProfesorPractica>;
    updatePractica(id: string, id_practica: string, updatePracticaDto: any): Promise<import("./entities/profesor-practica.entity").ProfesorPractica | null>;
    removePractica(id: string, id_practica: string): Promise<import("typeorm").DeleteResult>;
}
