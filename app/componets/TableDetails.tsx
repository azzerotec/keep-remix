import { Linha } from "~/routes/_index";
import { Online } from "./Image/Icons/icononline";

type Props = {
  NumerodaLista: string;
  NomedoAluno: string;
  NomedaTurma: string;
  LocaldeResidencia: string;
  Status: string;
  Finalização: string;
};

export const TableDetails = ({
  NumerodaLista,
  NomedoAluno,
  NomedaTurma,
  LocaldeResidencia,
  Status,
  Finalização,
}: Props) => {
  return (
    <Linha className="border-b">
      <text className="h-11 w-12 p-2">{NumerodaLista}</text>
      <text className="h-11 w-72 p-2">{NomedoAluno}</text>
      <text className="h-11 w-60 p-2">{NomedaTurma}</text>
      <text className="h-11 w-60 p-2">{LocaldeResidencia}</text>
      <Linha className="h-11 w-60 p-2">
        <div className="m-2 flex items-center">
          <Online />
        </div>
        <text className="ml-2">{Status}</text>
      </Linha>
      <text className="h-11 w-28 p-2">{Finalização}</text>
    </Linha>
  );
};
