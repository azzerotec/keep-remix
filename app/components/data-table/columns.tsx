"use client"

import type { ColumnDef } from "@tanstack/react-table"

import { caseStatuses, caseTypes, labels, priorities, statuses as types } from "~/data/data"

import { DataTableColumnHeader } from "./data-table-column-header"
import { DataTableRowActions } from "./data-table-row-actions"

import { Checkbox } from "../ui/checkbox"
import { Badge } from "../ui/badge"
import type { Case, Client, Task } from "~/data/schema"

export const taskColumns: ColumnDef<Task>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
                className="translate-y-[2px]"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
                className="translate-y-[2px]"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "id",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="ID" />
        ),
        cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "title",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Tarefa" />
        ),
        cell: ({ row }) => {
            const label = labels.find((label) => label.value === row.original.label)

            return (
                <div className="flex space-x-2">
                    {label && <Badge variant="outline">{label.label}</Badge>}
                    <span className="max-w-[500px] truncate font-medium">
                        {row.getValue("title")}
                    </span>
                </div>
            )
        },
    },
    {
        accessorKey: "status",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Status" />
        ),
        cell: ({ row }) => {
            const status = types.find(
                (status) => status.value === row.getValue("status")
            )

            if (!status) {
                return null
            }

            return (
                <div className="flex w-[100px] items-center">
                    {status.icon && (
                        <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
                    )}
                    <span>{status.label}</span>
                </div>
            )
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },
    {
        accessorKey: "priority",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Prioridade" />
        ),
        cell: ({ row }) => {
            const priority = priorities.find(
                (priority) => priority.value === row.getValue("priority")
            )

            if (!priority) {
                return null
            }

            return (
                <div className="flex items-center">
                    {priority.icon && (
                        <priority.icon className="mr-2 h-4 w-4 text-muted-foreground" />
                    )}
                    <span>{priority.label}</span>
                </div>
            )
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },
    {
        id: "actions",
        cell: ({ row }) => <DataTableRowActions row={row} />,
    },
]

export const clientColumns: ColumnDef<Client>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
                className="translate-y-[2px]"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
                className="translate-y-[2px]"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "name",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Cliente" />
        ),
        cell: ({ row }) => <div className="w-full">{row.getValue("name")}</div>,
        enableSorting: false,
        enableHiding: false,
    },
    {
        id: "CPF",
        accessorKey: "cpf",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="CPF" />
        ),
        cell: ({ row }) => <div className="w-[80px]">{row.getValue("CPF")}</div>,
    },
    {
        id: "Contato",
        accessorKey: "personalContact",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Contato" />
        ),
        cell: ({ row }) => <div className="w-[80px]">{row.getValue("Contato")}</div>,
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },
    {
        id: "Localização",
        accessorKey: "province",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Localização" />
        ),
        cell: ({ row }) => <div className="w-[80px]">{row.getValue("Localização")}</div>,
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },
]

export const caseColumns: ColumnDef<Case>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
                className="translate-y-[2px]"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
                className="translate-y-[2px]"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "caseNumber",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Numero do processo" />
        ),
        cell: ({ row }) => <div className="w-full">{row.getValue("caseNumber")}</div>,
        enableSorting: false,
        enableHiding: false,
    },
    {
        id: "Cliente",
        accessorKey: "clientName",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Cliente" />
        ),
        cell: ({ row }) => <div className="w-full">{row.getValue("Cliente")}</div>,
    },
    {
        id: "Tipo",
        accessorKey: "type",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Tipo" />
        ),
        cell: ({ row }) => {
            const type = caseTypes.find(
                (type) => type.value === row.getValue("Tipo")
            )

            if (!type) return null

            return (
                <div className="flex w-[100px] items-center">
                    {type.icon ? (
                        <type.icon className="mr-2 h-4 w-4 text-muted-foreground" />
                    ) : null}
                    <span>{type.label}</span>
                </div>
            )
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },
    {
        id: "Status",
        accessorKey: "status",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Status" />
        ),
        cell: ({ row }) => {
            const status = caseStatuses.find(
                (status) => status.value === row.getValue("Status")
            )

            if (!status) return null

            return (
                <div className="flex w-[100px] items-center">
                    {status.icon ? (
                        <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
                    ) : null}
                    <span>{status.label}</span>
                </div>
            )
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },
]