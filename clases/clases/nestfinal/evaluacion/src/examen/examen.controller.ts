import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExamenService } from './examen.service';
import { CreateExamenDto } from './dto/create-examen.dto';
import { UpdateExamenDto } from './dto/update-examen.dto';

// Controlador que gestiona las rutas que empiezan por /examen
@Controller('examen')
export class ExamenController {
  constructor(private readonly examenService: ExamenService) {}

  // Recibe los datos por POST y crea un nuevo examen llamando al servicio
  @Post()
  create(@Body() createExamenDto: CreateExamenDto) {
    return this.examenService.create(createExamenDto);
  }

  // Devuelve la lista de todos los exámenes registrados
  @Get()
  findAll() {
    return this.examenService.findAll();
  }

  // Busca un examen en particular por su ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.examenService.findOne(+id);
  }

  // Actualiza los datos de un examen (como fecha o tipo) usando su ID
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExamenDto: UpdateExamenDto) {
    return this.examenService.update(+id, updateExamenDto);
  }

  // Borra un examen de la base de datos
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.examenService.remove(+id);
  }
}
