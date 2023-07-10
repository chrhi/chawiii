import { prisma } from "@/lib/prisma"

type Type = {
    status : string , 
    endPoint : string, 
    responseTime : string , 
    apiKey : string
}

export async function register_request ({ status , endPoint ,  responseTime ,  apiKey}:Type){

    await prisma.apiRequest.create({
        
    })
}