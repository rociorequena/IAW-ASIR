"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePracticaDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_practica_dto_1 = require("./create-practica.dto");
class UpdatePracticaDto extends (0, mapped_types_1.PartialType)(create_practica_dto_1.CreatePracticaDto) {
}
exports.UpdatePracticaDto = UpdatePracticaDto;
//# sourceMappingURL=update-practica.dto.js.map