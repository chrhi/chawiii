import { prisma } from "@/lib/prisma";
import { isValidEmail } from "@/utils";
import { NextResponse } from "next/server";

const user_valide = async ({email , password} : {email : string , password : string}) => {

    const user = await prisma.user.findUnique({
        where : {
            email
        }
    }).catch(error => {
        throw new Error("an error in the level of the server")
    })
    if(user?.password === password){
        return user
    }
    return null
}



export async function POST(request: Request) {

    const {ApiKey , email , password } = await request.json()

    //we need a function to valided the api key

    if(!isValidEmail(email)){
        return new NextResponse("the email is not valide" , {status : 400})
    }

    const user = await user_valide({email , password}).catch(error => {
        return new NextResponse("server error" , {status : 500})
    })

    if(user){
        return NextResponse.json(user)
    }

    return new NextResponse("Unauthorized " , {status : 401})
   
}