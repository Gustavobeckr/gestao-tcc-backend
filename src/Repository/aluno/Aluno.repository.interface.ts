import { Document } from 'mongoose';
import { CreateAlunoDto } from 'src/routes/aluno/dto/create-aluno.dto';
import { Aluno } from './Aluno.schema';
import { UpdateAlunoDto } from 'src/routes/aluno/dto/update-aluno.dto';

export interface AlunoInterface {
  create(createAlunoDto: CreateAlunoDto): Promise<Aluno>;
  findAll(): Promise<Aluno[]>;
  findOneByMatricula(matricula: Number): Promise<Aluno>;
  updateOne(matricula: Number, createAlunoDto: UpdateAlunoDto);
  deleteOne(matricula: Number);
}
