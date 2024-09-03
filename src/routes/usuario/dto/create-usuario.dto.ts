import { TipoUsuario } from 'src/utils/tipoUsuario.enum';

export class CreateUsuarioDto {
  matricula: Number;
  nome: String;
  senha: String;
  tipoUsuario: TipoUsuario;
}
