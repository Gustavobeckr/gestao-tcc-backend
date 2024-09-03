import { Injectable } from '@nestjs/common';
import { CreateCronogramaDto } from './dto/create-cronograma.dto';
import { CronogramaRepository } from 'src/Repository/cronograma/cronograma.repository';

@Injectable()
export class CronogramaService {
  constructor(private readonly cronogramaRepository: CronogramaRepository) {}
  async create(createCronogramaDto: CreateCronogramaDto) {
    return await this.cronogramaRepository.create(createCronogramaDto);
  }

  async findAll() {
    return await this.cronogramaRepository.findAll();
  }

  async findOne(idCronogrma: number) {
    return await this.cronogramaRepository.findOneByMatricula(idCronogrma);
  }

  async update(idCronogrma: number, updateCronogramaDto: CreateCronogramaDto) {
    return await this.cronogramaRepository.updateOne(
      idCronogrma,
      updateCronogramaDto,
    );
  }

  async remove(idCronogrma: number) {
    return await this.cronogramaRepository.deleteOne(idCronogrma);
  }
}
