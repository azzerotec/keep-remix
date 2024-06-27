import type { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import { Button } from "~/components/ui/button"


export const studentColumns: ColumnDef<{
    id: string
    name: string
    nomeDaTurma?: string;
    localderesidencia: string
    andamento?: number
    finalização?: string
}>[] = [{
    id: "index",
    cell: ({ row }) => (
        <>{row.id}</>
    ),
    enableSorting: false,
    enableHiding: false,
},
{
    accessorKey: "name",
    header: "Aluno",
    cell: ({ row }) => (
        <div className="capitalize">{row.getValue("name")}</div>
    ),
},
{
    accessorKey: "nomedaturma",
    header: ({ column }) => {
        return (
            <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                Nome da Turma
                <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
        )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("nomedaturma")}</div>,
},
{
    accessorKey: "localderesidencia",
    header: "Local de Residencia",
    cell: ({ row }) => (
        <div className="capitalize">{row.getValue("localderesidencia")}</div>
    ),
}, {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
        <div className="capitalize">{row.getValue("status")}</div>
    ),
},
{
    accessorKey: "finalização",
    header: "Finalização",
    cell: ({ row }) => (
        <div className="capitalize">{row.getValue("finalização")}</div>
    ),
},
    ]