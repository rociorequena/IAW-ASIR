import { AlumnoService } from './alumno.service';
import { CreateAlumnoDto } from './dto/create-alumno.dto';
import { UpdateAlumnoDto } from './dto/update-alumno.dto';
export declare class AlumnoController {
    private readonly alumnoService;
    constructor(alumnoService: AlumnoService);
    create(createAlumnoDto: CreateAlumnoDto): Promise<import("./entities/alumno.entity").Alumno>;
    findAll(): Promise<import("./entities/alumno.entity").Alumno[]>;
    findOne(id: string): Promise<import("./entities/alumno.entity").Alumno | null>;
    update(id: string, updateAlumnoDto: UpdateAlumnoDto): Promise<import("./entities/alumno.entity").Alumno | null>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
    asignarPractica(id: string, asignarPracticaDto: any): Promise<import("./entities/alumno-practica.entity").AlumnoPractica>;
    asignarExamen(id: string, asignarExamenDto: any): Promise<import("./entities/alumno-examen.entity").AlumnoExamen>;
    findAllPracticas(): Promise<import("./entities/alumno-practica.entity").AlumnoPractica[]>;
    findOnePractica(id: string, id_practica: string): Promise<import("./entities/alumno-practica.entity").AlumnoPractica | null>;
    updatePractica(id: string, id_practica: string, updatePracticaDto: any): Promise<import("./entities/alumno-practica.entity").AlumnoPractica | null>;
    removePractica(id: string, id_practica: string): Promise<import("typeorm").DeleteResult>;
    findAllExamenes(): Promise<import("./entities/alumno-examen.entity").AlumnoExamen[]>;
    findOneExamen(id: string, id_examen: string): Promise<import("./entities/alumno-examen.entity").AlumnoExamen | null>;
    updateExamen(id: string, id_examen: string, updateExamenDto: any): Promise<import("./entities/alumno-examen.entity").AlumnoExamen | null>;
    removeExamen(id: string, id_examen: string): Promise<import("typeorm").DeleteResult>;
}
