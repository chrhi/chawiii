import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: Request) {

 const users = await prisma.user.findMany()

  return NextResponse.json({
    from : "abdullah ",
    message : "here are all the users", 
    users
 })
}

export async function POST(request: Request) {

    console.log("this route is working")

    const body = await request.json()

 
    
  return NextResponse.json({
    from : "abdullah ",
    message : "the api is working",
    body
})
}

