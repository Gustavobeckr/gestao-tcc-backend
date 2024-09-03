import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { BancaInterface } from './banca.repository.interface';
import { Banca } from './banca.schema';
import { CreateBancaDto } from 'src/routes/banca/dto/create-banca.dto';
import { UpdateBancaDto } from 'src/routes/banca/dto/update-banca.dto';

@Injectable()
export class BancaRepository implements BancaInterface {
  constructor(@InjectModel('Banca') private bancaModel: Model<Banca>) {}

  async create(createAlunoDto: CreateBancaDto): Promise<Banca> {
    const createAluno = new this.bancaModel(createAlunoDto);
    return await createAluno.save();
  }

  async findAll() {
    return await this.bancaModel.find().exec();
  }

  async findOneByMatricula(matriculaAluno: number) {
    return await this.bancaModel.findOne({ matriculaAluno });
  }

  async updateOne(matriculaAluno: number, updateBancaDto: UpdateBancaDto) {
    return await this.bancaModel.updateOne({ matriculaAluno }, updateBancaDto);
  }

  async deleteOne(matriculaAluno: number) {
    return await this.bancaModel.deleteOne({ matriculaAluno });
  }
}
