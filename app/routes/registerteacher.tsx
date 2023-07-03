import { UserNameAndLogo } from "~/componets/UserNameAndLogo";
import { CaixaBranca, Coluna, Linha } from "./_index";
import { Statisticsbox } from "~/componets/StatusClass";
import { Setinhas } from "~/componets/Image/Icons/iconUpDownArrow";
import { TableDetails } from "~/componets/TableDetails";
import { LupinhaCinza } from "~/componets/Image/Icons/LupinhaCinza";

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
            <p className="text-cinzaclaro">Alunos</p>
            <p className="text-lg font-extrabold">Professores</p>
            <LupinhaCinza />
            <div className="flex w-1/2 justify-end">
              <button className=" h-12 w-44 rounded-md bg-azulClaro text-white">
                Inserir Professor
              </button>
            </div>
          </Linha>
          <Linha className=" border-b text-cinzaclaro">
            <text className="h-11 w-12 p-2"></text>
            <Linha className="h-11 w-72 justify-between p-2">
              <text>Aluno</text>
              <div className="flex items-center">
                <Setinhas />
              </div>
            </Linha>
            <text className="h-11 w-60 p-2">Nome da turma</text>
            <text className="h-11 w-60 p-2">Local de residencia</text>
            <text className="h-11 w-60 p-2">Status</text>
            <text className="h-11 w-28 p-2">Finalização</text>
          </Linha>
          <TableDetails
            NumerodaLista={"1"}
            NomedoAluno={"Manuel Pereira dos Santos"}
            NomedaTurma={"Violino"}
            LocaldeResidencia={"Ribeirão Preto"}
            Status={"Em andamento"}
            Finalização={"03/08/2021"}
          />
          <TableDetails
            NumerodaLista={"2"}
            NomedoAluno={"Natalie Schmidt"}
            NomedaTurma={"Expressão corporal"}
            LocaldeResidencia={"São Paulo"}
            Status={"Finalizado"}
            Finalização={"20/07/2021"}
          />
          <TableDetails
            NumerodaLista={"3"}
            NomedoAluno={"Carlos Silvério de Toledo"}
            NomedaTurma={"Violão"}
            LocaldeResidencia={"Diadema"}
            Status={"Em andamento"}
            Finalização={"23/11/2021"}
          />
          <TableDetails
            NumerodaLista={"4"}
            NomedoAluno={"Paulo César tristoni"}
            NomedaTurma={"Dança"}
            LocaldeResidencia={"Ribeirão Pires"}
            Status={"Em andamento"}
            Finalização={"12/08/2021"}
          />
          <TableDetails
            NumerodaLista={"5"}
            NomedoAluno={"Natan de Souza e Silva"}
            NomedaTurma={"Cordas orquestra"}
            LocaldeResidencia={"São Paulo"}
            Status={"Em andamento"}
            Finalização={"20/09/2021"}
          />
          <TableDetails
            NumerodaLista={"6"}
            NomedoAluno={"Sandro Pascoal Ferreira"}
            NomedaTurma={"Flauta"}
            LocaldeResidencia={"Diadema"}
            Status={"Em andamento"}
            Finalização={"23/11/2021"}
          />
          <TableDetails
            NumerodaLista={"7"}
            NomedoAluno={"José Carlos Estudiene"}
            NomedaTurma={"Clarinete"}
            LocaldeResidencia={"Ribeirão Preto"}
            Status={"Finalizado"}
            Finalização={"12/08/2021"}
          />
        </CaixaBranca>
      </Coluna>
    </main>
  );
}
