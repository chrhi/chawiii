import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req : NextRequest){

    //get all services 
    const services = await prisma.service.findMany().catch(error => {
        return new NextResponse("server error" , {status : 500})
    })

    return  NextResponse.json(services)
}

