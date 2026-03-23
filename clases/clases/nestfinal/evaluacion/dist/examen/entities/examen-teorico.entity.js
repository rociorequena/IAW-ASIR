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
exports.ExamenTeorico = void 0;
const typeorm_1 = require("typeorm");
const profesor_entity_1 = require("../../profesor/entities/profesor.entity");
const alumno_examen_entity_1 = require("../../alumno/entities/alumno-examen.entity");
let ExamenTeorico = class ExamenTeorico {
    id;
    titulo;
    numero_preguntas;
    fecha;
    profesor;
    alumnosQueHacen;
};
exports.ExamenTeorico = ExamenTeorico;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ExamenTeorico.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ExamenTeorico.prototype, "titulo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ExamenTeorico.prototype, "numero_preguntas", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", String)
], ExamenTeorico.prototype, "fecha", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => profesor_entity_1.Profesor, profesor => profesor.examenesDisenados),
    (0, typeorm_1.JoinColumn)({ name: 'id_profesor' }),
    __metadata("design:type", profesor_entity_1.Profesor)
], ExamenTeorico.prototype, "profesor", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => alumno_examen_entity_1.AlumnoExamen, alumnoExamen => alumnoExamen.examenTeorico),
    __metadata("design:type", Array)
], ExamenTeorico.prototype, "alumnosQueHacen", void 0);
exports.ExamenTeorico = ExamenTeorico = __decorate([
    (0, typeorm_1.Entity)('examen_teorico')
], ExamenTeorico);
//# sourceMappingURL=examen-teorico.entity.js.map