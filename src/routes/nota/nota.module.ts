import { Module } from '@nestjs/common';
import { NotaService } from './nota.service';
import { NotaController } from './nota.controller';
import { NotaRepository } from 'src/Repository/nota/nota.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { NotaSchema } from 'src/Repository/nota/nota.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Nota', schema: NotaSchema }])],
  controllers: [NotaController],
  providers: [NotaService, NotaRepository],
})
export class NotaModule {}
