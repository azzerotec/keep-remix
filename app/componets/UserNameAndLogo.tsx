import { Linha } from "~/routes/_index";
import { Logo } from "./Image/logo";

export const UserNameAndLogo = () => (
  <Linha className="mb-2 w-full justify-between bg-white py-4 pl-28 drop-shadow-md ">
    <Logo />
    <p className="mr-20 border border-l-0 border-gray-100">Nome do usuário</p>
  </Linha>
);
