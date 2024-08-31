import mongoose, { Document } from 'mongoose';

export interface AlunoInterface extends Document {
  readonly _id: mongoose.Schema.Types.ObjectId;
  readonly nome: String;
  readonly matricula: Number;
  readonly codCurso: Number;
}
