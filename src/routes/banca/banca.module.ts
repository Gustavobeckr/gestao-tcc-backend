import { Module } from '@nestjs/common';
import { BancaService } from './banca.service';
import { BancaController } from './banca.controller';
import { BancaRepository } from 'src/Repository/banca/banca.repository';
import { BancaSchema } from 'src/Repository/banca/banca.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Banca', schema: BancaSchema }]),
  ],
  controllers: [BancaController],
  providers: [BancaService, BancaRepository],
})
export class BancaModule {}
