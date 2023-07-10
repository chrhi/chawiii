import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function GET(req : Response){

    //get all services 
    const services = await prisma.service.findMany().catch(error => {
        return new NextResponse("server error" , {status : 500})
    })

    return  NextResponse.json(services)
}

