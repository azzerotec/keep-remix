import { Card, CardContent, CardHeader } from "~/components/ui/card";

type Props = {
  Statusnumber: string;
  Statusname: string;
};

export const Statisticsbox = ({ Statusnumber, Statusname }: Props) => {
  return (

        
          <Card x-chunk="dashboard-01-chunk-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{Statusnumber}</div>
              <p className="text-sm text-muted-foreground">
                {Statusname}
              </p>
            </CardContent>
          </Card>

/*  <CaixaBranca className="h-28 w-56">
      <Linha>
        <img src={CircleCinza} alt="Fundo Cinza" className="px-3 py-7" />
        <Coluna className="py-7">
          <p className="text-3xl font-bold">{Statusnumber}</p>
          <p className="text-sm text-cinzaclaro">{Statusname}</p>
        </Coluna>
      </Linha>
    </CaixaBranca> */
  );
};
