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
exports.AlumnoController = void 0;
const common_1 = require("@nestjs/common");
const alumno_service_1 = require("./alumno.service");
const create_alumno_dto_1 = require("./dto/create-alumno.dto");
const update_alumno_dto_1 = require("./dto/update-alumno.dto");
let AlumnoController = class AlumnoController {
    alumnoService;
    constructor(alumnoService) {
        this.alumnoService = alumnoService;
    }
    create(createAlumnoDto) {
        return this.alumnoService.create(createAlumnoDto);
    }
    findAll() {
        return this.alumnoService.findAll();
    }
    findOne(id) {
        return this.alumnoService.findOne(+id);
    }
    update(id, updateAlumnoDto) {
        return this.alumnoService.update(+id, updateAlumnoDto);
    }
    remove(id) {
        return this.alumnoService.remove(+id);
    }
    asignarPractica(id, asignarPracticaDto) {
        return this.alumnoService.asignarPractica(+id, asignarPracticaDto);
    }
    asignarExamen(id, asignarExamenDto) {
        return this.alumnoService.asignarExamen(+id, asignarExamenDto);
    }
    findAllPracticas() {
        return this.alumnoService.findAllPracticas();
    }
    findOnePractica(id, id_practica) {
        return this.alumnoService.findOnePractica(+id, +id_practica);
    }
    updatePractica(id, id_practica, updatePracticaDto) {
        return this.alumnoService.updatePractica(+id, +id_practica, updatePracticaDto);
    }
    removePractica(id, id_practica) {
        return this.alumnoService.removePractica(+id, +id_practica);
    }
    findAllExamenes() {
        return this.alumnoService.findAllExamenes();
    }
    findOneExamen(id, id_examen) {
        return this.alumnoService.findOneExamen(+id, +id_examen);
    }
    updateExamen(id, id_examen, updateExamenDto) {
        return this.alumnoService.updateExamen(+id, +id_examen, updateExamenDto);
    }
    removeExamen(id, id_examen) {
        return this.alumnoService.removeExamen(+id, +id_examen);
    }
};
exports.AlumnoController = AlumnoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_alumno_dto_1.CreateAlumnoDto]),
    __metadata("design:returntype", void 0)
], AlumnoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AlumnoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AlumnoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_alumno_dto_1.UpdateAlumnoDto]),
    __metadata("design:returntype", void 0)
], AlumnoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AlumnoController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)(':id/practica'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], AlumnoController.prototype, "asignarPractica", null);
__decorate([
    (0, common_1.Post)(':id/examen'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], AlumnoController.prototype, "asignarExamen", null);
__decorate([
    (0, common_1.Get)('practica/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AlumnoController.prototype, "findAllPracticas", null);
__decorate([
    (0, common_1.Get)(':id/practica/:id_practica'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('id_practica')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], AlumnoController.prototype, "findOnePractica", null);
__decorate([
    (0, common_1.Patch)(':id/practica/:id_practica'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('id_practica')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], AlumnoController.prototype, "updatePractica", null);
__decorate([
    (0, common_1.Delete)(':id/practica/:id_practica'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('id_practica')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], AlumnoController.prototype, "removePractica", null);
__decorate([
    (0, common_1.Get)('examen/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AlumnoController.prototype, "findAllExamenes", null);
__decorate([
    (0, common_1.Get)(':id/examen/:id_examen'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('id_examen')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], AlumnoController.prototype, "findOneExamen", null);
__decorate([
    (0, common_1.Patch)(':id/examen/:id_examen'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('id_examen')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", void 0)
], AlumnoController.prototype, "updateExamen", null);
__decorate([
    (0, common_1.Delete)(':id/examen/:id_examen'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('id_examen')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], AlumnoController.prototype, "removeExamen", null);
exports.AlumnoController = AlumnoController = __decorate([
    (0, common_1.Controller)('alumno'),
    __metadata("design:paramtypes", [alumno_service_1.AlumnoService])
], AlumnoController);
//# sourceMappingURL=alumno.controller.js.map