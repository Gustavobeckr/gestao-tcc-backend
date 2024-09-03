import { Module } from '@nestjs/common';
import { CronogramaService } from './cronograma.service';
import { CronogramaController } from './cronograma.controller';
import { CronogramaRepository } from 'src/Repository/cronograma/cronograma.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { CronogramaSchema } from 'src/Repository/cronograma/cronograma.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Cronograma', schema: CronogramaSchema },
    ]),
  ],
  controllers: [CronogramaController],
  providers: [CronogramaService, CronogramaRepository],
})
export class CronogramaModule {}
