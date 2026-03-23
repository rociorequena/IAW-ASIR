"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const alumno_module_1 = require("./alumno/alumno.module");
const profesor_module_1 = require("./profesor/profesor.module");
const practica_module_1 = require("./practica/practica.module");
const examen_module_1 = require("./examen/examen.module");
const alumno_entity_1 = require("./alumno/entities/alumno.entity");
const profesor_entity_1 = require("./profesor/entities/profesor.entity");
const practica_entity_1 = require("./practica/entities/practica.entity");
const examen_teorico_entity_1 = require("./examen/entities/examen-teorico.entity");
const alumno_practica_entity_1 = require("./alumno/entities/alumno-practica.entity");
const alumno_examen_entity_1 = require("./alumno/entities/alumno-examen.entity");
const profesor_practica_entity_1 = require("./profesor/entities/profesor-practica.entity");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: '',
                database: 'evaluacion',
                entities: [
                    alumno_entity_1.Alumno,
                    profesor_entity_1.Profesor,
                    practica_entity_1.Practica,
                    examen_teorico_entity_1.ExamenTeorico,
                    alumno_practica_entity_1.AlumnoPractica,
                    alumno_examen_entity_1.AlumnoExamen,
                    profesor_practica_entity_1.ProfesorPractica,
                ],
                synchronize: true,
            }),
            alumno_module_1.AlumnoModule,
            profesor_module_1.ProfesorModule,
            practica_module_1.PracticaModule,
            examen_module_1.ExamenModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map