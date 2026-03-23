import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Alumno } from './entities/alumno.entity';
import { AlumnoPractica } from './entities/alumno-practica.entity';
import { AlumnoExamen } from './entities/alumno-examen.entity';
import { CreateAlumnoDto } from './dto/create-alumno.dto';
import { UpdateAlumnoDto } from './dto/update-alumno.dto';
import { AsignarPracticaDto, AsignarExamenDto } from './dto/asignar-relacion.dto';

@Injectable()
export class AlumnoService {
  constructor(
    @InjectRepository(Alumno)
    private readonly alumnoRepository: Repository<Alumno>,
    @InjectRepository(AlumnoPractica)
    private readonly alumnoPracticaRepository: Repository<AlumnoPractica>,
    @InjectRepository(AlumnoExamen)
    private readonly alumnoExamenRepository: Repository<AlumnoExamen>,
  ) { }

  // Métodos básicos para la tabla Alumno
  create(createAlumnoDto: CreateAlumnoDto) {
    const alumno = this.alumnoRepository.create(createAlumnoDto);
    return this.alumnoRepository.save(alumno);
  }

  findAll() {
    return this.alumnoRepository.find({
      relations: ['practicasRealizadas', 'practicasRealizadas.practica', 'examenesHechos', 'examenesHechos.examenTeorico']
    });
  }

  findOne(id: number) {
    return this.alumnoRepository.findOne({
      where: { id },
      relations: ['practicasRealizadas', 'practicasRealizadas.practica', 'examenesHechos', 'examenesHechos.examenTeorico']
    });
  }

  async update(id: number, updateAlumnoDto: UpdateAlumnoDto) {
    await this.alumnoRepository.update(id, updateAlumnoDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    return this.alumnoRepository.delete(id);
  }

  // --- Operaciones de asignación directa ---
  async asignarPractica(id_alumno: number, asignarPracticaDto: AsignarPracticaDto) {
    const relacion = this.alumnoPracticaRepository.create({
      id_alumno,
      id_practica: asignarPracticaDto.id_practica,
      fecha: asignarPracticaDto.fecha,
      nota: asignarPracticaDto.nota,
    });
    return this.alumnoPracticaRepository.save(relacion);
  }

  async asignarExamen(id_alumno: number, asignarExamenDto: AsignarExamenDto) {
    const relacion = this.alumnoExamenRepository.create({
      id_alumno,
      id_examen_teorico: asignarExamenDto.id_examen_teorico,
      nota: asignarExamenDto.nota,
    });
    return this.alumnoExamenRepository.save(relacion);
  }

  // --- CRUD completo para la tabla intermedia AlumnoPractica ---
  findAllPracticas() {
    return this.alumnoPracticaRepository.find({ relations: ['alumno', 'practica'] });
  }

  findOnePractica(id_alumno: number, id_practica: number) {
    return this.alumnoPracticaRepository.findOne({
      where: { id_alumno, id_practica },
      relations: ['alumno', 'practica']
    });
  }

  async updatePractica(id_alumno: number, id_practica: number, updateDto: Partial<AsignarPracticaDto>) {
    await this.alumnoPracticaRepository.update({ id_alumno, id_practica }, updateDto);
    return this.findOnePractica(id_alumno, id_practica);
  }

  async removePractica(id_alumno: number, id_practica: number) {
    return this.alumnoPracticaRepository.delete({ id_alumno, id_practica });
  }

  // --- CRUD completo para la tabla intermedia AlumnoExamen ---
  findAllExamenes() {
    return this.alumnoExamenRepository.find({ relations: ['alumno', 'examenTeorico'] });
  }

  findOneExamen(id_alumno: number, id_examen_teorico: number) {
    return this.alumnoExamenRepository.findOne({
      where: { id_alumno, id_examen_teorico },
      relations: ['alumno', 'examenTeorico']
    });
  }

  async updateExamen(id_alumno: number, id_examen_teorico: number, updateDto: Partial<AsignarExamenDto>) {
    await this.alumnoExamenRepository.update({ id_alumno, id_examen_teorico }, updateDto);
    return this.findOneExamen(id_alumno, id_examen_teorico);
  }

  async removeExamen(id_alumno: number, id_examen_teorico: number) {
    return this.alumnoExamenRepository.delete({ id_alumno, id_examen_teorico });
  }

}
