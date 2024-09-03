import { Document } from 'mongoose';
import { Usuario } from './usuario.schema';
import { CreateUsuarioDto } from 'src/routes/usuario/dto/create-usuario.dto';
import { UpdateUsuarioDto } from 'src/routes/usuario/dto/update-usuario.dto';

export interface UsuarioInterface {
  create(usuario: CreateUsuarioDto): Promise<Usuario>;
  findAll(): Promise<Usuario[]>;
  findOneByMatricula(matricula: Number): Promise<Usuario>;
  updateOne(matricula: Number, usuario: UpdateUsuarioDto);
  deleteOne(matricula: Number);
}
