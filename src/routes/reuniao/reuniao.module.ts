import { Module } from '@nestjs/common';
import { ReuniaoService } from './reuniao.service';
import { ReuniaoController } from './reuniao.controller';
import { ReuniaoRepository } from 'src/Repository/reuniao/reuniao.repository';
import { ReuniaoSchema } from 'src/Repository/reuniao/reuniao.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Reuniao', schema: ReuniaoSchema }]),
  ],
  controllers: [ReuniaoController],
  providers: [ReuniaoService, ReuniaoRepository],
})
export class ReuniaoModule {}
