import { promises as fs } from "fs"
import path from "path"
import { Metadata } from "next"
import Image from "next/image"
import { z } from "zod"

import { columns } from "@/components/common/tables/users-table/columns"
import { DataTable } from "@/components/common/tables/users-table/data-table"
import { UserNav } from "@/components/common/tables/users-table/user-nav"
import { taskSchema } from "@/components/common/tables/users-table/data/schema"
import CommercialHeader from "@/components/common/header/commercial-header"

export const metadata: Metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
}

// Simulate a database read for tasks.
async function getTasks() {
 

  const tasks = [
    {
      "id": "TASK-8782",
      "title": "You can't compress the program without quantifying the open-source SSD pixel!",
      "status": "in progress",
      "label": "documentation",
      "priority": "medium"
    },
    {
      "id": "TASK-7878",
      "title": "Try to calculate the EXE feed, maybe it will index the multi-byte pixel!",
      "status": "backlog",
      "label": "documentation",
      "priority": "medium"
    }]

  return z.array(taskSchema).parse(tasks)
}

export default async function TaskPage() {
  const tasks = await getTasks()

  return (
    <>
     <CommercialHeader  />
      <div className="hidden h-full flex-1 max-w-6xl flex-col container space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Tableau de bord pour le commercial</h2>
            <p className="text-muted-foreground">
            Voici une liste de vos rapports !
            </p>
          </div>
          
        </div>
        <DataTable data={tasks} columns={columns} />
      </div>
    </>
  )
}