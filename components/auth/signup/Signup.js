import React,{useRef} from 'react';
import Link from 'next/link';
import classes from './signup.module.css';

import {useRouter} from 'next/router';

async function createUser(user){
    const response = await fetch('/api/auth/signup',{
        method  : 'POST',
        body : JSON.stringify(user),
        headers : {
            'Content-Type' : 'application/json'
        }
    });

    const data= await response.json();

    if(!response.ok){
        throw new Error(data.message || 'Something failed !!');
    }

    return data;
}
const Signup = () => {
    const router = useRouter();
    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    async function submitHandler(event){
        event.preventDefault();

        const username = usernameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        const user = {
            username,
            email,
            password
        }

        try{
            const result = await createUser(user);
            usernameRef.current.value = '';
            emailRef.current.value = '';
            passwordRef.current.value = '';
            

            router.replace('/auth')
            
            
        }catch(error){
            console.log(error);
        }

    }
  return (
    <div className={classes.login_container}>
    <form onSubmit={submitHandler}>
        <div>
            <label>Username :</label>
            <input type='text' placeholder='Username...' ref={usernameRef}/>
        </div>
        <div>
            <label>Email :</label>
            <input type='email' placeholder='Email...' ref={emailRef}/>
        </div>
        <div>
            <label>Password :</label>
            <input type='password' placeholder='Password...' ref={passwordRef}/>
        </div>
        <button>Create</button> <br />
        <Link href='/'>You have One? Login</Link>
    </form>
</div>
  )
}

export default Signup