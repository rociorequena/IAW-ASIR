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
exports.PracticaController = void 0;
const common_1 = require("@nestjs/common");
const practica_service_1 = require("./practica.service");
const create_practica_dto_1 = require("./dto/create-practica.dto");
const update_practica_dto_1 = require("./dto/update-practica.dto");
let PracticaController = class PracticaController {
    practicaService;
    constructor(practicaService) {
        this.practicaService = practicaService;
    }
    create(createPracticaDto) {
        return this.practicaService.create(createPracticaDto);
    }
    findAll() {
        return this.practicaService.findAll();
    }
    findOne(id) {
        return this.practicaService.findOne(+id);
    }
    update(id, updatePracticaDto) {
        return this.practicaService.update(+id, updatePracticaDto);
    }
    remove(id) {
        return this.practicaService.remove(+id);
    }
};
exports.PracticaController = PracticaController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_practica_dto_1.CreatePracticaDto]),
    __metadata("design:returntype", void 0)
], PracticaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PracticaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PracticaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_practica_dto_1.UpdatePracticaDto]),
    __metadata("design:returntype", void 0)
], PracticaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PracticaController.prototype, "remove", null);
exports.PracticaController = PracticaController = __decorate([
    (0, common_1.Controller)('practica'),
    __metadata("design:paramtypes", [practica_service_1.PracticaService])
], PracticaController);
//# sourceMappingURL=practica.controller.js.map