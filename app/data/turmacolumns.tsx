import type { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import { Button } from "~/components/ui/button"
import { Checkbox } from "~/components/ui/checkbox"
import { Progress } from "~/components/ui/progress"

export type Aluno = {
    id: string
    name: string
    professor: string
    aluno: string[],
    andamento: number
    finalização: string
    categoria: string
}

export const turmaColumns: ColumnDef<Aluno>[] = [
    {
        id: "select",
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

