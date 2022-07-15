import React from 'react'
import CheckOut from '../components/chekout/CheckOut'
import { getSession } from 'next-auth/react';

const checkout = () => {
  return (
    <CheckOut />
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

export default checkout