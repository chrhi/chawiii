"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { addNewUser } from "@/lib/hooks/use-user"
import { useState } from "react"
import { Textarea } from "../ui/textarea"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

export function UserAdd() {

    const [inputs , setInputs] = useState({
        name : "",
        password : "" ,
        email : "", 
        bio : "",
        type : "client",
    })

    const handleSubmit = async  () => {
         addNewUser({
            name : inputs.name , 
            bio : inputs.bio , 
            email : inputs.email , 
            password : inputs.password , 
            type : inputs.type
        }).then(res => {
            window.location.reload()
        })
    }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">ajouter un nouvel utilisateur</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Ajouter un nouvel utilisateur</SheetTitle>
          <SheetDescription>
          vous pouvez ajouter un autre utilisateur de type client ou de type commercial
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
           <Label htmlFor="name" className="text-right">
              Type
            </Label>
          <Select onValueChange={(value) => setInputs({...inputs , type : value})} defaultValue="client">
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sélectionnez un type" />
                </SelectTrigger>
                <SelectContent>
                 <SelectGroup>
                   <SelectLabel>les types</SelectLabel>
                   <SelectItem value="client">client</SelectItem>
                   <SelectItem value="commercial">commercial</SelectItem>
                 </SelectGroup>
                </SelectContent>
          </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input 
               id="name"
                value={inputs.name}
                onChange={e => setInputs({...inputs , name : e.target.value})}
               className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="PASSWORD" className="text-right">
              password
            </Label>
            <Input 
                value={inputs.password}
                id="PASSWORD" 
                type="password"
                onChange={e => setInputs({...inputs , password : e.target.value})}
                className="col-span-3" 
             />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="bio" className="text-right">
              bio
            </Label>
            <Textarea 
                 value={inputs.bio}
                 onChange={e => setInputs({...inputs , bio : e.target.value})}
                 id="bio" 
                 className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button onClick={handleSubmit}>Créer un utilisateur</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
