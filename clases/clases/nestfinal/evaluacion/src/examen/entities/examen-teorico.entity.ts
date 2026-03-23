import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Profesor } from '../../profesor/entities/profesor.entity';
import { AlumnoExamen } from '../../alumno/entities/alumno-examen.entity';

@Entity('examen_teorico')
export class ExamenTeorico {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  numero_preguntas: number;

  @Column({ type: 'date' })
  fecha: string;

  @ManyToOne(() => Profesor, profesor => profesor.examenesDisenados)
  @JoinColumn({ name: 'id_profesor' })
  profesor: Profesor;

  @OneToMany(() => AlumnoExamen, alumnoExamen => alumnoExamen.examenTeorico)
  alumnosQueHacen: AlumnoExamen[];
}
