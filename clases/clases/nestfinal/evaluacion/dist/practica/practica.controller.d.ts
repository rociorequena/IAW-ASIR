import { PracticaService } from './practica.service';
import { CreatePracticaDto } from './dto/create-practica.dto';
import { UpdatePracticaDto } from './dto/update-practica.dto';
export declare class PracticaController {
    private readonly practicaService;
    constructor(practicaService: PracticaService);
    create(createPracticaDto: CreatePracticaDto): Promise<import("./entities/practica.entity").Practica>;
    findAll(): Promise<import("./entities/practica.entity").Practica[]>;
    findOne(id: string): Promise<import("./entities/practica.entity").Practica | null>;
    update(id: string, updatePracticaDto: UpdatePracticaDto): Promise<import("./entities/practica.entity").Practica | null>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
