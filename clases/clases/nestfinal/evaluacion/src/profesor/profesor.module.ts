import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfesorService } from './profesor.service';
import { ProfesorController } from './profesor.controller';
import { Profesor } from './entities/profesor.entity';
import { ProfesorPractica } from './entities/profesor-practica.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Profesor, ProfesorPractica])],
  controllers: [ProfesorController],
  providers: [ProfesorService],
})
export class ProfesorModule {}
