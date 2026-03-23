"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlumnoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const alumno_service_1 = require("./alumno.service");
const alumno_controller_1 = require("./alumno.controller");
const alumno_entity_1 = require("./entities/alumno.entity");
const alumno_practica_entity_1 = require("./entities/alumno-practica.entity");
const alumno_examen_entity_1 = require("./entities/alumno-examen.entity");
let AlumnoModule = class AlumnoModule {
};
exports.AlumnoModule = AlumnoModule;
exports.AlumnoModule = AlumnoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([alumno_entity_1.Alumno, alumno_practica_entity_1.AlumnoPractica, alumno_examen_entity_1.AlumnoExamen])],
        controllers: [alumno_controller_1.AlumnoController],
        providers: [alumno_service_1.AlumnoService],
    })
], AlumnoModule);
//# sourceMappingURL=alumno.module.js.map