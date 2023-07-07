import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { user_valide } from './auth-logic'

export async function GET(request: Request) {

 const users = await prisma.user.findMany()

  return NextResponse.json({
    from : "abdullah ",
    message : "here are all the users", 
    users
 })
}

export async function POST(request: Request) {

    console.log("this route is working")

    const {action , email , name , password , id , type , bio } = await request.json()

    if(!action ){
      return NextResponse.json({
        from : "abdullah ",
        message : "the api is working",
        error : "you need to provide an action"
    })
    } 
   

    if(action === "auth"){
      const ok = await user_valide({email , password})
      if(ok) {
        const user = await prisma.user.findUnique({
          where : {
              email
          }
       })
  
        return NextResponse.json({
          from : "abdullah ",
          message : "the user is valide",
          valide : true, 
          user 
      })
      }else{
        return NextResponse.json({
          from : "abdullah ",
          message : "the user is not  valide",
          valide : false,
          user : null
      })
      }
    }

    return NextResponse.json({
        from : "abdullah ",
        message : "the api is working but the provided action not working ",
        action : action
    })
}

