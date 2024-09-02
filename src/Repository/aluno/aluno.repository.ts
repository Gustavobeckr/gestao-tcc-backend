import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { UpdateAlunoDto } from 'src/routes/aluno/dto/update-aluno.dto';
import { Aluno } from './aluno.schema';
import { CreateAlunoDto } from 'src/routes/aluno/dto/create-aluno.dto';
import { AlunoInterface } from './aluno.repository.interface';

@Injectable()
export class AlunoRepository implements AlunoInterface {
  constructor(@InjectModel('Aluno') private AlunoModel: Model<Aluno>) {}

  async create(createAlunoDto: CreateAlunoDto): Promise<Aluno> {
    const createAluno = new this.AlunoModel(createAlunoDto);
    return await createAluno.save();
  }

  async findAll() {
    return await this.AlunoModel.find().exec();
  }

  async findOneByMatricula(matricula: number) {
    return await this.AlunoModel.findOne({ matricula });
  }

  async updateOne(matricula: number, updateAlunoDto: UpdateAlunoDto) {
    return await this.AlunoModel.updateOne({ matricula }, updateAlunoDto);
  }

  async deleteOne(matricula: number) {
    return await this.AlunoModel.deleteOne({ matricula });
  }
}
