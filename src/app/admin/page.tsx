import { Metadata } from "next"

import AdminHeader from "@/components/common/header/admin-header"
// import { prisma } from "@/lib/prisma"

import Table from "@/components/common/tables/users-table/table"


// async function getData() {
//   const users = await prisma.user.findMany()
//   return users
// }

export const metadata: Metadata = {
  title: "Admin",
  description: "A task and issue tracker build using Tanstack Table.",
}


 


export default async function Admin() {

  // const users = await getData()


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
        <Table />
       
      </div>
    </>
  )
}
