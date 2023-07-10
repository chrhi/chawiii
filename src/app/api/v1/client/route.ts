


// get my employees 

import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// get my services

// buy new service 

// assign a service to an employee 



export async function POST(req : Response){
    const {
         action ,
         id ,
         employeeId ,
         serviceId 
        } = await req.json()

    // api key validation 

    // inputs validation


    switch(action){
        case  "get my employees" :{

            const employees = await prisma.workContract.findMany({
                where :{
                    clientId : id
                }
            }).catch(error => {
                return new NextResponse("server error" , {status : 500})
            })
        
            return  NextResponse.json(employees)
           
        }
        case  "get my services" :{

            const services = await prisma.deal.findMany({
                where :{
                    userId : id
                }
            }).catch(error => {
                return new NextResponse("server error" , {status : 500})
            })
        
            return  NextResponse.json(services)

           
        }
        case  "buy new service" :{

            const serviceAsked = await prisma.service.findFirst({
                where:{
                    id : serviceId
                }
            }).catch(error => {
                return new NextResponse("server error" , {status : 500})
            })
        

            const deal = await prisma.deal.create({
             data :{
                //@ts-ignore
                title : serviceAsked?.title ,
                ServiceId : serviceId , 
                userId : id , 
                 //@ts-ignore
                cost : serviceAsked?.cost ,
                 //@ts-ignore
                description : serviceAsked?.description ,
                duration : null , 
                 //@ts-ignore
                image : serviceAsked?.image , 
                url : serviceAsked?.url
             }
            }).catch(error => {
                return new NextResponse("server error" , {status : 500})
            })
        
            return    new NextResponse("ok" , {status : 200})

           
        }
        case  "assign a service to an employee" :{

            const askedEmployee = await prisma.user.findUniqueOrThrow({
                where :{
                    id : employeeId
                }
            }).catch(error => {
                return new NextResponse("server error" , {status : 500})
            })

            const contract = await prisma.workContract.create({
                data :{
                    password : askedEmployee
                }
            })

            break; 
        }
    }

}

export async function PATCH(req : Response){
    
}

export async function PUT(req : Response){
    
}

