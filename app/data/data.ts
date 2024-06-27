import {
    ArrowDownIcon,
    ArrowRightIcon,
    ArrowUpIcon,
    CheckCircledIcon,
    CircleIcon,
    CrossCircledIcon,
    QuestionMarkCircledIcon,
    StopwatchIcon,
} from "@radix-ui/react-icons"
import type { JSXElementConstructor } from "react"

export const labels = [
    {
        value: "bug",
        label: "Bug",
    },
    {
        value: "feature",
        label: "Feature",
    },
    {
        value: "documentation",
        label: "Documentation",
    },
]

export const statuses = [
    {
        value: "backlog",
        label: "Backlog",
        icon: QuestionMarkCircledIcon,
    },
    {
        value: "todo",
        label: "A Fazer",
        icon: CircleIcon,
    },
    {
        value: "in progress",
        label: "Fazendo",
        icon: StopwatchIcon,
    },
    {
        value: "done",
        label: "Feito",
        icon: CheckCircledIcon,
    },
    {
        value: "canceled",
        label: "Cancelado",
        icon: CrossCircledIcon,
    },
]

export const caseStatuses: Array<{
    icon?: JSXElementConstructor<any>
    value: string
    label: string
}> = [
        {
            value: "aProtocolar",
            label: "A protocolar",
        },
        {
            value: "peticaoInicial",
            label: "Petição inicial",
        },
        {
            value: "prazoAContestar",
            label: "Prazo a contestar",
        },
        {
            value: "aguardandoAudiencia",
            label: "Aguardando audiência",
        },
        {
            value: "arquivado",
            label: "Arquivado",
        }
    ]

export const caseTypes: Array<{
    icon?: JSXElementConstructor<any>
    value: string
    label: string
}> = [
        {
            value: "naoAjuizado",
            label: "Não ajuizado",
        },
        {
            value: "ajuizado",
            label: "Ajuizado",
        },
        {
            value: "administrativo",
            label: "Administrativo",
        },
    ]

export const priorities = [
    {
        label: "Baixa",
        value: "low",
        icon: ArrowDownIcon,
    },
    {
        label: "Média",
        value: "medium",
        icon: ArrowRightIcon,
    },
    {
        label: "Alta",
        value: "high",
        icon: ArrowUpIcon,
    },
]

export const taskSchedule = [
    {
        label: "Atrasado",
        value: "late",
    },
    {
        label: "Hoje",
        value: "today",
    },
    {
        label: "Amanhã",
        value: "tomorrow",
    },
    {
        label: "",
        value: "unscheduled",
    }
]

export const scheduleType = [
    {
        label: "Tarefa",
        value: "task",
    },
    {
        label: "Agenda",
        value: "event",
    },
    {
        label: "Atualização",
        value: "update",
    },
]