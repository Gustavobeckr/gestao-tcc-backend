import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BancaDocument = HydratedDocument<Banca>;

@Schema({ versionKey: false })
export class Banca {
  @Prop()
  matriculaAluno: number;
  @Prop()
  professores: object[];
  @Prop()
  trabalhoConclusao: string;
}

export const BancaSchema = SchemaFactory.createForClass(Banca);
