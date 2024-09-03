import { Nota } from './nota.schema';
import { CreateNotaDto } from 'src/routes/nota/dto/create-nota.dto';

export interface NotaInterface {
  create(nota: CreateNotaDto): Promise<Nota>;
  findAll(): Promise<Nota[]>;
  findOneByMatricula(idNota: Number): Promise<Nota>;
  updateOne(idNota: Number, nota: CreateNotaDto);
  deleteOne(idNota: Number);
}
