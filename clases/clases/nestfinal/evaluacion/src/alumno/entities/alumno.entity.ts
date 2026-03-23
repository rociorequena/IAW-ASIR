import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { AlumnoPractica } from './alumno-practica.entity';
import { AlumnoExamen } from './alumno-examen.entity';

@Entity('alumno')
export class Alumno {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nif: string;

  @Column()
  grupo: string;

  @Column()
  nombre: string;

  @Column()
  apellido1: string;

  @Column()
  apellido2: string;

  @OneToMany(() => AlumnoPractica, alumnoPractica => alumnoPractica.alumno)
  practicasRealizadas: AlumnoPractica[];

  @OneToMany(() => AlumnoExamen, alumnoExamen => alumnoExamen.alumno)
  examenesHechos: AlumnoExamen[];
}
