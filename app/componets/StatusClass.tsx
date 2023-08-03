import { CaixaBranca, Coluna, Linha } from "~/routes/_index";
import CircleCinza from "~/componets/Image/CircleCinza.jpg";

type Props = {
  Statusnumber: string;
  Statusname: string;
};

export const Statisticsbox = ({ Statusnumber, Statusname }: Props) => {
  return (
    <CaixaBranca className="h-28 w-56">
      <Linha>
        <img src={CircleCinza} alt="Fundo Cinza" className="px-3 py-7" />
        <Coluna className="py-7">
          <p className="text-3xl font-bold">{Statusnumber}</p>
          <p className="text-sm text-cinzaclaro">{Statusname}</p>
        </Coluna>
      </Linha>
    </CaixaBranca>
  );
};
