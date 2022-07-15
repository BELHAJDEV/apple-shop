import React,{useState,useRef} from 'react';
import classes from './login.module.css';
import Link from 'next/link';
import {signIn} from 'next-auth/react';
import { useRouter } from 'next/router';


const Login = () => {
    const router = useRouter();
    const emailRef = useRef();
    const passwordRef = useRef();

    

    async function submitHandler(event){
        event.preventDefault();
        

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        const result  = await signIn('credentials',{
            redirect : false,
            email,
            password
        
        });

        



        emailRef.current.value = '';
        passwordRef.current.value = '';

        if(!result.error){
            router.replace('/');

            
        }
    }
  return (
    <div className={classes.login_container}>
        <form onSubmit={submitHandler}>
            <div>
                <label>Email :</label>
                <input type='email' placeholder='Email...' ref={emailRef}/>
            </div>
            <div>
                <label>Password :</label>
                <input type='password' placeholder='Password...' ref={passwordRef}/>
            </div>
            <button>Login</button> <br />
            <Link href='/auth/signup'>Create an account</Link>
        </form>
    </div>
  )
}

export default Login