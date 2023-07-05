import { Metadata } from "next"
import { columns } from "@/components/common/tables/users-table/columns"
import { DataTable } from "@/components/common/tables/users-table/data-table"
import AdminHeader from "@/components/common/header/admin-header"
import { prisma } from "@/lib/prisma"

async function getData() {
  const users = await prisma.user.findMany()
  return users
}

export const metadata: Metadata = {
  title: "Admin",
  description: "A task and issue tracker build using Tanstack Table.",
}


 


export default async function TaskPage() {

  const users = await getData()

  const DataFORMATED = users.map(item => {
    return{
      id: item.id,
      name : item.name , 
      status: "active",
      email : item.email , 
      type: item.type
    }
  })

  

  return (
    <>
     <AdminHeader  />
      <div className="hidden h-full flex-1 max-w-6xl flex-col container space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Tableau des utrlistaerus pour l'Admin</h2>
            <p className="text-muted-foreground">
            Voici une liste de vos rapports !
            </p>
          </div>
          
        </div>
        {/* @ts-ignore */}
        <DataTable data={DataFORMATED} columns={columns} />
      </div>
    </>
  )
}
