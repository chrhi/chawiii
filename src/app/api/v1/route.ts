import { NextRequest } from "next/server";




export async function GET(req : NextRequest){
    return new Response("wolcom to our api it is made by abdullah " , {status : 200})
}



