import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlumnoModule } from './alumno/alumno.module';
import { ProfesorModule } from './profesor/profesor.module';
import { PracticaModule } from './practica/practica.module';
import { ExamenModule } from './examen/examen.module';

import { Alumno } from './alumno/entities/alumno.entity';
import { Profesor } from './profesor/entities/profesor.entity';
import { Practica } from './practica/entities/practica.entity';
import { ExamenTeorico } from './examen/entities/examen-teorico.entity';
import { AlumnoPractica } from './alumno/entities/alumno-practica.entity';
import { AlumnoExamen } from './alumno/entities/alumno-examen.entity';
import { ProfesorPractica } from './profesor/entities/profesor-practica.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'evaluacion',
      entities: [
        Alumno,
        Profesor,
        Practica,
        ExamenTeorico,
        AlumnoPractica,
        AlumnoExamen,
        ProfesorPractica,
      ],
      synchronize: true, // Sincroniza el esquema autómaticamente, útil en DB locales
    }),
    AlumnoModule,
    ProfesorModule,
    PracticaModule,
    ExamenModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
