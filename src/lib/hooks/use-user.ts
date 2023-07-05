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



 const res = await  axios.post('http://localhost:3000/api/users', {
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