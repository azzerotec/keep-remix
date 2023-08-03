import { Coluna, Linha } from "~/routes/_index";
import { Lixeiro } from "./Image/Icons/icontrash";
import imgcliente from "./Image/imgcliente.png";
import { Online } from "./Image/Icons/icononline";

type Props = { title: string; city: string; instrumento: string };

export const StudentCategory = ({ title, city, instrumento }: Props) => {
  return (
    <Linha className="flex items-center border-b">
      <Linha className="flex h-11 w-80 items-center border-r py-2">
        <img src={imgcliente} alt="Icone do Cliente" className="px-2" />
        <Coluna>
          <text className="mr-9 w-full flex-row text-base font-bold">
            {title}
          </text>
          <text className=" text-xs font-normal text-cinzaclaro">{city}</text>
        </Coluna>
      </Linha>
      <Linha className="w-36 items-center border-r p-2">
        <div className="mr-4">
          <Online />
        </div>
        <text>{instrumento}</text>
      </Linha>
      <Linha className="grow justify-center p-2">
        <Lixeiro />
      </Linha>
    </Linha>
  );
};
