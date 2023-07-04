import { NextResponse } from 'next/server'

export async function GET(request: Request) {

    console.log("this route is working")
 
    
  return NextResponse.json({
    from : "abdullah ",
    message : "the api is working"
})
}