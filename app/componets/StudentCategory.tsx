import { Coluna, Linha } from "~/routes/_index";
import { Lixeiro } from "./Image/Icons/icontrash";
import imgcliente from "./Image/imgcliente.png";
import { Online } from "./Image/Icons/icononline";

type Props = { title: string; city: string; instrumento: string };

export const StudentCategory = ({ title, city, instrumento }: Props) => {
  return (
    <Linha className="flex items-center py-2">
      <Linha className="flex h-11 w-80 items-center">
        <img src={imgcliente} alt="Icone do Cliente" className="px-2" />
        <Coluna className="">
          <text className="mr-9 flex w-full flex-row text-base font-bold">
            {title}
          </text>
          <text className=" text-xs font-normal text-cinzaclaro">{city}</text>
        </Coluna>
      </Linha>
      <Linha className="h-11 w-36 items-center">
        <div className="mr-4">
          <Online />
        </div>
        <text>{instrumento}</text>
      </Linha>
      <div className="">
        <Lixeiro />
      </div>
    </Linha>
  );
};
