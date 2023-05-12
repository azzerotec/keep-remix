import { Coluna, Linha } from "~/routes/_index";
import { Lixeiro } from "./Image/Lixo";
import imgcliente from "./Image/ImageClient.png";

type Props = { title: string; city: string; instrumento: string };

export const StudentCategory = ({ title, city, instrumento }: Props) => {
  return (
    <Linha>
      <img src="imgcliente" alt="Icone do Cliente" />
      <Coluna>
        <text className="text-base font-bold">{title}</text>
        <text className="text-xs font-normal text-cinzaclaro">{city}</text>
      </Coluna>
      <text>icone do instrumento</text>
      <text>{instrumento}</text>
      <Lixeiro />
    </Linha>
  );
};
