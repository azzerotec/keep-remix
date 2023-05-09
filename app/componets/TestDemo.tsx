import { CaixaBranca, Coluna, Linha, SubTitle } from "~/routes/_index";

export const TestDemo = () => {
  return (
    <>
      <Coluna className="flex flex-row items-center">
        <SubTitle className="flex flex-row items-start justify-center">
          Testar a demo!
        </SubTitle>
        <p className="flex flex-row justify-center text-xl">
          <strong>Gostou? </strong> Faça um teste da plataforma e verifique em
          contexto real o que ela pode fazer por você.
        </p>
        <Coluna className="flex flex-row align-middle">
          <CaixaBranca>
            <h1>Sign up for a free account</h1>
            <Linha>
              <input type="text" placeholder="Frist Name" />
              <Linha>
                <input type="text" placeholder="Last Name" />
              </Linha>
            </Linha>
            <Coluna>
              <input type="text" placeholder="Email Adress" />
            </Coluna>
            <Coluna>
              <input type="text" placeholder="Create Password" />
            </Coluna>
            <Coluna>
              <button className="rounded-md bg-textdemo px-8 py-2 text-sm font-bold text-bg">
                Register
              </button>
            </Coluna>
          </CaixaBranca>
        </Coluna>
      </Coluna>
    </>
  );
};
