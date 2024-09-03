import { Injectable } from '@nestjs/common';
import { CreateReuniaoDto } from './dto/create-reuniao.dto';
import { NotaRepository } from 'src/Repository/nota/nota.repository';
import { ReuniaoRepository } from 'src/Repository/reuniao/reuniao.repository';

@Injectable()
export class ReuniaoService {
  constructor(private readonly reuniaoRepository: ReuniaoRepository) {}
  async create(createReuniaoDto: CreateReuniaoDto) {
    return await this.reuniaoRepository.create(createReuniaoDto);
  }

  async findAll() {
    return await this.reuniaoRepository.findAll();
  }

  async findOne(idReuniao: number) {
    return await this.reuniaoRepository.findOneByMatricula(idReuniao);
  }

  async update(idReuniao: number, createReuniaoDto: CreateReuniaoDto) {
    return await this.reuniaoRepository.updateOne(idReuniao, createReuniaoDto);
  }

  async remove(idReuniao: number) {
    return await this.reuniaoRepository.deleteOne(idReuniao);
  }
}
