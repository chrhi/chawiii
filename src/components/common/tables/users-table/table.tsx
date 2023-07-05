"use client"

import { useUser } from '@/lib/hooks/use-user'
import { FC, useEffect, useState } from 'react'
import { columns } from "@/components/common/tables/users-table/columns"
import { DataTable } from "@/components/common/tables/users-table/data-table"


const Table: FC = () => {
    const {  user} = useUser()
    
    const [data , setDate] = useState<any[]>([])

    

    useEffect(() => {
      const DataFORMATED = user?.map((item: { id: any; name: any; email: any; type: any }) => {
        return{
          id: item.id,
          name : item.name , 
          status: "active",
          email : item.email , 
          type: item.type
        }
      })
      setDate(DataFORMATED)
    },[])
  
    
  
  return  <DataTable data={ data ? data : [] } columns={columns} />
}

export default Table