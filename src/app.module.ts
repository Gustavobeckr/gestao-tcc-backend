import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Aluno, AlunoSchema } from './Repository/Schemas/Aluno.schema';
import { AlunoService } from './routes/aluno/aluno.service';
import { AlunoController } from './routes/aluno/aluno.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/gestaoTCC'),
    MongooseModule.forFeature([{ name: 'Aluno', schema: AlunoSchema }]),
  ],
  controllers: [AlunoController],
  providers: [AlunoService],
})
export class AppModule {}
