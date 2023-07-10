

// i have to see the services i am working on them 

import { NextResponse } from "next/server"

// i can see my boss



export async function POST(req : Response){
    const {ApiKey , action , id } = await req.json()

    
    if(!action){
        return    new NextResponse("need to provid an action" , {status : 400})    
    }

    switch(action){
        case  "get my services" :{

            return new NextResponse("we are working on it so it is not available yet" , {status : 200})  

        }
        default :{
            return    new NextResponse("need to provide a valid action" , {status : 400})  
        }
    }
}


