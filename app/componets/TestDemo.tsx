import { CaixaBranca, Coluna, Linha, SubTitle } from "~/routes/_index";

type Props = {
  placeholder: string;
  className?: string;
};

export const TextInput = ({ placeholder, className }: Props) => (
  <input
    type="text"
    placeholder={placeholder}
    className={`mx-3 my-3 box-border rounded border border-gray-200 px-3 py-2 ${className}`}
  />
);

export const TestDemo = () => {
  return (
    <Linha className="justify-center">
      <Coluna className="w-1/3">
        <SubTitle className="mb-10 text-start">Testar a demo!</SubTitle>
        <p className="mb-14 text-xl">
          <strong>Gostou?</strong> Faça um teste da plataforma e verifique em
          contexto real o que ela pode fazer por você.
        </p>
        <CaixaBranca className="z-10 -mb-20 items-start border border-gray-500 p-16">
          <h1 className="mb-11 text-2xl font-bold">
            Sign up for a free account
          </h1>
          <Linha className="w-full">
            <TextInput placeholder="Frist Name" className="w-full" />
            <TextInput placeholder="Last Name" className="w-full" />
          </Linha>
          <Coluna className="w-full">
            <TextInput placeholder="Email Adress" />
            <TextInput placeholder="Create Password" />
          </Coluna>

          <button className="mx-3 mt-3 rounded-md bg-textdemo px-8 py-2 text-sm font-bold text-bg">
            Register
          </button>
        </CaixaBranca>
      </Coluna>
    </Linha>
  );
};
