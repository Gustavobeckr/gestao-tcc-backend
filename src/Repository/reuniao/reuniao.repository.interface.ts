import { CreateReuniaoDto } from 'src/routes/reuniao/dto/create-reuniao.dto';
import { Reuniao } from './reuniao.schema';

export interface ReuniaoInterface {
  create(reuniao: CreateReuniaoDto): Promise<Reuniao>;
  findAll(): Promise<Reuniao[]>;
  findOneByMatricula(idReuniao: Number): Promise<Reuniao>;
  updateOne(idReuniao: Number, reuniao: CreateReuniaoDto);
  deleteOne(idReuniao: Number);
}
