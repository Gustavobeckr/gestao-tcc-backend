import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { CreateReuniaoDto } from 'src/routes/reuniao/dto/create-reuniao.dto';
import { ReuniaoInterface } from './reuniao.repository.interface';
import { Reuniao } from './reuniao.schema';
@Injectable()
export class ReuniaoRepository implements ReuniaoInterface {
  constructor(@InjectModel('Reuniao') private reuniaoModel: Model<Reuniao>) {}

  async create(reuniao: CreateReuniaoDto): Promise<Reuniao> {
    const createReuniao = new this.reuniaoModel(reuniao);
    return await createReuniao.save();
  }

  async findAll() {
    return await this.reuniaoModel.find().exec();
  }

  async findOneByMatricula(idReuniao: number) {
    return await this.reuniaoModel.findOne({ idReuniao });
  }

  async updateOne(idReuniao: number, reuniao: CreateReuniaoDto) {
    return await this.reuniaoModel.updateOne({ idReuniao }, reuniao);
  }

  async deleteOne(idReuniao: number) {
    return await this.reuniaoModel.deleteOne({ idReuniao });
  }
}
