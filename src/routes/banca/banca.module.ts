import { Module } from '@nestjs/common';
import { BancaService } from './banca.service';
import { BancaController } from './banca.controller';

@Module({
  controllers: [BancaController],
  providers: [BancaService],
})
export class BancaModule {}
