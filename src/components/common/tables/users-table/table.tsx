"use client"

import { useToast } from "@/components/ui/use-toast"
import { FC, useEffect, useState } from 'react'
import { columns } from "@/components/common/tables/users-table/columns"
import { DataTable } from "@/components/common/tables/users-table/data-table"
import axios from 'axios'
import useSWR from 'swr'

const url = process.env.NODE_ENV === "development" ? "http://localhost:3000/api/users" :"https://chawiii.vercel.app/api/users"
const fetcher = () =>  axios.get(url).then((response => {
  return response
}))

const Table: FC = () => {

  const {toast} = useToast()
  const [data , setDate] = useState<any[]>([])
  
  const {   mutate } = useSWR(`/api/user`, fetcher , {
    onSuccess: (data) => {
      const DataFORMATED = data.data.user?.map((item: { id: any; name: any; email: any; type: any }) => {
        return{
          id: item.id,
          name : item.name , 
          status: "active",
          email : item.email , 
          type: item.type
        }
      })
      setDate(DataFORMATED)
    },
    onError : (err) => {
      console.log(err)
      toast({
        title : "error", 
        description : err
      })
    }
  } )
    
    

    

    useEffect(() => {
    
    },[])
  
    
  
  return  <DataTable mutate={mutate} data={ data ? data : [] } columns={columns} />
}

export default Table