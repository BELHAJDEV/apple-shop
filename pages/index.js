import HomePage from "../components/home/HomePage";
import { getSession } from 'next-auth/react';


export default function Home(props) {
  return (
    <>
      <HomePage/>
    </>
    
  )
}
