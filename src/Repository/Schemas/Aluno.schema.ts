import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type AlunoDocument = HydratedDocument<Aluno>;

@Schema({ versionKey: false })
export class Aluno {
  @Prop()
  nome: String;

  @Prop()
  matricula: Number;

  @Prop()
  codCurso: Number;
}

export const AlunoSchema = SchemaFactory.createForClass(Aluno);
