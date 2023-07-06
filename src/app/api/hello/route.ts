import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'


export async function GET(request: Request) {

  
  const {action , id , userId , title , description } = await request.json()

  if(!action ){
    return NextResponse.json({
      from : "abdullah ",
      message : "the api is working",
      error : "you need to provide an action"
  })
  } 

  if(action === "get all requests"){
    const requests = await prisma.request.findMany()

    return NextResponse.json({
      from : "abdullah ",
      message : "here are all the requests", 
      requests
   })
  }

  if(action === "get all requests of user"){
    const requests = await prisma.request.findMany({
      where :{
        userId
      }
    })

    return NextResponse.json({
      from : "abdullah ",
      message : "here are all the requests", 
      requests
   })
  }

  if(action === "get one request"){
    const requests = await prisma.request.findMany({
      where :{
        id
      }
    })

    return NextResponse.json({
      from : "abdullah ",
      message : "here are all the users", 
      requests
   })
  }

  


}

export async function POST(request: Request) {

   

    const {action , id , userId , title , description } = await request.json()

    if(!action ){
      return NextResponse.json({
        from : "abdullah ",
        message : "the api is working",
        error : "you need to provide an action"
    })
    } 
   

    if(action === "create request"){
      const request_just_created  = await prisma.request.create({
        data : {
         description , 
         title , 
         userId, 
        }
      })
         return NextResponse.json({
                from : "abdullah ",
                message : "request has been created",
                "request created" : request_just_created
          })
    }

    if(action === "update request"){
      const request_just_created  = await prisma.request.update({
        data : {
         description , 
         title , 
         userId, 
        },
        where:{id}
      })
      return NextResponse.json({
        from : "abdullah ",
        message : "request has been updated",
        "request updated" : request_just_created
      })
    }

    if(action === "delete request"){
      const request_just_created  = await prisma.request.delete({
       
        where:{id}
      })
      return NextResponse.json({
        from : "abdullah ",
        message : "request has been deleted",
        "request deleted" : request_just_created
      })
    }
    
    return NextResponse.json({
        from : "abdullah ",
        message : "the api is working but the provided action not working ",
        action : action
    })
}

