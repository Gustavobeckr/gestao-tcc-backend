import { Injectable } from '@nestjs/common';
import { CreateNotaDto } from './dto/create-nota.dto';
import { NotaRepository } from 'src/Repository/nota/nota.repository';

@Injectable()
export class NotaService {
  constructor(private readonly notaRepository: NotaRepository) {}
  async create(createNotaDto: CreateNotaDto) {
    return await this.notaRepository.create(createNotaDto);
  }

  async findAll() {
    return await this.notaRepository.findAll();
  }

  async findOne(idNota: number) {
    return await this.notaRepository.findOneByMatricula(idNota);
  }

  async update(idNota: number, updateNotaDto: CreateNotaDto) {
    return await this.notaRepository.updateOne(idNota, updateNotaDto);
  }

  async remove(idNota: number) {
    return await this.notaRepository.deleteOne(idNota);
  }
}
