
import { json } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import { DataTable } from "~/components/data-table/data-table"
import {
  Card,
} from "~/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs"
import { Statisticsbox } from "~/componets/StatusClass"
import { Header } from "~/componets/header"
import { studentColumns } from "~/data/alunocolumns"
import { teachercolumns } from "~/data/teachercolumns"
import { turmaColumns } from "~/data/turmacolumns"
import { prisma } from "~/db.server"


export const loader = async () => {
  const turmas = await prisma.turmaemandamento.findMany(
    {
      include: {
        professor: true,
        categorias: true,
        alunos: true
      }
    }
  )

  const alunos = await prisma.aluno.findMany(
    {
      include: {
        Turmaemandamento: true,

      }
    }
  )
  const professor = await prisma.professor.findMany()

  return json({ turmas, alunos, professor })
}

export default function Dashboard() {
  const { turmas, alunos, professor } = useLoaderData<typeof loader>()

  const turmaTransformada = turmas.map(turma => ({
    id: turma.id,
    name: turma.nomedaturma,
    professor: turma.professor.nome,
    aluno: turma.alunos.map(aluno => aluno.nome),
    andamento: 60,
    finalização: turma.finalizacao,
    categoria: turma.categorias.map(categoria => categoria.nome).join(", ")
  }))

  const alunosTraduzidos = alunos.map(
    (aluno) => {
      return {
        id: aluno.id,
        name: aluno.nome,
        nomedaturma: aluno.Turmaemandamento?.nomedaturma,
        status: aluno.status,
        localderesidencia: aluno.localderesidencia ? aluno.localderesidencia : "",
        finalização: aluno.finalizacao
      };
    })

  const professorTraduzidos = professor.map((professor) => {
    return {
      id: professor.id,
      nome: professor.nome,
      especilidade: professor.especilidade,
      localderesidencia: professor.localderesidencia,
      status: professor.status,
      finalização: professor.finalizacao
    }
  }
  )

  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-5">
          <Statisticsbox Statusnumber={"32"} Statusname={"Estudantes"} />
          <Statisticsbox Statusnumber={"10"} Statusname={"Professor"} />
          <Statisticsbox Statusnumber={"78%"} Statusname={"Frequência"} />
          <Statisticsbox Statusnumber={"15%"} Statusname={"Desistentes"} />
          <Statisticsbox Statusnumber={"56"} Statusname={"Instrumentos"} />
        </div>
        <div className="">
          <Card x-chunk="dashboard-06-chunk-0">
            <Tabs defaultValue="Turmas em Andamento" className="w-full">
              <TabsList>
                <TabsTrigger value="Turmas em Andamento">Turmas em Andamento</TabsTrigger>
                <TabsTrigger value="Alunos">Alunos</TabsTrigger>
                <TabsTrigger value="Professores">Professores</TabsTrigger>
              </TabsList>
              <TabsContent value="Turmas em Andamento">
                <DataTable data={turmaTransformada} columns={turmaColumns} />
              </TabsContent>
              <TabsContent value="Alunos" className="w-full">
                <DataTable data={alunosTraduzidos} columns={studentColumns} />
              </TabsContent>
              <TabsContent value="Professores">
                <DataTable data={professorTraduzidos} columns={teachercolumns} />
              </TabsContent>


            </Tabs>
          </Card>
        </div>
      </main>
    </div>

  )
}
