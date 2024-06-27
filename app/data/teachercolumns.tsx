import { ColumnDef } from "@tanstack/react-table"

export type Professores = {
    id: string
    nome: string
    especilidade: string
    localderesidencia: string
    status: string
    finalização: string
}

export const teachercolumns: ColumnDef<Professores>[] = [
    {
        id: "index",
        cell: ({ row }) => (
            <>{row.id}</>
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "nome",
        header: "Professor",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("nome")}</div>
        ),
    },
    {
        accessorKey: "localderesidencia",
        header: "Local de residencia",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("localderesidencia")}</div>
        ),
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("status")}</div>
        ),
    },
]