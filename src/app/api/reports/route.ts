import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'


export async function GET(request: Request) {

  const {action , title , ClientInformation , Date , Details , Request , id  , userId} = await request.json()

 const reports = await prisma.report.findMany({
  where:{
    userId
  }
 })

  return NextResponse.json({
    from : "abdullah ",
    message : "here are all the users", 
    reports
 })
}

export async function POST(request: Request) {

    console.log("this route is working")

    const {action , title , ClientInformation , Date , Details , Request , id  , userId} = await request.json()

    if(!action ){
      return NextResponse.json({
        from : "abdullah ",
        message : "the api is working",
        error : "you need to provide an action"
    })
    } 

    if(action === "create report"){
      const report  = await prisma.report.create({
        data : {
          title , ClientInformation  , Details , Request , userId
          
        }
      })
         return NextResponse.json({
                from : "abdullah ",
                message : "report has been created",
                "report created" : report,
               
          })
    }
    if(action === "update report"){
      const report  = await prisma.report.update({
        data : {
          title , ClientInformation  , Details , Request 
          
        },
        where : {id}
      })
         return NextResponse.json({
                from : "abdullah ",
                message : "report has been updated",
                "report updated" : report,
          })
    }
    if(action === "delete report"){
      const report  = await prisma.report.delete({
        where : {id}
      })
         return NextResponse.json({
                from : "abdullah ",
                message : "report has been updated",
                "report deleted" : report,
          })
    }

    return NextResponse.json({
        from : "abdullah ",
        message : "the api is working but the provided action not working ",
        action : action
    })
}
