import { register_request } from "@/utils/request-register";
import { NextRequest } from "next/server";




export async function GET(req : NextRequest){
    
    await register_request({
        apiKey : "not provided yet",
        endPoint :"/",
        responseTime :"100ms" , 
        status :"200 ok"
    })
    return new Response("wolcom to our api it is made by abdullah " , {status : 200})
}



