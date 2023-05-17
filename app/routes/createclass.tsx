import { Logo } from "~/componets/Image/logo";
import { CaixaBranca, Coluna, Linha } from "./_index";
import { StudentCategory } from "~/componets/StudentCategory";
import imgbateria from "~/componets/Image/imgbaterista.png";
import { Lupinha } from "~/componets/Image/Icons/IcondeBusca";
import { Pluscircle } from "~/componets/Image/Icons/iconpluscircle";
import { Setinhas } from "~/componets/Image/Icons/iconUpDownArrow";
import { UserNameAndLogo } from "~/componets/UserNameAndLogo";

export default function createclass() {
  return (
    <main className="bg-fundo font-sans">
      <Coluna>
        <UserNameAndLogo />
        <Linha>
          <Coluna className="mt-11 pl-28">
            <h1 className="mb-7 text-2xl font-bold">Criar Turma</h1>
            <CaixaBranca className="mr-28 px-8">
              <Linha className="mt-7">
                <h2 className="w-full text-base font-semibold">
                  Selecionar professor
                </h2>
                <Linha className="w-full justify-end ">
                  <div className="mr-4">
                    <Lupinha />
                  </div>
                  <Pluscircle />
                </Linha>
              </Linha>
              <p className="mt-2 text-xs text-cinzaclaro">32 Professores</p>
              <Linha className="mt-8 items-center">
                <Linha className=" w-full  justify-between px-2">
                  <text>Nome</text>
                  <Setinhas />
                </Linha>
                <Linha className="  px-2">
                  <h2 className="mr-7">Categoria</h2>
                  <Setinhas />
                </Linha>
                <text>Case branca</text>
              </Linha>
              <StudentCategory
                title={"Paulo de Oliveira dos Santos"}
                city={"São Paulo"}
                instrumento={"Violino"}
              />
              <StudentCategory
                title={"Airton Pereira "}
                city={"São José do Rio Preto"}
                instrumento={"Clarinete"}
              />
            </CaixaBranca>
          </Coluna>
          <Coluna>
            <img src={imgbateria} alt="Imagem De Bateria" />
          </Coluna>
        </Linha>
      </Coluna>
    </main>
  );
}
