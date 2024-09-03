import { Cronograma } from './cronograma.schema';
import { CreateCronogramaDto } from 'src/routes/cronograma/dto/create-cronograma.dto';

export interface CronogramaInterface {
  create(cronograma: CreateCronogramaDto): Promise<Cronograma>;
  findAll(): Promise<Cronograma[]>;
  findOneByMatricula(idCronogrma: Number): Promise<Cronograma>;
  updateOne(idCronogrma: Number, cronograma: CreateCronogramaDto);
  deleteOne(idCronogrma: Number);
}
