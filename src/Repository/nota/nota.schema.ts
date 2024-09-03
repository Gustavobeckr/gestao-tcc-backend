import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { TipoUsuario } from 'src/utils/tipoUsuario.enum';

export type NotaDocument = HydratedDocument<Nota>;

@Schema({ versionKey: false })
export class Nota {
  @Prop()
  idNota: Number;

  @Prop()
  matriculaAluno: Number;

  @Prop({ type: { nome: String, matricula: Number } })
  professorAvaliador: object;

  @Prop()
  etapa: String;

  @Prop()
  notaCriterios: object[];
}

export const NotaSchema = SchemaFactory.createForClass(Nota);
