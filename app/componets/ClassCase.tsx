type Props = {
  NomedaTurma: string;
  Professor: string;
  Alunos: string;
  Andamento: string;
  Finalização: string;
  Categoria: string;
};

export const ClassCase = ({
  NomedaTurma,
  Professor,
  Alunos,
  Andamento,
  Finalização,
  Categoria,
}: Props) => {
  return (
    <>
      <text className="h-12 w-40">{NomedaTurma}</text>
      <text className="h-12 w-60">{Professor}</text>
      <text className="h-12 w-52">{Alunos}</text>
      <text className="h-12 w-52">{Andamento}</text>
      <text className="h-12 w-28">{Finalização}</text>
      <text className="h-12 w-28">{Categoria}</text>
    </>
  );
};
