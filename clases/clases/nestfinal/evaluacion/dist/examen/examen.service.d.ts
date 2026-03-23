import { Repository } from 'typeorm';
import { ExamenTeorico } from './entities/examen-teorico.entity';
import { CreateExamenDto } from './dto/create-examen.dto';
import { UpdateExamenDto } from './dto/update-examen.dto';
export declare class ExamenService {
    private readonly examenRepository;
    constructor(examenRepository: Repository<ExamenTeorico>);
    create(createExamenDto: CreateExamenDto): Promise<ExamenTeorico>;
    findAll(): Promise<ExamenTeorico[]>;
    findOne(id: number): Promise<ExamenTeorico | null>;
    update(id: number, updateExamenDto: UpdateExamenDto): Promise<ExamenTeorico | null>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
