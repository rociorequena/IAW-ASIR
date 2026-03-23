import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profesor } from './entities/profesor.entity';
import { ProfesorPractica } from './entities/profesor-practica.entity';
import { CreateProfesorDto } from './dto/create-profesor.dto';
import { UpdateProfesorDto } from './dto/update-profesor.dto';


@Injectable()
export class ProfesorService {
  constructor(
    @InjectRepository(Profesor)
    private readonly profesorRepository: Repository<Profesor>,
    @InjectRepository(ProfesorPractica)
    private readonly profesorPracticaRepository: Repository<ProfesorPractica>,
  ) {}

  // --- CRUD para la tabla principal Profesor ---
  
  // Guarda un nuevo profesor en BD
  create(createProfesorDto: CreateProfesorDto) {
    const profesor = this.profesorRepository.create(createProfesorDto);
    return this.profesorRepository.save(profesor);
  }

  // Devuelve todos los profesores y las prácticas/exámenes que diseñan
  findAll() {
    return this.profesorRepository.find({
      relations: ['examenesDisenados', 'practicasDisenadas', 'practicasDisenadas.practica']
    });
  }

  // Busca un único profesor por su ID
  findOne(id: number) {
    return this.profesorRepository.findOne({
      where: { id },
      relations: ['examenesDisenados', 'practicasDisenadas', 'practicasDisenadas.practica']
    });
  }

  async update(id: number, updateProfesorDto: UpdateProfesorDto) {
    await this.profesorRepository.update(id, updateProfesorDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    return this.profesorRepository.delete(id);
  }

  // --- CRUD para la tabla intermedia ProfesorPractica ---

  // Obtiene todas las relaciones (los profesores y sus prácticas diseñadas)
  findAllPracticas() {
    return this.profesorPracticaRepository.find({ relations: ['profesor', 'practica'] });
  }

  // Busca una relación en concreto usando los dos IDs
  findOnePractica(id_profesor: number, id_practica: number) {
    return this.profesorPracticaRepository.findOne({
      where: { id_profesor, id_practica },
      relations: ['profesor', 'practica']
    });
  }

  // Crea la relación asignando una práctica al profesor
  async asignarPractica(id_profesor: number, dto: any) {
    const relacion = this.profesorPracticaRepository.create({
      id_profesor,
      id_practica: dto.id_practica,
      fecha: dto.fecha,
    });
    return this.profesorPracticaRepository.save(relacion);
  }

  // Actualiza algún dato de la relación (como la fecha de creación de la práctica)
  async updatePractica(id_profesor: number, id_practica: number, dto: any) {
    await this.profesorPracticaRepository.update({ id_profesor, id_practica }, dto);
    return this.findOnePractica(id_profesor, id_practica);
  }

  // Borra la relación
  async removePractica(id_profesor: number, id_practica: number) {
    return this.profesorPracticaRepository.delete({ id_profesor, id_practica });
  }
}
