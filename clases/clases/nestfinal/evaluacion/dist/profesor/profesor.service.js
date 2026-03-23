"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfesorService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const profesor_entity_1 = require("./entities/profesor.entity");
const profesor_practica_entity_1 = require("./entities/profesor-practica.entity");
let ProfesorService = class ProfesorService {
    profesorRepository;
    profesorPracticaRepository;
    constructor(profesorRepository, profesorPracticaRepository) {
        this.profesorRepository = profesorRepository;
        this.profesorPracticaRepository = profesorPracticaRepository;
    }
    create(createProfesorDto) {
        const profesor = this.profesorRepository.create(createProfesorDto);
        return this.profesorRepository.save(profesor);
    }
    findAll() {
        return this.profesorRepository.find({
            relations: ['examenesDisenados', 'practicasDisenadas', 'practicasDisenadas.practica']
        });
    }
    findOne(id) {
        return this.profesorRepository.findOne({
            where: { id },
            relations: ['examenesDisenados', 'practicasDisenadas', 'practicasDisenadas.practica']
        });
    }
    async update(id, updateProfesorDto) {
        await this.profesorRepository.update(id, updateProfesorDto);
        return this.findOne(id);
    }
    async remove(id) {
        return this.profesorRepository.delete(id);
    }
    findAllPracticas() {
        return this.profesorPracticaRepository.find({ relations: ['profesor', 'practica'] });
    }
    findOnePractica(id_profesor, id_practica) {
        return this.profesorPracticaRepository.findOne({
            where: { id_profesor, id_practica },
            relations: ['profesor', 'practica']
        });
    }
    async asignarPractica(id_profesor, dto) {
        const relacion = this.profesorPracticaRepository.create({
            id_profesor,
            id_practica: dto.id_practica,
            fecha: dto.fecha,
        });
        return this.profesorPracticaRepository.save(relacion);
    }
    async updatePractica(id_profesor, id_practica, dto) {
        await this.profesorPracticaRepository.update({ id_profesor, id_practica }, dto);
        return this.findOnePractica(id_profesor, id_practica);
    }
    async removePractica(id_profesor, id_practica) {
        return this.profesorPracticaRepository.delete({ id_profesor, id_practica });
    }
};
exports.ProfesorService = ProfesorService;
exports.ProfesorService = ProfesorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(profesor_entity_1.Profesor)),
    __param(1, (0, typeorm_1.InjectRepository)(profesor_practica_entity_1.ProfesorPractica)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ProfesorService);
//# sourceMappingURL=profesor.service.js.map