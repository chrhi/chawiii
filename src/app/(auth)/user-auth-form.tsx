"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from 'next/navigation'
import { useSignInUser } from "@/lib/hooks/use-user"



interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {

  const router = useRouter()
 
  const [isLoading , setIsLoading] = React.useState(false)
  const [userInformations , setUserInformations] = React.useState({
    email : "" , 
    password : ""
  })


  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)
    useSignInUser({email : userInformations.email , password : userInformations.password}).then(req => {

      if(req.data.user.type === "admin"){
        router.push("/admin")
      }
      if(req.data.user.type === "commercial"){
        router.push("/commercial")
      }
      setIsLoading(false)
    }).catch(err => {
      setIsLoading(false)
      console.log(err)
    })
 
  }

  

  return (
    <div className={cn("grid gap-6", className)} {...props}>
   
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
        
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              onChange={(e) => setUserInformations({...userInformations , email :e.target.value})}
              value={userInformations.email}
              id="email"
              placeholder="name@example.com"
              type="email"
          
           
              disabled={isLoading}
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="password">
              password
            </Label>
            <Input
              onChange={(e) => setUserInformations({...userInformations , password :e.target.value})}
              value={userInformations.password}
              id="password"
              placeholder="*******"
              type="password"
           
              disabled={isLoading}
            />
          </div>
          <Button disabled={isLoading} className="bg-emerald-600">
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign In with Email
          </Button>
        </div>
      </form>
      
    </div>
  )
}