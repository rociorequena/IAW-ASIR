"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateExamenDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_examen_dto_1 = require("./create-examen.dto");
class UpdateExamenDto extends (0, mapped_types_1.PartialType)(create_examen_dto_1.CreateExamenDto) {
}
exports.UpdateExamenDto = UpdateExamenDto;
//# sourceMappingURL=update-examen.dto.js.map