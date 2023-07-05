import { Metadata } from "next"

import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { UserAuthForm } from "./(auth)/user-auth-form"


export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
}

export default function AuthenticationPage() {


  

  return (
    <>
     
      <div className="container flex pt-[10%] justify-center">
        
        
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl text-start font-semibold tracking-tight">
                Sign in  
              </h1>
              <p className="text-sm text-start text-muted-foreground">
                Enter your email and password below to sign in to your account
              </p>
            </div>
            <UserAuthForm />
          
            
          </div>
        </div>
      </div>
    </>
  )
}