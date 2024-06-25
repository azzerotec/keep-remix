
import { json } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"
import type { ColumnDef } from "@tanstack/react-table"
import {
  ArrowUpDown,
} from "lucide-react"
import { DataTable } from "~/components/data-table/data-table"

import { Button } from "~/components/ui/button"
import {
  Card,
} from "~/components/ui/card"
import { Checkbox } from "~/components/ui/checkbox"
import { Progress } from "~/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs"

import { Statisticsbox } from "~/componets/StatusClass"
import { Header } from "~/componets/header"
import { prisma } from "~/db.server"

const columns: ColumnDef<{
  id: string
  name: string
  professor: string
  aluno: string[],
  andamento: number
  finalização: string
  categoria: string
}>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value: any) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value: any) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "name",
      header: "Nome da turma",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("name")}</div>
      ),
    },
    {
      accessorKey: "professor",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Professor
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => <div className="lowercase">{row.getValue("professor")}</div>,
    },
    {
      accessorKey: "aluno",
      header: "Alunos",
      cell: ({ row }) => (
        < div className="capitalize" > {
          row.getValue("aluno")
        }</div>
      ),
    },
    {
      accessorKey: "andamento",
      header: "Andamento",
      cell: ({ row }) => (
        <Progress value={row.getValue("andamento")} />
      ),
    },
    {
      accessorKey: "finalização",
      header: "Finalização",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("finalização")}</div>
      ),
    },
    {
      accessorKey: "categoria",
      header: "Categoria",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("categoria")}</div>
      ),
    },
  ]

const studentColumns: ColumnDef<{
  id: string
  name: string
  professor: string
  aluno: string[],
  andamento: number
  finalização: string
  categoria: string
}>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value: any) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value: any) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "name",
      header: "Nome da turma",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("name")}</div>
      ),
    },
    {
      accessorKey: "professor",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Professor
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
      cell: ({ row }) => <div className="lowercase">{row.getValue("professor")}</div>,
    },
    {
      accessorKey: "aluno",
      header: "Alunos",
      cell: ({ row }) => (
        < div className="capitalize" > {
          row.getValue("aluno")
        }</div>
      ),
    },
    {
      accessorKey: "andamento",
      header: "Andamento",
      cell: ({ row }) => (
        <Progress value={row.getValue("andamento")} />
      ),
    },
    {
      accessorKey: "finalização",
      header: "Finalização",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("finalização")}</div>
      ),
    },
    {
      accessorKey: "categoria",
      header: "Categoria",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("categoria")}</div>
      ),
    },
  ]

export const loader = async () => {
  const Turmas = await prisma.turmaemandamento.findMany(
    {
      include: {
        professor: true,
        categorias: true,
        alunos: true
      }
    }
  )
  return json(Turmas)
}

export default function Dashboard() {
  const turmaemandamento = useLoaderData<typeof loader>()

  const turmaTransformada = turmaemandamento.map(turma => ({
    id: turma.id,
    name: turma.nomedaturma,
    professor: turma.professor.nome,
    aluno: turma.alunos.map(aluno => aluno.nome),
    andamento: 60,
    finalização: turma.finalizacao,
    categoria: turma.categorias.map(categoria => categoria.nome).join(", ")
  }))

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
                <DataTable data={turmaTransformada} columns={columns} />
              </TabsContent>
              <TabsContent value="Alunos" className="w-full">
                <DataTable data={[]} columns={studentColumns} />
              </TabsContent>
              <TabsContent value="Professores"></TabsContent>
            </Tabs>
          </Card>
        </div>
      </main>
    </div>

  )
}
