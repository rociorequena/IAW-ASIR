import { ExamenService } from './examen.service';
import { CreateExamenDto } from './dto/create-examen.dto';
import { UpdateExamenDto } from './dto/update-examen.dto';
export declare class ExamenController {
    private readonly examenService;
    constructor(examenService: ExamenService);
    create(createExamenDto: CreateExamenDto): Promise<import("./entities/examen-teorico.entity").ExamenTeorico>;
    findAll(): Promise<import("./entities/examen-teorico.entity").ExamenTeorico[]>;
    findOne(id: string): Promise<import("./entities/examen-teorico.entity").ExamenTeorico | null>;
    update(id: string, updateExamenDto: UpdateExamenDto): Promise<import("./entities/examen-teorico.entity").ExamenTeorico | null>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
