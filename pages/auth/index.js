import React from 'react'
import Login from '../../components/auth/login/Login'
import { getSession } from 'next-auth/react';

const auth = () => {
  return (
    <Login />
  )
}

export async function getServerSideProps(context){
  const session = await getSession({req : context.req});
  
  if(session){
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

export default auth