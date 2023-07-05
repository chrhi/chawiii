import useSWR from "swr"
import axios from "axios"
import { useEffect, useState } from "react"



// export function useUser () {
//     const { data, error, isLoading } = useSWR(`/api/user`, () => fetch('http://localhost:3000/api/users').then(res => {
//       return res
//     }).then(res => res.json())
//     )
//     return {
//       user: data,
//       isLoading,
//       isError: error
//     }
//   }
export function useUser () {
  const { data, error, isLoading } = useSWR(`/api/user`, () =>  axios.get('http://localhost:3000/api/users').then((response => {
    return response
 })))
  
  return {
    user: data?.data,
    isLoading,
    isError: error
  }
}


export const  useSignInUser = async  ({ password , email  }: { password : string ,  email : string }) => {

 const res = await  axios.post('https://chawiii.vercel.app/api/users', {
  action : "is user valide",
  email,
  password
  }).catch(err => {
    console.error(err)
   
  })
 
  return {
    data : res?.data
  }
}

export function useSignin () {
  const { data, error, isLoading } = useSWR(`/api/user`, () =>  axios.post('http://localhost:3000/api/users', {

  }).then((response => {
    return response
 })))
  
  return {
    user: data?.data,
    isLoading,
    isError: error
  }
}

export const  addNewUser = async  ({ password , email , bio , type , name }: { 
  name : string,
  password : string ,
  email : string ,
  bio : string  , 
  type : string
  }) => {

  const res = await  axios.post(process.env.NODE_ENV === "development" ? "http://localhost:3000/api/users" :"https://chawiii.vercel.app/api/users", {
   action : "add user",
   email,
   password,
   bio , 
   type ,
   name
   }).catch(err => {
     console.error(err)
   })
   return {
     data : res?.data
   }
 }