export class CreateNotaDto {
  idNota: Number;
  matriculaAluno: Number;
  professorAvaliador: {
    nome: String;
    matriculaProfessor: Number;
  };
  etapa: String;
  notaCriterios: object[];
}
