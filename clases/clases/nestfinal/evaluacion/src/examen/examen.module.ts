import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExamenService } from './examen.service';
import { ExamenController } from './examen.controller';
import { ExamenTeorico } from './entities/examen-teorico.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ExamenTeorico])],
  controllers: [ExamenController],
  providers: [ExamenService],
})
export class ExamenModule {}
