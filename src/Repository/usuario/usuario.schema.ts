import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { TipoUsuario } from 'src/utils/tipoUsuario.enum';

export type UsuarioDocument = HydratedDocument<Usuario>;

@Schema({ versionKey: false })
export class Usuario {
  @Prop()
  matricula: Number;

  @Prop()
  nome: String;

  @Prop()
  senha: String;

  @Prop()
  tipoUsuario: String;
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);
