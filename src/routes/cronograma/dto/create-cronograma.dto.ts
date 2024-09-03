export class CreateCronogramaDto {
  idCronogrma: Number;
  descricao: String;
  etapa: String;
  avaliacoes: object[];
  dataEntrega: Date;
  dataAvaliacao: Date;
}
