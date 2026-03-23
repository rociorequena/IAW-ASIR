import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AlumnoService } from './alumno.service';
import { CreateAlumnoDto } from './dto/create-alumno.dto';
import { UpdateAlumnoDto } from './dto/update-alumno.dto';

@Controller('alumno')
export class AlumnoController {
  constructor(private readonly alumnoService: AlumnoService) { }

  // --- Endpoints principales de la entidad Alumno ---
  
  // Este método recibe un POST en /alumno con los datos del alumno (nombre, apellidos)
  // Llama al servicio para guardar ese alumno en la base de datos principal de Alumno.
  @Post()
  create(@Body() createAlumnoDto: CreateAlumnoDto) {
    return this.alumnoService.create(createAlumnoDto);
  }

  // Cuando hacemos un GET en /alumno, esta función devuelve una lista de TODOS
  // los alumnos de la base de datos junto con las prácticas y exámenes que han hecho.
  @Get()
  findAll() {
    return this.alumnoService.findAll();
  }

  // Un GET en /alumno/:id busca y devuelve un único alumno según el parámetro :id que le pasemos.
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.alumnoService.findOne(+id);
  }

  // Actualiza los datos principales de un alumno
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAlumnoDto: UpdateAlumnoDto) {
    return this.alumnoService.update(+id, updateAlumnoDto);
  }

  // Elimina a un alumno de la base de datos
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.alumnoService.remove(+id);
  }

  // --- Endpoints para crear las relaciones N:N (Suministra) ---
  
  // Este POST en /alumno/:id/practica se utiliza para crear la relación en la tabla intermedia.
  // Es decir, guarda en la base de datos que el alumno con 'id' ha entregado una práctica
  // con su respectiva nota y fecha.
  @Post(':id/practica')
  asignarPractica(@Param('id') id: string, @Body() asignarPracticaDto: any) {
    return this.alumnoService.asignarPractica(+id, asignarPracticaDto);
  }

  // Igual que la práctica, este método asocia o "inscribe" a un alumno a un examen y le
  // guarda la nota correspondiente en la tabla intermedia AlumnoExamen.
  @Post(':id/examen')
  asignarExamen(@Param('id') id: string, @Body() asignarExamenDto: any) {
    return this.alumnoService.asignarExamen(+id, asignarExamenDto);
  }

  // --- Endpoints CRUD para la relación AlumnoPractica ---
  
  // Devuelve TODOS los registros de la tabla intermedia alumno_realiza_practica.
  @Get('practica/all')
  findAllPracticas() {
    return this.alumnoService.findAllPracticas();
  }

  // Busca los datos en la tabla intermedia de un alumno particular para una práctica en particular.
  @Get(':id/practica/:id_practica')
  findOnePractica(@Param('id') id: string, @Param('id_practica') id_practica: string) {
    return this.alumnoService.findOnePractica(+id, +id_practica);
  }

  // Permite modificar un atributo de la relación (como la nota recibida por el alumno en esa práctica).
  @Patch(':id/practica/:id_practica')
  updatePractica(@Param('id') id: string, @Param('id_practica') id_practica: string, @Body() updatePracticaDto: any) {
    return this.alumnoService.updatePractica(+id, +id_practica, updatePracticaDto);
  }

  // Borra la relación. Desvincula la práctica de ese alumno borrando la fila de la tabla intermedia.
  @Delete(':id/practica/:id_practica')
  removePractica(@Param('id') id: string, @Param('id_practica') id_practica: string) {
    return this.alumnoService.removePractica(+id, +id_practica);
  }

  // --- Endpoints CRUD para la relación AlumnoExamen ---
  
  // Lee de la base de datos una lista con todos los exámenes que han hecho los alumnos.
  @Get('examen/all')
  findAllExamenes() {
    return this.alumnoService.findAllExamenes();
  }

  // Devuelve el registro de un alumno en un examen concreto (con su nota).
  @Get(':id/examen/:id_examen')
  findOneExamen(@Param('id') id: string, @Param('id_examen') id_examen: string) {
    return this.alumnoService.findOneExamen(+id, +id_examen);
  }

  // Cambia la nota obtenida por el alumno en ese examen sin tocar los datos propios del alumno.
  @Patch(':id/examen/:id_examen')
  updateExamen(@Param('id') id: string, @Param('id_examen') id_examen: string, @Body() updateExamenDto: any) {
    return this.alumnoService.updateExamen(+id, +id_examen, updateExamenDto);
  }

  // Elimina la relación (por ejemplo, si nos hemos equivocado al asignarle el examen).
  @Delete(':id/examen/:id_examen')
  removeExamen(@Param('id') id: string, @Param('id_examen') id_examen: string) {
    return this.alumnoService.removeExamen(+id, +id_examen);
  }

}
