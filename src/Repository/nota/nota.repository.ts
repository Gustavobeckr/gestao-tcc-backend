import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { NotaInterface } from './nota.repository.interface';
import { Nota } from './nota.schema';
import { CreateNotaDto } from 'src/routes/nota/dto/create-nota.dto';
@Injectable()
export class NotaRepository implements NotaInterface {
  constructor(@InjectModel('Nota') private notaModel: Model<Nota>) {}

  async create(nota: CreateNotaDto): Promise<Nota> {
    const createNota = new this.notaModel(nota);
    return await createNota.save();
  }

  async findAll() {
    return await this.notaModel.find().exec();
  }

  async findOneByMatricula(idNota: number) {
    return await this.notaModel.findOne({ idNota });
  }

  async updateOne(idNota: number, nota: CreateNotaDto) {
    return await this.notaModel.updateOne({ idNota }, nota);
  }

  async deleteOne(idNota: number) {
    return await this.notaModel.deleteOne({ idNota });
  }
}
