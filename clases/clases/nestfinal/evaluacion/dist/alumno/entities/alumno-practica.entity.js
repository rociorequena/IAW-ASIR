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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlumnoPractica = void 0;
const typeorm_1 = require("typeorm");
const alumno_entity_1 = require("./alumno.entity");
const practica_entity_1 = require("../../practica/entities/practica.entity");
let AlumnoPractica = class AlumnoPractica {
    id_alumno;
    id_practica;
    fecha;
    nota;
    alumno;
    practica;
};
exports.AlumnoPractica = AlumnoPractica;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], AlumnoPractica.prototype, "id_alumno", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], AlumnoPractica.prototype, "id_practica", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", String)
], AlumnoPractica.prototype, "fecha", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'float' }),
    __metadata("design:type", Number)
], AlumnoPractica.prototype, "nota", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => alumno_entity_1.Alumno, alumno => alumno.practicasRealizadas),
    (0, typeorm_1.JoinColumn)({ name: 'id_alumno' }),
    __metadata("design:type", alumno_entity_1.Alumno)
], AlumnoPractica.prototype, "alumno", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => practica_entity_1.Practica, practica => practica.alumnosRealizan),
    (0, typeorm_1.JoinColumn)({ name: 'id_practica' }),
    __metadata("design:type", practica_entity_1.Practica)
], AlumnoPractica.prototype, "practica", void 0);
exports.AlumnoPractica = AlumnoPractica = __decorate([
    (0, typeorm_1.Entity)('alumno_realiza_practica')
], AlumnoPractica);
//# sourceMappingURL=alumno-practica.entity.js.map