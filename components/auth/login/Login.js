import React,{useState,useRef} from 'react';
import classes from './login.module.css';
import Link from 'next/link';
import {signIn} from 'next-auth/react';
import { useRouter } from 'next/router';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore, { Autoplay } from 'swiper';

SwiperCore.use([Autoplay])

const Login = () => {
    const router = useRouter();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [isLoading, setIsLoading] = useState(false);
    

    async function submitHandler(event){
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        
        const result  = await signIn('credentials',{
            redirect : false,
            email,
            password
        
        });


        setIsLoading(true);
        


       

        // emailRef.current.value = '';
        // passwordRef.current.value = '';

        if(!result.error){
            setIsLoading(false);
            router.replace('/');

            
        }
    }
    const swiperProps = {
        spaceBetween: 0,
        slidesPerView: 1,
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false
        },
        breakpoints: {
            992:{       
                slidesPerView: 2   
            },
            768:{
                slidesPerView: 3
            },
            576:{
                slidesPerView: 2
            }
        }

    }

    if(isLoading){
        return <p className={classes.loading}>Loading...</p>
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

        {/* <div>
        <Swiper 
            { ...swiperProps }
        > */}
            {/* {contentProductItem} */}
        {/* <SwiperSlide>1</SwiperSlide>
        <SwiperSlide>2</SwiperSlide>
        <SwiperSlide>3</SwiperSlide> */}

        {/* </Swiper> */}
        {/* </div> */}
        
        
    </div>
  )
}

export default Login