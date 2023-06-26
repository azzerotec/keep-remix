import { UserNameAndLogo } from "~/componets/UserNameAndLogo";
import { CaixaBranca, Coluna, Linha } from "./_index";
import { Lupinha } from "~/componets/Image/Icons/IcondeBusca";
import { DownloadIcon } from "~/componets/Image/Icons/icondownload";
import { ClassCase } from "~/componets/ClassCase";
import CircleCinza from "~/componets/Image/CircleCinza.jpg";
import { Statisticsbox } from "~/componets/StatusClass";
import { Setinhas } from "~/componets/Image/Icons/iconUpDownArrow";

export default function RegistrerStudent() {
  return (
    <main className="bg-fundo font-sans">
      <UserNameAndLogo />
      <Coluna className="ml-28 mr-24">
        <h1 className="mb-5 mt-14 h-11 w-56 items-center text-2xl font-black">
          Alunos
        </h1>
        <Linha className="justify-between">
          <Statisticsbox Statusnumber={"62"} Statusname={"Estudantes"} />
          <Statisticsbox Statusnumber={"10"} Statusname={"Professor"} />
          <Statisticsbox Statusnumber={"78%"} Statusname={"Frequência"} />
          <Statisticsbox Statusnumber={"15%"} Statusname={"Desistentes"} />
          <Statisticsbox Statusnumber={"56"} Statusname={"Instrumentos"} />
        </Linha>
        <CaixaBranca className="mb-7 mt-14 px-10">
          <Linha className="my-14 justify-between py-2 pr-3">
            <h2 className=" text-cinzaclaro">Turmas em andamento</h2>
            <p className="text-lg font-extrabold">Alunos</p>
            <p className="text-cinzaclaro">Professores</p>
            <Lupinha />
            <div className="flex w-1/2 justify-end">
              <button className=" h-12 w-44 rounded-md bg-azulClaro text-white">
                Inserir Aluno
              </button>
            </div>
          </Linha>
          <Linha className="h-11 text-cinzaclaro">
            <text>espaço branco</text>
            <div className="w-72">
              <text>aluno</text>
              <Setinhas />
            </div>
            <text className="w-60">nome da turma</text>
            <text className="w-60">local de residencia</text>
            <text className="w-60">status</text>
            <text className="w-28">finalização</text>
          </Linha>
        </CaixaBranca>
      </Coluna>
    </main>
  );
}
