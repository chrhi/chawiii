import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {

    const {
        action , 
        id ,
        userId ,
        ServiceId ,
        title,
        description
     
         } = await request.json()

    if(!action ){
      return NextResponse.json({
        from : "abdullah ",
        message : "the api is working",
        error : "you need to provide an action"
    })
    } 
   

    if(action === "give service to user"){
        const deal = await prisma.deal.create({
          data :{
            userId   , 
            ServiceId   ,
            title  ,
          }
        })
        return   NextResponse.json({
          from : "abdullah ",
          message : "not that the userid is the client id we add that id to an array of clients , you can find the service updated version ",
          updatedService : deal
      })
    }
    if(action === "get user services"){

      const servicesId = await prisma.deal.findMany({where : {id : userId}})

      const data = []

      for(let i = 0 ; i < servicesId.length ; i++){
        const service = await prisma.deal.findUnique({where : {id : servicesId[i].ServiceId || ""}})
        data.push(service)
      }
      return   NextResponse.json({
        from : "abdullah ",
        message : "not that if you provide an id of employee or client the return is going to be the assigned services",
        updatedService : data
       })
     }
     if(action === "ask for a report"){

      const request = await prisma.request.create({
        data:{
          description, 
          title , 
          userId
        }
      })
      return   NextResponse.json({
        from : "abdullah ",
        message : "here it is the request you have just  created",
        request
       })
     }
     if(action === "get user report"){

      const reports = await prisma.report.findMany({
           where :{
                     userId 
                  }
          })
      return   NextResponse.json({
        from : "abdullah ",
        message : "here are all the reports",
        reports
       })
     } 
}
