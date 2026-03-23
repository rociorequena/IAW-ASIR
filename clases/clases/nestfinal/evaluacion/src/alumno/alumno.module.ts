import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlumnoService } from './alumno.service';
import { AlumnoController } from './alumno.controller';
import { Alumno } from './entities/alumno.entity';
import { AlumnoPractica } from './entities/alumno-practica.entity';
import { AlumnoExamen } from './entities/alumno-examen.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Alumno, AlumnoPractica, AlumnoExamen])],
  controllers: [AlumnoController],
  providers: [AlumnoService],
})
export class AlumnoModule {}
