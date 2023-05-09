import { CaixaBranca, Coluna, Linha, SubTitle } from "~/routes/_index";

export const TestDemo = () => {
  return (
    <Linha className="justify-center">
      <Coluna className="w-1/3">
        <SubTitle className="mb-10 text-start">Testar a demo!</SubTitle>
        <p className="mb-4 text-xl">
          <strong>Gostou?</strong> Faça um teste da plataforma e verifique em
          contexto real o que ela pode fazer por você.
        </p>
        <CaixaBranca className="items-start border border-gray-500 p-16">
          <h1 className="mb-11 text-2xl font-bold">
            Sign up for a free account
          </h1>
          <Linha>
            <input type="text" placeholder="Frist Name" />
            <input type="text" placeholder="Last Name" />
          </Linha>
          <input type="text" placeholder="Email Adress" />
          <input type="text" placeholder="Create Password" />
          <button className="rounded-md bg-textdemo px-8 py-2 text-sm font-bold text-bg">
            Register
          </button>
        </CaixaBranca>
      </Coluna>
    </Linha>
  );
};
