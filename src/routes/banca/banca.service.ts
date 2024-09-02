import { Injectable } from '@nestjs/common';
import { CreateBancaDto } from './dto/create-banca.dto';
import { UpdateBancaDto } from './dto/update-banca.dto';
import { BancaRepository } from 'src/Repository/banca/banca.repository';

@Injectable()
export class BancaService {
  constructor(private readonly bancaRepository: BancaRepository) {}
  async create(createBancaDto: CreateBancaDto) {
    return await this.bancaRepository.create(createBancaDto);
  }

  async findAll() {
    return await this.bancaRepository.findAll();
  }

  async findOne(matriculaAluno: number) {
    return await this.bancaRepository.findOneByMatricula(matriculaAluno);
  }

  async update(matriculaAluno: number, updateBancaDto: UpdateBancaDto) {
    return await this.bancaRepository.updateOne(matriculaAluno, updateBancaDto);
  }

  async remove(matriculaAluno: number) {
    return await this.bancaRepository.deleteOne(matriculaAluno);
  }
}
