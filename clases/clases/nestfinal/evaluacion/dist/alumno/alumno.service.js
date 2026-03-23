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
exports.AlumnoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const alumno_entity_1 = require("./entities/alumno.entity");
const alumno_practica_entity_1 = require("./entities/alumno-practica.entity");
const alumno_examen_entity_1 = require("./entities/alumno-examen.entity");
let AlumnoService = class AlumnoService {
    alumnoRepository;
    alumnoPracticaRepository;
    alumnoExamenRepository;
    constructor(alumnoRepository, alumnoPracticaRepository, alumnoExamenRepository) {
        this.alumnoRepository = alumnoRepository;
        this.alumnoPracticaRepository = alumnoPracticaRepository;
        this.alumnoExamenRepository = alumnoExamenRepository;
    }
    create(createAlumnoDto) {
        const alumno = this.alumnoRepository.create(createAlumnoDto);
        return this.alumnoRepository.save(alumno);
    }
    findAll() {
        return this.alumnoRepository.find({
            relations: ['practicasRealizadas', 'practicasRealizadas.practica', 'examenesHechos', 'examenesHechos.examenTeorico']
        });
    }
    findOne(id) {
        return this.alumnoRepository.findOne({
            where: { id },
            relations: ['practicasRealizadas', 'practicasRealizadas.practica', 'examenesHechos', 'examenesHechos.examenTeorico']
        });
    }
    async update(id, updateAlumnoDto) {
        await this.alumnoRepository.update(id, updateAlumnoDto);
        return this.findOne(id);
    }
    async remove(id) {
        return this.alumnoRepository.delete(id);
    }
    async asignarPractica(id_alumno, asignarPracticaDto) {
        const relacion = this.alumnoPracticaRepository.create({
            id_alumno,
            id_practica: asignarPracticaDto.id_practica,
            fecha: asignarPracticaDto.fecha,
            nota: asignarPracticaDto.nota,
        });
        return this.alumnoPracticaRepository.save(relacion);
    }
    async asignarExamen(id_alumno, asignarExamenDto) {
        const relacion = this.alumnoExamenRepository.create({
            id_alumno,
            id_examen_teorico: asignarExamenDto.id_examen_teorico,
            nota: asignarExamenDto.nota,
        });
        return this.alumnoExamenRepository.save(relacion);
    }
    findAllPracticas() {
        return this.alumnoPracticaRepository.find({ relations: ['alumno', 'practica'] });
    }
    findOnePractica(id_alumno, id_practica) {
        return this.alumnoPracticaRepository.findOne({
            where: { id_alumno, id_practica },
            relations: ['alumno', 'practica']
        });
    }
    async updatePractica(id_alumno, id_practica, updateDto) {
        await this.alumnoPracticaRepository.update({ id_alumno, id_practica }, updateDto);
        return this.findOnePractica(id_alumno, id_practica);
    }
    async removePractica(id_alumno, id_practica) {
        return this.alumnoPracticaRepository.delete({ id_alumno, id_practica });
    }
    findAllExamenes() {
        return this.alumnoExamenRepository.find({ relations: ['alumno', 'examenTeorico'] });
    }
    findOneExamen(id_alumno, id_examen_teorico) {
        return this.alumnoExamenRepository.findOne({
            where: { id_alumno, id_examen_teorico },
            relations: ['alumno', 'examenTeorico']
        });
    }
    async updateExamen(id_alumno, id_examen_teorico, updateDto) {
        await this.alumnoExamenRepository.update({ id_alumno, id_examen_teorico }, updateDto);
        return this.findOneExamen(id_alumno, id_examen_teorico);
    }
    async removeExamen(id_alumno, id_examen_teorico) {
        return this.alumnoExamenRepository.delete({ id_alumno, id_examen_teorico });
    }
};
exports.AlumnoService = AlumnoService;
exports.AlumnoService = AlumnoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(alumno_entity_1.Alumno)),
    __param(1, (0, typeorm_1.InjectRepository)(alumno_practica_entity_1.AlumnoPractica)),
    __param(2, (0, typeorm_1.InjectRepository)(alumno_examen_entity_1.AlumnoExamen)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], AlumnoService);
//# sourceMappingURL=alumno.service.js.map