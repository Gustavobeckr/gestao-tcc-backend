import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Aluno, AlunoSchema } from './Repository/aluno/Aluno.schema';
import { AlunoService } from './routes/aluno/aluno.service';
import { AlunoController } from './routes/aluno/aluno.controller';
import { AlunoRepository } from './Repository/aluno/aluno.repository';
import { BancaModule } from './routes/banca/banca.module';
import { AlunoModule } from './routes/aluno/aluno.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/gestaoTCC'),
    AlunoModule,
    BancaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
