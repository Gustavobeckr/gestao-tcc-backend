import { Module } from '@nestjs/common';
import { AlunoRepository } from 'src/Repository/aluno/aluno.repository';
import { AlunoService } from './aluno.service';
import { AlunoController } from './aluno.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AlunoSchema } from 'src/Repository/aluno/Aluno.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Aluno', schema: AlunoSchema }]),
  ],
  controllers: [AlunoController],
  providers: [AlunoService, AlunoRepository],
})
export class AlunoModule {}
