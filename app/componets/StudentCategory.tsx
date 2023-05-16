import { Coluna, Linha } from "~/routes/_index";
import { Lixeiro } from "./Image/Icons/icontrash";
import imgcliente from "./Image/imgcliente.png";
import { Online } from "./Image/Icons/icononline";

type Props = { title: string; city: string; instrumento: string };

export const StudentCategory = ({ title, city, instrumento }: Props) => {
  return (
    <Linha className="flex items-center">
      <img src={imgcliente} alt="Icone do Cliente" className="px-2" />
      <Coluna className="py-2">
        <text className="mr-9 flex w-full flex-row text-base font-bold">
          {title}
        </text>
        <text className=" text-xs font-normal text-cinzaclaro">{city}</text>
      </Coluna>
      <div className="px-4">
        <Online />
      </div>
      <text>{instrumento}</text>
      <div className="ml-32">
        <Lixeiro />
      </div>
    </Linha>
  );
};
