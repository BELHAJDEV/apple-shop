import React,{useContext,useState} from 'react'
import Profile from '../components/profile/Profile'
import { getSession } from 'next-auth/react';


function profile() {

  return (
    <Profile />
  )
}
export async function getServerSideProps(context){
  const session = await getSession({req : context.req});
  
  if(!session){
      return {
          redirect : {
              destination : '/',
              permanent : false,
          }
      }
  }

  return {
      props : {session}
  }
}

export default profile