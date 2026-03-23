import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { AlumnoPractica } from '../../alumno/entities/alumno-practica.entity';
import { ProfesorPractica } from '../../profesor/entities/profesor-practica.entity';

@Entity('practica')
export class Practica {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  dificultad: string;

  @OneToMany(() => AlumnoPractica, alumnoPractica => alumnoPractica.practica)
  alumnosRealizan: AlumnoPractica[];

  @OneToMany(() => ProfesorPractica, profesorPractica => profesorPractica.practica)
  profesoresDisenan: ProfesorPractica[];
}
