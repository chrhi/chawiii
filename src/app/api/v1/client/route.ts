


// get my employees 

import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req : NextRequest){
    const {
         action ,
         id ,
         employeeId ,
         serviceId 
        } = await req.json()

    // api key validation 

    // inputs validation

    if(!action){
        return    new NextResponse("need to provid an action" , {status : 400})    
    }


    switch(action){
        case  "get my employees" :{

            if(!id){
                return    new NextResponse("id in the body is required" , {status : 400}) 
            }

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
            if(!id){
                return    new NextResponse("id in the body is required" , {status : 400}) 
            }

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
            if(!id || !serviceId){
                return    new NextResponse(`
                service id is reuired -> serviceId ='jhjere'
                client is is reuired and it should be like this ->   'id' : 'fkdd,ms'
                ` , {status : 400}) 
            }

            const serviceAsked = await prisma.service.findFirst({
                where:{
                    id : serviceId
                }
            }).catch(error => {
                return new NextResponse("server error" , {status : 500})
            })
        

            await prisma.deal.create({
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

            if(!id || !employeeId){
                return    new NextResponse(`
                employee id is reuired -> employeeId ='jhjere'
                client is is reuired and it should be like this ->   'id' : 'fkdd,ms'
                ` , {status : 400}) 
            }

            const askedEmployee = await prisma.user.findUniqueOrThrow({
                where :{
                    id : employeeId
                }
            }).catch(error => {
                return new NextResponse("server error" , {status : 500})
            })

            const contract = await prisma.workContract.create({
                data :{
                    password : askedEmployee.type,
                    type :  askedEmployee.type,
                     //@ts-ignore
                    bio :  askedEmployee.bio,
                    clientId : id , 
                     //@ts-ignore
                    email :  askedEmployee.email,
                    employeeId : employeeId , 
                     //@ts-ignore
                    image :  askedEmployee.image,
                     //@ts-ignore
                    name :  askedEmployee.name,

                }
            }).catch(error => {
                return new NextResponse("server error" , {status : 500})
            })
            return    new NextResponse("ok" , {status : 200}) 
        }
        default: {
            return    new NextResponse("need to provid a valid action" , {status : 400})    
        }
    }

}


