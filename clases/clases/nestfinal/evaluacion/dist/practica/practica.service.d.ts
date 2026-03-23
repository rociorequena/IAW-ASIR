import { Repository } from 'typeorm';
import { Practica } from './entities/practica.entity';
import { CreatePracticaDto } from './dto/create-practica.dto';
import { UpdatePracticaDto } from './dto/update-practica.dto';
export declare class PracticaService {
    private readonly practicaRepository;
    constructor(practicaRepository: Repository<Practica>);
    create(createPracticaDto: CreatePracticaDto): Promise<Practica>;
    findAll(): Promise<Practica[]>;
    findOne(id: number): Promise<Practica | null>;
    update(id: number, updatePracticaDto: UpdatePracticaDto): Promise<Practica | null>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
