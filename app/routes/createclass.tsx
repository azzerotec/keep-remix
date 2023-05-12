import { Logo } from "~/componets/Image/logo";
import { CaixaBranca, Coluna, Linha } from "./_index";
import { StudentCategory } from "~/componets/StudentCategory";
import imgbateria from "~/componets/Image/imgbaterista.png";
import { Lupinha } from "~/componets/Image/IcondeBusca";
import { Pluscircle } from "~/componets/Image/pluscircle";
import { Setinhas } from "~/componets/Image/setacimaebaixo";

export default function createclass() {
  return (
    <main className="bg-fundo font-sans">
      <Coluna>
        <Linha className="mb-2 w-full justify-between bg-white py-4 pl-28 ">
          <Logo />
          <p className="mr-20 border border-l-0 border-gray-100">
            Nome do usuário
          </p>
        </Linha>
        <Linha>
          <Coluna className="mt-11 pl-28">
            <h1 className="text-2xl font-bold">Criar Turma</h1>
            <CaixaBranca className="mr-28 px-8">
              <Linha className="mt-7">
                <h2 className="text-base font-semibold">
                  Selecionar professor
                </h2>
                <Lupinha />
                <Pluscircle />
              </Linha>
              <p className="text-xs text-cinzaclaro">32 Professores</p>
              <Linha>
                <text>Nome</text>
                <Setinhas />
                <text>Categoria</text>
                <Setinhas />
                <text>Case branca</text>
              </Linha>
              <StudentCategory
                title={"Paulo de Oliveira dos Santos"}
                city={"São Paulo"}
                instrumento={"Violino"}
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
