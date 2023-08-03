import { Coluna, Linha } from "~/routes/_index";
import { LogoFooter } from "./Image/footerimg";

export const FooterContent = () => {
  return (
    <Coluna>
      <Linha className="w-full items-center justify-between bg-bg pb-28 pl-40 pt-48 tracking-tight text-white">
        <LogoFooter />
        <Linha className="flex w-1/2 flex-row justify-between px-20 font-bold">
          <a>Mobile app</a>
          <a>Community</a>
          <a>Company</a>
        </Linha>
        <p className="flex flex-row pr-14 font-light text-white">
          © Photo, Inc. 2019. We love our users!
        </p>
      </Linha>
    </Coluna>
  );
};
