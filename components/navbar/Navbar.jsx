import { useState,useContext, useEffect} from 'react'
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/images/apple-logo.png';
import classes from './navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBagShopping,faPaperPlane, faUser, faXmark, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import {useRouter} from 'next/router';
import { Context} from '../../Context';
import { useSession, signOut } from 'next-auth/react';



function Navbar(){

    const { data: session } = useSession();
    const {value1} = useContext(Context);
    const [state,dispatch] = value1;

    const [openMenu,setOpenMenu] = useState(false);
    const [openRightMenu,setOpenRightMenu] = useState(false);
    const [showSearch,setShowSearch] = useState(false);
    const router = useRouter();

    function hundleOpenMenu(){
        setOpenMenu(!openMenu);
    }
    function hundleOpenRightMenu(){
        
        setOpenRightMenu(!openRightMenu);
        
    }
    function logoutHandler(event){

        event.preventDefault();
        setOpenRightMenu(false);
        signOut();
        router.replace('/')
    }
    async function getUsername(){
        if(session){
            const result = await fetch('/api/auth/user',{
                method : 'POST',
                body : JSON.stringify({
                    email : session.user.email
                }),
                headers : {
                    'Content-Type' : 'application/json'
                }
            });

            const data = await result.json();

            
            await dispatch({
                type : 'SET_USER',
                payload : data.user
            })
        }
    }
    useEffect(()=> {
        getUsername();
    })

    return (
        <div className={classes.nav_container}>
            <div className={!openMenu ? classes.menu_icon : classes.menu_icon_on} onClick={hundleOpenMenu}>
                <span className={classes.first_bar}></span>
                <span className={classes.second_bar}></span>
            </div>
            
            <span className={showSearch ? classes.of : ''} onClick={()=> router.replace('/')}>
                <Image src={logo} alt='Logo' />
            </span>
           
            <Link href='/' >
            <a className={showSearch ? classes.of : ''}>Mac</a>
            </Link>

            <Link href='/'>
            <a className={showSearch ? classes.of : ''}>Ipad</a>
            </Link>

            <Link href='/'>
            <a className={showSearch ? classes.of : ''}>Iphone</a>     
            </Link>

            <Link href='/'>
            <a className={showSearch ? classes.of : ''}>Watch</a>
            </Link>
            
            <FontAwesomeIcon 
            icon={faMagnifyingGlass} 
            className={showSearch ? classes.of : classes.search_icon}
            onClick={()=> setShowSearch(!showSearch)}
            />
            <a onClick={hundleOpenRightMenu}
            className={showSearch ? classes.of : ''}
            
            >
            <FontAwesomeIcon 
            icon={faBagShopping} 
            onClick={hundleOpenRightMenu}
            className={showSearch ? classes.of : ''}
            />
            {state.bag.length > 0 ? <h4>{state.bag.length}</h4> : null }
            </a>
            
        
            
            <div className={showSearch ? classes.search_web :classes.search_web_of }>
                <form>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <input type='text' placeholder='Search apple.com'/>
                    <FontAwesomeIcon icon={faXmark} 
                        onClick={()=> {
                            setShowSearch(!showSearch)
                        }}
                    />

                </form>
                
            </div>
            
            <div className={openMenu ? classes.menu :  classes.menu_of}>
                <div className={classes.menu_search}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className={classes.search_icon_menu}/>
                    <input type='text'  placeholder='Search apple.com'/>
                    <FontAwesomeIcon icon={faPaperPlane} className={classes.send_icon_menu}/>
                    
                </div>

                <span></span>
                <div className={classes.menu_items}>
                    <Link href='/'>Store</Link>
                    <Link href='/'>Mac</Link>
                    <Link href='/'>Ipad</Link>
                    <Link href='/'>Iphone</Link>
                    <Link href='/'>Watch</Link>
                    <Link href='/'>Accessories</Link>
                    <Link href='/'>Support</Link>
                </div>
                
            </div>
            <div className={openRightMenu ? classes.right_menu :  classes.right_menu_of} >
                {state.bag.length > 0 ? 
                <>
                    <div>
                    {state.bag.map((product,i)=> (
                        <div key={i}>
                            <Image src={product.productImage} alt='' />
                            <h3>{product.productName} {product.productCapacity}GB {product.productColor}</h3>
                        </div>  
                    ))}
                        
                    
                </div>
                <button onClick={()=> {
                setOpenRightMenu(false);
                router.replace('/checkout');
                
                }}>Check Out</button>
                </>
                : <span className={classes.empty}>You bag is empty</span>}
                
                
                <span onClick={()=> router.push('/shop/bag')}>
                    <FontAwesomeIcon icon={faBagShopping} />
                    Bag {state.bag.length > 0 ? `(${state.bag.length})` : ''}
                </span>
                {!session ? (
                    <span onClick={()=> 
                        {
                            setOpenRightMenu(false);
                            router.push('/auth')
                        }}>
                        <FontAwesomeIcon icon={faUser} />
                        Login
                    </span>
                ):(
                    <>
                    <span>
                        <FontAwesomeIcon icon={faUser} />
                        {state.user.username}&apos;s profile
                    </span>

                    <span onClick={logoutHandler}>
                        <FontAwesomeIcon icon={faArrowRightFromBracket} />
                        Logout
                    </span>
                    </>
                )}
                
            </div>
        </div>
    )
}

export default Navbar;