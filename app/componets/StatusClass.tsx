type Props = {
  Statusnumber: string;
  Statusname: string;
};

export const Statisticsbox = ({ Statusnumber, Statusname }: Props) => {
  return (
    <>
      <p className="text-3xl font-bold">{Statusnumber}</p>
      <p className="text-sm text-cinzaclaro">{Statusname}</p>
    </>
  );
};
