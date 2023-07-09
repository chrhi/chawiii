import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {

    const {
        action , 
        id ,
        userId ,
        ServiceId ,
        title,
        description,
        employeeId
     
         } = await request.json()

    if(!action ){
      return NextResponse.json({
        from : "abdullah ",
        message : "the api is working",
        error : "you need to provide an action"
    })
    } 
   

    if(action === "give service to employee"){
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
     if(action === "get client services"){
          //this will get all the id of the services
         const deals = await prisma.deal.findMany({
          where :{
            userId 
          }
         })

         const services = await prisma.service.findMany()

         const  data = deals.map(async (item) => {
            const clientServices = services.filter(service => service.id === item.ServiceId )
            return clientServices
         })

         return   NextResponse.json({
          from : "abdullah ",
          message : "here are all the services that this client has ",
          services : data
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

     if(action === "assign service to employee"){
      const deal = await prisma.deal.create({
        data : {
          userId , 
          employeeId,
          ServiceId,
          title,

        }
      })
      return   NextResponse.json({
        from : "abdullah ",
        message : "here is the deal's infomations",
        deal
       })
     }

     
     if(action === "get all services"){
      const services = await prisma.service.findMany()
      return   NextResponse.json({
        from : "abdullah ",
        message : "here is the deal's infomations",
        services
       })
     }
}

