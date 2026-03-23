import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Practica } from './entities/practica.entity';
import { CreatePracticaDto } from './dto/create-practica.dto';
import { UpdatePracticaDto } from './dto/update-practica.dto';

// Servicio que interactúa con la base de datos para CRUD de Practicas
@Injectable()
export class PracticaService {
  constructor(
    @InjectRepository(Practica)
    private readonly practicaRepository: Repository<Practica>,
  ) {}

  // Crea una entidad Práctica y la guarda usando TypeORM
  create(createPracticaDto: CreatePracticaDto) {
    const practica = this.practicaRepository.create(createPracticaDto);
    return this.practicaRepository.save(practica);
  }

  // Al listar las prácticas, también traemos sus relaciones (alumnos y profesores)
  findAll() {
    return this.practicaRepository.find({
      relations: ['alumnosRealizan', 'alumnosRealizan.alumno', 'profesoresDisenan', 'profesoresDisenan.profesor']
    });
  }

  // Busca por id principal en la tabla
  findOne(id: number) {
    return this.practicaRepository.findOne({ 
      where: { id },
      relations: ['alumnosRealizan', 'alumnosRealizan.alumno', 'profesoresDisenan', 'profesoresDisenan.profesor']
    });
  }

  // Edita una práctica y devuelve el resultado actualizado
  async update(id: number, updatePracticaDto: UpdatePracticaDto) {
    await this.practicaRepository.update(id, updatePracticaDto);
    return this.findOne(id);
  }

  // Borra la práctica por completo
  async remove(id: number) {
    return this.practicaRepository.delete(id);
  }
}
