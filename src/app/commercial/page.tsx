import { promises as fs } from "fs"
import path from "path"
import { Metadata } from "next"
import Image from "next/image"
import { z } from "zod"

import { columns } from "@/components/common/tables/users-table/columns"
import { DataTable } from "@/components/common/tables/users-table/data-table"

import CommercialHeader from "@/components/common/header/commercial-header"

export const metadata: Metadata = {
  title: "Tasks",
  description: "A task and issue tracker build using Tanstack Table.",
}



export default async function TaskPage() {
  

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
        {/* <DataTable data={tasks} columns={columns} /> */}
      </div>
    </>
  )
}