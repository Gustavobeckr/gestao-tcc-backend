import { Injectable } from '@nestjs/common';
import { CreateBancaDto } from './dto/create-banca.dto';
import { UpdateBancaDto } from './dto/update-banca.dto';

@Injectable()
export class BancaService {
  create(createBancaDto: CreateBancaDto) {
    return 'This action adds a new banca';
  }

  findAll() {
    return `This action returns all banca`;
  }

  findOne(id: number) {
    return `This action returns a #${id} banca`;
  }

  update(id: number, updateBancaDto: UpdateBancaDto) {
    return `This action updates a #${id} banca`;
  }

  remove(id: number) {
    return `This action removes a #${id} banca`;
  }
}
