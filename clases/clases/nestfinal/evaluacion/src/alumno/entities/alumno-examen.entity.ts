import { Entity, Column, ManyToOne, JoinColumn, PrimaryColumn } from 'typeorm';
import { Alumno } from './alumno.entity';
import { ExamenTeorico } from '../../examen/entities/examen-teorico.entity';

@Entity('alumno_hace_examen_teorico')
export class AlumnoExamen {
  @PrimaryColumn()
  id_alumno: number;

  @PrimaryColumn()
  id_examen_teorico: number;

  @Column({ type: 'float' })
  nota: number;

  @ManyToOne(() => Alumno, alumno => alumno.examenesHechos)
  @JoinColumn({ name: 'id_alumno' })
  alumno: Alumno;

  @ManyToOne(() => ExamenTeorico, examen => examen.alumnosQueHacen)
  @JoinColumn({ name: 'id_examen_teorico' })
  examenTeorico: ExamenTeorico;
}
