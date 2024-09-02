import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { UpdateAlunoDto } from 'src/routes/aluno/dto/update-aluno.dto';
import { BancaInterface } from './banca.repository.interface';
import { Banca } from './banca.schema';
import { CreateBancaDto } from 'src/routes/banca/dto/create-banca.dto';
import { UpdateBancaDto } from 'src/routes/banca/dto/update-banca.dto';

@Injectable()
export class BancaRepository implements BancaInterface {
  constructor(@InjectModel('Banca') private BancaModel: Model<Banca>) {}

  async create(createAlunoDto: CreateBancaDto): Promise<Banca> {
    const createAluno = new this.BancaModel(createAlunoDto);
    return await createAluno.save();
  }

  async findAll() {
    return await this.BancaModel.find().exec();
  }

  async findOneByMatricula(matriculaAluno: number) {
    return await this.BancaModel.findOne({ matriculaAluno });
  }

  async updateOne(matriculaAluno: number, updateBancaDto: UpdateBancaDto) {
    return await this.BancaModel.updateOne({ matriculaAluno }, updateBancaDto);
  }

  async deleteOne(matriculaAluno: number) {
    return await this.BancaModel.deleteOne({ matriculaAluno });
  }
}
