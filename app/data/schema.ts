import { z } from "zod"

export const taskSchema = z.object({
    id: z.string(),
    title: z.string(),
    status: z.string(),
    label: z.string(),
    priority: z.string(),
})

export type Task = z.infer<typeof taskSchema>

export const clientSchema = z.object({
    id: z.string(),
    name: z.string(),
    cpf: z.string(),
    personalContact: z.string(),
    province: z.string().optional(),
})

export type Client = z.infer<typeof clientSchema>

export const caseSchema = z.object({
    id: z.number(),
    number: z.string(),
    clientName: z.string(),
    status: z.string(),
    type: z.string(),
})

export type Case = z.infer<typeof caseSchema>

export const caseUpdateSchema = z.object({
    processNumber: z.string(),
    clientName: z.string(),
    date: z.string(),
    content: z.string(),
})

export type CaseUpdate = z.infer<typeof caseUpdateSchema>

export const activitySchema = z.object({
    date: z.string(),
    content: z.string(),
    status: z.string(),
    title: z.string(),
    type: z.string(),
})

export type Activity = z.infer<typeof activitySchema>