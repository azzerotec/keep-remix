import { CaixaBranca, Coluna, Linha, SubTitle } from "~/routes/_index";

export const TestDemo = () => {
  return (
    <Coluna className="flex w-1/2 flex-row items-center">
      <SubTitle className="mb-10 flex flex-row items-start justify-center">
        Testar a demo!
      </SubTitle>
      <p className="mb-4 flex flex-row justify-center text-xl">
        <strong>Gostou? </strong> Faça um teste da plataforma e verifique em
        contexto real o que ela pode fazer por você.
      </p>
      <CaixaBranca className="p-16">
        <h1>Sign up for a free account</h1>
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
  );
};
