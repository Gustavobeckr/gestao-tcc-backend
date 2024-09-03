import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { UsuarioInterface } from './usuario.repository.interface';
import { Usuario } from './usuario.schema';
import { CreateUsuarioDto } from 'src/routes/usuario/dto/create-usuario.dto';
import { UpdateUsuarioDto } from 'src/routes/usuario/dto/update-usuario.dto';
@Injectable()
export class UsuarioRepository implements UsuarioInterface {
  constructor(@InjectModel('Usuario') private usuarioModel: Model<Usuario>) {}

  async create(usuario: CreateUsuarioDto): Promise<Usuario> {
    const createUsuario = new this.usuarioModel(usuario);
    return await createUsuario.save();
  }

  async findAll() {
    return await this.usuarioModel.find().exec();
  }

  async findOneByMatricula(matricula: number) {
    return await this.usuarioModel.findOne({ matricula });
  }

  async updateOne(matricula: number, usuario: UpdateUsuarioDto) {
    return await this.usuarioModel.updateOne({ matricula }, usuario);
  }

  async deleteOne(matricula: number) {
    return await this.usuarioModel.deleteOne({ matricula });
  }
}
