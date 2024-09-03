import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from 'src/routes/usuario/dto/create-usuario.dto';
import { UpdateUsuarioDto } from 'src/routes/usuario/dto/update-usuario.dto';
import { CronogramaInterface } from './cronograma.repository.interface';
import { Cronograma } from './cronograma.schema';
import { CreateCronogramaDto } from 'src/routes/cronograma/dto/create-cronograma.dto';
@Injectable()
export class CronogramaRepository implements CronogramaInterface {
  constructor(
    @InjectModel('Cronograma') private cronogramaModel: Model<Cronograma>,
  ) {}

  async create(usuario: CreateCronogramaDto): Promise<Cronograma> {
    const createCronograma = new this.cronogramaModel(usuario);
    return await createCronograma.save();
  }

  async findAll() {
    return await this.cronogramaModel.find().exec();
  }

  async findOneByMatricula(idCronogrma: number) {
    return await this.cronogramaModel.findOne({ idCronogrma });
  }

  async updateOne(idCronogrma: number, usuario: CreateCronogramaDto) {
    return await this.cronogramaModel.updateOne({ idCronogrma }, usuario);
  }

  async deleteOne(idCronogrma: number) {
    return await this.cronogramaModel.deleteOne({ idCronogrma });
  }
}
