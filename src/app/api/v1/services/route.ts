import { prisma } from "@/lib/prisma";
import { register_request } from "@/utils/request-register";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req : NextRequest){

    
    await register_request({
        apiKey : "not provided yet",
        endPoint :"/v1/services",
        responseTime :"100ms" , 
        status :"200 ok"
    })

    //get all services 
    const services = await prisma.service.findMany().catch(error => {
        return new NextResponse("server error" , {status : 500})
    })

    return  NextResponse.json(services)
}

