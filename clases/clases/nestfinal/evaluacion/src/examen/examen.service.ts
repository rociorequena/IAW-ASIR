import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ExamenTeorico } from './entities/examen-teorico.entity';
import { CreateExamenDto } from './dto/create-examen.dto';
import { UpdateExamenDto } from './dto/update-examen.dto';

// Servicio que maneja la lógica de negocio y las llamadas a la base de datos para ExamenTeorico
@Injectable()
export class ExamenService {
  constructor(
    @InjectRepository(ExamenTeorico)
    private readonly examenRepository: Repository<ExamenTeorico>,
  ) {}

  // Guarda un nuevo examen en la base de datos usando el repositorio
  create(createExamenDto: CreateExamenDto) {
    const examen = this.examenRepository.create(createExamenDto);
    return this.examenRepository.save(examen);
  }

  // Obtiene todos los exámenes incluyendo el profesor que lo pone y los alumnos que lo hacen
  findAll() {
    return this.examenRepository.find({
      relations: ['profesor', 'alumnosQueHacen', 'alumnosQueHacen.alumno']
    });
  }

  // Obtiene un examen específico usando su ID y trae sus relaciones
  findOne(id: number) {
    return this.examenRepository.findOne({
      where: { id },
      relations: ['profesor', 'alumnosQueHacen', 'alumnosQueHacen.alumno']
    });
  }

  // Modifica los datos del examen y lo devuelve actualizado
  async update(id: number, updateExamenDto: UpdateExamenDto) {
    await this.examenRepository.update(id, updateExamenDto);
    return this.findOne(id);
  }

  // Elimina la fila del examen de la tabla
  async remove(id: number) {
    return this.examenRepository.delete(id);
  }
}
