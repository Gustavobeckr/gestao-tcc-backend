import { Document } from 'mongoose';
import { CreateBancaDto } from 'src/routes/banca/dto/create-banca.dto';
import { Banca } from './banca.schema';
import { UpdateBancaDto } from 'src/routes/banca/dto/update-banca.dto';

export interface BancaInterface {
  create(createBancaDto: CreateBancaDto): Promise<Banca>;
  findAll(): Promise<Banca[]>;
  findOneByMatricula(matriculaAluno: Number): Promise<Banca>;
  updateOne(matriculaAluno: Number, updateBancaDto: UpdateBancaDto);
  deleteOne(matriculaAluno: Number);
}
