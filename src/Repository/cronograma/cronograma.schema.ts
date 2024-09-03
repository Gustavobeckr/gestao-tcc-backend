import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { TipoUsuario } from 'src/utils/tipoUsuario.enum';

export type CronogramaDocument = HydratedDocument<Cronograma>;

@Schema({ versionKey: false })
export class Cronograma {
  @Prop()
  idCronogrma: Number;

  @Prop()
  descricao: String;

  @Prop()
  etapa: String;

  @Prop()
  avaliacoes: object[];

  @Prop()
  dataEntrega: Date;

  @Prop()
  dataAvaliacao: Date;
}

export const CronogramaSchema = SchemaFactory.createForClass(Cronograma);
