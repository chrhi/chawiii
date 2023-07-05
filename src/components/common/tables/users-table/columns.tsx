"use client"

import { ColumnDef } from "@tanstack/react-table"
import { openUpdateModel } from "@/global/useStore"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"

import { useUser } from "@/lib/hooks/use-user"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type user = {
  id: string
  name : string , 
  status: string,
  email : string , 
  type: string
}

export const columns: ColumnDef<user>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    id: "actions",
    cell: ({ row }) => {
     
      const setShowModel = openUpdateModel(state =>  state.setShowModel)
      const setUserId = openUpdateModel(state =>  state.setId)

      const {mutate} = useUser()

     
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
            className="cursor-pointer"
              onClick={() => navigator.clipboard.writeText(row.original.id)}
            >
             Copier l'ID utilisateur
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            
            <DropdownMenuItem 
        
            className="cursor-pointer !hover:bg-red-300" >Supprimer</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  }
]
