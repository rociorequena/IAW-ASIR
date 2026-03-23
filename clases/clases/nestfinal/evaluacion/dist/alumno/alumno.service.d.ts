import { Repository } from 'typeorm';
import { Alumno } from './entities/alumno.entity';
import { AlumnoPractica } from './entities/alumno-practica.entity';
import { AlumnoExamen } from './entities/alumno-examen.entity';
import { CreateAlumnoDto } from './dto/create-alumno.dto';
import { UpdateAlumnoDto } from './dto/update-alumno.dto';
import { AsignarPracticaDto, AsignarExamenDto } from './dto/asignar-relacion.dto';
export declare class AlumnoService {
    private readonly alumnoRepository;
    private readonly alumnoPracticaRepository;
    private readonly alumnoExamenRepository;
    constructor(alumnoRepository: Repository<Alumno>, alumnoPracticaRepository: Repository<AlumnoPractica>, alumnoExamenRepository: Repository<AlumnoExamen>);
    create(createAlumnoDto: CreateAlumnoDto): Promise<Alumno>;
    findAll(): Promise<Alumno[]>;
    findOne(id: number): Promise<Alumno | null>;
    update(id: number, updateAlumnoDto: UpdateAlumnoDto): Promise<Alumno | null>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
    asignarPractica(id_alumno: number, asignarPracticaDto: AsignarPracticaDto): Promise<AlumnoPractica>;
    asignarExamen(id_alumno: number, asignarExamenDto: AsignarExamenDto): Promise<AlumnoExamen>;
    findAllPracticas(): Promise<AlumnoPractica[]>;
    findOnePractica(id_alumno: number, id_practica: number): Promise<AlumnoPractica | null>;
    updatePractica(id_alumno: number, id_practica: number, updateDto: Partial<AsignarPracticaDto>): Promise<AlumnoPractica | null>;
    removePractica(id_alumno: number, id_practica: number): Promise<import("typeorm").DeleteResult>;
    findAllExamenes(): Promise<AlumnoExamen[]>;
    findOneExamen(id_alumno: number, id_examen_teorico: number): Promise<AlumnoExamen | null>;
    updateExamen(id_alumno: number, id_examen_teorico: number, updateDto: Partial<AsignarExamenDto>): Promise<AlumnoExamen | null>;
    removeExamen(id_alumno: number, id_examen_teorico: number): Promise<import("typeorm").DeleteResult>;
}
