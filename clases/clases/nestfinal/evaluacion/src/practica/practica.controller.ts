import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PracticaService } from './practica.service';
import { CreatePracticaDto } from './dto/create-practica.dto';
import { UpdatePracticaDto } from './dto/update-practica.dto';

// Este controlador maneja las peticiones HTTP que llegan a la ruta /practica
@Controller('practica')
export class PracticaController {
  constructor(private readonly practicaService: PracticaService) { }

  // POST /practica: Crea una nueva práctica en la base de datos
  @Post()
  create(@Body() createPracticaDto: CreatePracticaDto) {
    return this.practicaService.create(createPracticaDto);
  }

  // GET /practica: Lista todas las prácticas disponibles
  @Get()
  findAll() {
    return this.practicaService.findAll();
  }

  // GET /practica/:id: Muestra los detalles de una práctica concreta
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.practicaService.findOne(+id);
  }

  // PATCH /practica/:id: Actualiza la información de una práctica (como su título)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePracticaDto: UpdatePracticaDto) {
    return this.practicaService.update(+id, updatePracticaDto);
  }

  // DELETE /practica/:id: Elimina la práctica de la base de datos
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.practicaService.remove(+id);
  }
}
