import { Injectable } from '@nestjs/common';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
import { Aluno } from 'src/Repository/Schemas/Aluno.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AlunoService {
  constructor(@InjectModel('Aluno') private AlunoModel: Model<Aluno>) {}

  async create(createAlunoDto: CreateAlunoDto): Promise<CreateAlunoDto> {
    const createAluno = new this.AlunoModel(createAlunoDto);
    return await createAluno.save();
  }

  async findAll() {
    return await this.AlunoModel.find().exec();
  }

  async findByMatricula(matricula: number) {
    return await this.AlunoModel.findOne({ matricula });
  }

  async update(matricula: number, updateAlunoDto: UpdateAlunoDto) {
    return await this.AlunoModel.updateOne({ matricula }, updateAlunoDto);
  }

  async remove(matricula: number) {
    return await this.AlunoModel.deleteOne({ matricula });
  }
}
