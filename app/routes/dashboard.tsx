
import {
  CircleUser,
} from "lucide-react"

import { Button } from "~/components/ui/button"
import {
  Card,
} from "~/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs"
import { DataTable } from "~/componets/DataTable"

import { Logo } from "~/componets/Image/logo"
import { Statisticsbox } from "~/componets/StatusClass"
import { Header } from "~/componets/header"

export default function Dashboard() {
  return (
   <div className="flex min-h-screen w-full flex-col">
      <Header/>
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
            <Tabs defaultValue="account" className="w-[400px]">
              <TabsList>
                <TabsTrigger value="Turmas em Andamento">Turmas em Andamento</TabsTrigger>
                <TabsTrigger value="Alunos">Alunos</TabsTrigger>
                <TabsTrigger value="Professores">Professores</TabsTrigger>
              </TabsList>
              <TabsContent value="account"></TabsContent>
              <TabsContent value="password"></TabsContent>
            </Tabs>

            <DataTable />
            </Card>
        </div>
      </main>
    </div> 

  )
}
