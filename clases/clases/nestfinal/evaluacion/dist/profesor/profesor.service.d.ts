import { Repository } from 'typeorm';
import { Profesor } from './entities/profesor.entity';
import { ProfesorPractica } from './entities/profesor-practica.entity';
import { CreateProfesorDto } from './dto/create-profesor.dto';
import { UpdateProfesorDto } from './dto/update-profesor.dto';
export declare class ProfesorService {
    private readonly profesorRepository;
    private readonly profesorPracticaRepository;
    constructor(profesorRepository: Repository<Profesor>, profesorPracticaRepository: Repository<ProfesorPractica>);
    create(createProfesorDto: CreateProfesorDto): Promise<Profesor>;
    findAll(): Promise<Profesor[]>;
    findOne(id: number): Promise<Profesor | null>;
    update(id: number, updateProfesorDto: UpdateProfesorDto): Promise<Profesor | null>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
    findAllPracticas(): Promise<ProfesorPractica[]>;
    findOnePractica(id_profesor: number, id_practica: number): Promise<ProfesorPractica | null>;
    asignarPractica(id_profesor: number, dto: any): Promise<ProfesorPractica>;
    updatePractica(id_profesor: number, id_practica: number, dto: any): Promise<ProfesorPractica | null>;
    removePractica(id_profesor: number, id_practica: number): Promise<import("typeorm").DeleteResult>;
}
