import { prisma } from "@/lib/prisma"

export const user_valide = async ({email , password} : {email : string , password : string}) => {

    const user = await prisma.user.findUnique({
        where : {
            email
        }
    })



    if(user?.password === password){
        return true
    }
    return false
}