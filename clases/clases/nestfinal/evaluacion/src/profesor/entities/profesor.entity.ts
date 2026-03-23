import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ExamenTeorico } from '../../examen/entities/examen-teorico.entity';
import { ProfesorPractica } from './profesor-practica.entity';

@Entity('profesor')
export class Profesor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nif: string;

  @Column()
  nombre: string;

  @Column()
  apellido1: string;

  @Column()
  apellido2: string;

  @OneToMany(() => ExamenTeorico, examen => examen.profesor)
  examenesDisenados: ExamenTeorico[];

  @OneToMany(() => ProfesorPractica, profesorPractica => profesorPractica.profesor)
  practicasDisenadas: ProfesorPractica[];
}
