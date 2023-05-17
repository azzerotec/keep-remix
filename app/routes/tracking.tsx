import { UserNameAndLogo } from "~/componets/UserNameAndLogo";
import { CaixaBranca, Coluna, Linha } from "./_index";
import { Lupinha } from "~/componets/Image/Icons/IcondeBusca";
import { DownloadIcon } from "~/componets/Image/Icons/icondownload";
import { ClassCase } from "~/componets/ClassCase";

export default function Tracking() {
  return (
    <main className="bg-fundo font-sans">
      <UserNameAndLogo />
      <Coluna className="ml-28 mr-24">
        <h1>Acompanhamento</h1>
        <Linha className="justify-between">
          <CaixaBranca className="h-28 w-56">
            <Linha>
              <p>img</p>
              <Coluna>
                <p className="text-3xl font-bold">32</p>
                <p className="text-sm text-cinzaclaro">estudantes</p>
              </Coluna>
            </Linha>
          </CaixaBranca>
          <CaixaBranca className="h-28 w-56">
            <Linha>
              <p>img</p>
              <Coluna>
                <p className="text-3xl font-bold">10</p>
                <p className="text-sm text-cinzaclaro">Professores</p>
              </Coluna>
            </Linha>
          </CaixaBranca>
          <CaixaBranca className="h-28 w-56">
            <Linha>
              <p>img</p>
              <Coluna>
                <p className="text-3xl font-bold">78%</p>
                <p className="text-sm text-cinzaclaro">Frequência</p>
              </Coluna>
            </Linha>
          </CaixaBranca>
          <CaixaBranca className="h-28 w-56">
            <Linha>
              <p>img</p>
              <Coluna>
                <p className="text-3xl font-bold">15%</p>
                <p className="text-sm text-cinzaclaro">Desistentes</p>
              </Coluna>
            </Linha>
          </CaixaBranca>
          <CaixaBranca className="h-28 w-56">
            <Linha>
              <p>img</p>
              <Coluna>
                <p className="text-3xl font-bold">56</p>
                <p className="text-sm text-cinzaclaro">Instrumentos</p>
              </Coluna>
            </Linha>
          </CaixaBranca>
        </Linha>
        <CaixaBranca className="mb-7 mt-14 px-24">
          <Linha className="my-14 justify-between py-2 pr-3">
            <h2>Turmas em andamento</h2>
            <p>Alunos</p>
            <p>Professores</p>
            <Lupinha />
            <button className="flex w-1/2 justify-end">Criar Nova Turma</button>
          </Linha>
          <Linha>
            <ClassCase
              NomedaTurma={"Nome da turma"}
              Professor={"Professor"}
              Alunos={"Alunos"}
              Andamento={"Andamento"}
              Finalização={"Finalização"}
              Categoria={"Categoria"}
            />
          </Linha>
          <Linha>
            <ClassCase
              NomedaTurma={"Turma do prof João"}
              Professor={"Paulo de Oliveira dos Santos"}
              Alunos={"Alunos img"}
              Andamento={"Andamento"}
              Finalização={"23/11/2021"}
              Categoria={"Violão"}
            />
            <DownloadIcon />
          </Linha>
          <Linha>
            <ClassCase
              NomedaTurma={"Expressão corporal"}
              Professor={"Airton Pereira"}
              Alunos={"Alunos img"}
              Andamento={"Andamento"}
              Finalização={"03/05/2021"}
              Categoria={"Violão"}
            />
            <DownloadIcon />
          </Linha>
          <Linha>
            <ClassCase
              NomedaTurma={"Violão"}
              Professor={"Joaquim Barcelos da Costa"}
              Alunos={"Alunos img"}
              Andamento={"Andamento"}
              Finalização={"15/08/2021"}
              Categoria={"Violão"}
            />
            <DownloadIcon />
          </Linha>
          <Linha>
            <ClassCase
              NomedaTurma={"Dança"}
              Professor={"Ramon Sanchez da Silva"}
              Alunos={"Alunos img"}
              Andamento={"Andamento"}
              Finalização={"20/07/2021"}
              Categoria={"Violão"}
            />
            <DownloadIcon />
          </Linha>
          <Linha>
            <ClassCase
              NomedaTurma={"Cordas orquestra"}
              Professor={"Mariana Cardoso"}
              Alunos={"Alunos img"}
              Andamento={"Andamento"}
              Finalização={"20/07/2021"}
              Categoria={"Violão"}
            />
            <DownloadIcon />
          </Linha>
          <Linha>
            <ClassCase
              NomedaTurma={"Flauta"}
              Professor={"Gabriela Portanova"}
              Alunos={"Alunos img"}
              Andamento={"Andamento"}
              Finalização={"03/05/2021"}
              Categoria={"Violão"}
            />
            <DownloadIcon />
          </Linha>
          <Linha>
            <ClassCase
              NomedaTurma={"Clarinete"}
              Professor={"Karina Sunagawa"}
              Alunos={"Alunos img"}
              Andamento={"Andamento"}
              Finalização={"15/08/2021"}
              Categoria={"Violão"}
            />
            <DownloadIcon />
          </Linha>
        </CaixaBranca>
      </Coluna>
    </main>
  );
}
