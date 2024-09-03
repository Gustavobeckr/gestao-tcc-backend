import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ReuniaoDocument = HydratedDocument<Reuniao>;

@Schema({ versionKey: false })
export class Reuniao {
  @Prop()
  idReuniao: Number;

  @Prop()
  matriculaAluno: Number;

  @Prop()
  ataReuniao: String;

  @Prop()
  dataReuniao: Date;

  @Prop()
  Documento: String;
}

export const ReuniaoSchema = SchemaFactory.createForClass(Reuniao);
