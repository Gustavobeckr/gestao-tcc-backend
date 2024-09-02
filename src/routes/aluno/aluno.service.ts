import { Injectable } from '@nestjs/common';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
import { Aluno } from 'src/Repository/aluno/Aluno.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { AlunoInterface } from 'src/Repository/aluno/Aluno.repository.interface';
import { AlunoRepository } from 'src/Repository/aluno/aluno.repository';

@Injectable()
export class AlunoService {
  constructor(private readonly alunoRepository: AlunoRepository) {}

  async create(createAlunoDto: CreateAlunoDto): Promise<Aluno> {
    return await this.alunoRepository.create(createAlunoDto);
  }

  async findAll() {
    return await this.alunoRepository.findAll();
  }

  async findOne(matricula: number) {
    return await this.alunoRepository.findOneByMatricula(matricula);
  }

  async update(matricula: number, updateAlunoDto: UpdateAlunoDto) {
    return await this.alunoRepository.updateOne(matricula, updateAlunoDto);
  }

  async remove(matricula: number) {
    return await this.alunoRepository.deleteOne(matricula);
  }
}
