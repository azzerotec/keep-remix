import { Coluna } from "~/routes/_index";
import { Linha } from "~/routes/_index";
import { Logo } from "./Image/logo";

export const Header = () => {
  return (
    <Coluna>
      <Linha className=" w-full justify-between p-8">
        <Logo />
        <Linha className="w-1/2 items-center justify-between">
          <a>Propósito</a>
          <a>Benefícios</a>
          <a>Preços</a>
          <a>Contato</a>
          <a
            href="/login"
            className="rounded-md bg-bg px-11 py-2 text-textdemo"
          >
            Demo
          </a>
        </Linha>
      </Linha>
    </Coluna>
  );
};
