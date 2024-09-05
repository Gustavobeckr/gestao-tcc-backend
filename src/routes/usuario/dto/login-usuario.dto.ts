import { TipoUsuario } from 'src/utils/tipoUsuario.enum';

export class LoginUsuarioDto {
  matricula: number;
  senha: String;
}

export class LoginUsuarioRespostaDto {
  status: boolean;
  messagem: String;
  nome?: String;
  tipoUsuario?: String;
}
