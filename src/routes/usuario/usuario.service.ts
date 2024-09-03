import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { UsuarioRepository } from 'src/Repository/usuario/usuario.repository';

@Injectable()
export class UsuarioService {
  constructor(private readonly usuarioRepository: UsuarioRepository) {}
  async create(createUsuarioDto: CreateUsuarioDto) {
    return await this.usuarioRepository.create(createUsuarioDto);
  }

  async findAll() {
    return await this.usuarioRepository.findAll();
  }

  async findOne(matricula: number) {
    return await this.usuarioRepository.findOneByMatricula(matricula);
  }

  async update(matricula: number, updateUsuarioDto: UpdateUsuarioDto) {
    return await this.usuarioRepository.updateOne(matricula, updateUsuarioDto);
  }

  async remove(matricula: number) {
    return await this.usuarioRepository.deleteOne(matricula);
  }
}
