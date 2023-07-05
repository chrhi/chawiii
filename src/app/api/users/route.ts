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

    const {action , email , name , password , id , type } = await request.json()

    if(!action ){
      return NextResponse.json({
        from : "abdullah ",
        message : "the api is working",
        error : "you need to provide an action"
    })
    } 
    if(type !== "commercial" || type !== "client"){
      return NextResponse.json({
        from : "abdullah ",
        message : "the api is working",
        error : "the type can be client or  commercial only"
    })
    }

    if(action === "add user"){
      const user_just_created  = await prisma.user.create({
        data : {
          type : type, //it can be client or  commercial , 
          bio : "", 
          email : email, 
          name : name, 
          image : "https://avatars.githubusercontent.com/u/116351398?s=400&u=e898faa42ed37fa1fbcfce49e92366221ebad9b8&v=4", 
          password 
        }
      })
         return NextResponse.json({
                from : "abdullah ",
                message : "user has been created",
                "user_created" : user_just_created
          })
    }
    if(action === "is user valide"){
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
          valide : false
      })
      }
    }

    return NextResponse.json({
        from : "abdullah ",
        message : "the api is working but the provided action not working ",
        action : action
    })
}

