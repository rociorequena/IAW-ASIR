import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProfesorService } from './profesor.service';
import { CreateProfesorDto } from './dto/create-profesor.dto';
import { UpdateProfesorDto } from './dto/update-profesor.dto';


@Controller('profesor')
export class ProfesorController {
  constructor(private readonly profesorService: ProfesorService) {}

  // --- Endpoints CRUD para la tabla principal Profesor ---
  
  // POST /profesor: Crea un profesor nuevo
  @Post()
  create(@Body() createProfesorDto: CreateProfesorDto) {
    return this.profesorService.create(createProfesorDto);
  }

  // GET /profesor: Muestra la lista de todos los profesores
  @Get()
  findAll() {
    return this.profesorService.findAll();
  }

  // GET /profesor/:id: Muestra los datos de un profesor en concreto
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.profesorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProfesorDto: UpdateProfesorDto) {
    return this.profesorService.update(+id, updateProfesorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.profesorService.remove(+id);
  }

  // --- Endpoints CRUD para la relación intermedia ProfesorPractica ---
  
  // GET /profesor/practica/all
  // Función para listar todas las ocurrencias. Devuelve la tabla con los 
  // identificadores de cada profesor y el ID de la práctica que ha diseñado.
  @Get('practica/all')
  findAllPracticas() {
    return this.profesorService.findAllPracticas();
  }

  // GET /profesor/:id/practica/:id_practica
  // Busca una asignación en específico pasando el id de profesor y de práctica.
  // Nos devuelve un objeto con esa única relación si existe.
  @Get(':id/practica/:id_practica')
  findOnePractica(@Param('id') id: string, @Param('id_practica') id_practica: string) {
    return this.profesorService.findOnePractica(+id, +id_practica);
  }

  // POST /profesor/:id/practica
  // Asignarle a un profesor la autoría o diseño de una práctica. Al llamar a este POST
  // enviamos un Body JSON con los datos (como la fecha de creación) y añade una fila 
  // intermedia a la tabla ProfesorPractica relacionando ambas entidades.
  @Post(':id/practica')
  asignarPractica(@Param('id') id: string, @Body() asignarPracticaDto: any) {
    return this.profesorService.asignarPractica(+id, asignarPracticaDto);
  }

  // PATCH /profesor/:id/practica/:id_practica
  // Modificar algún atributo de la relación intermedia (como si en lugar de enviar 
  // el POST inicial queremos modificar la "fecha" posterior) sin tocar la tabla
  // Profesor ni la tabla Practica.
  @Patch(':id/practica/:id_practica')
  updatePractica(@Param('id') id: string, @Param('id_practica') id_practica: string, @Body() updatePracticaDto: any) {
    return this.profesorService.updatePractica(+id, +id_practica, updatePracticaDto);
  }

  // DELETE /profesor/:id/practica/:id_practica
  // Desvincula a ese profesor de esa práctica en concreto borrando la relación en la base de datos.
  @Delete(':id/practica/:id_practica')
  removePractica(@Param('id') id: string, @Param('id_practica') id_practica: string) {
    return this.profesorService.removePractica(+id, +id_practica);
  }
}
