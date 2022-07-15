import React, { useState, useContext,useRef } from 'react'
import classes from './iphone.module.css';
import iphone13Green from '../../public/images/iphones/iphone-13-green.png';
import iphone13Pink from '../../public/images/iphones/iphone-13-pink.png';
import iphone13Blue from '../../public/images/iphones/iphone-13-blue.png';
import iphone13White from '../../public/images/iphones/iphone-13-white.png';
import iphone13Red from '../../public/images/iphones/iphone-13-red.png';
import iphone13Midnight from '../../public/images/iphones/iphone-13-midnight.png';
import iphone13Family from '../../public/images/iphones/iphone-13-family.png';
import Image from 'next/image';
import Link from 'next/link';
import appleIcon from '../../public/images/apple-logo.png';
import { Context} from '../../Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {useRouter} from 'next/router';
import { v4 as uuidv4 } from 'uuid';

const Iphone = () => {

    const payRef = useRef();
    const router = useRouter();
    const {value1} = useContext(Context);
    const [state,dispatch] = value1;
    const [open,setOpen] = useState(false);
    const [allColors, setAllColors] = useState(true)
    const [isGreen, setIsGreen] = useState(false);
    const [isPink, setIsPink] = useState(false);
    const [isBlue, setIsBlue] = useState(false);
    const [isMidnight, setIsMidnight] = useState(false);
    const [isWhite, setIsWhite] = useState(false);
    const [isRed, setIsRed] = useState(false);

    const [isOne, setIsOne] = useState(false);
    const [isTwo, setIsTwo] = useState(false);
    const [isThree, setIsThree] = useState(false);

    const [productName, setProductName] = useState('Iphone 13');
    const [productColor, setProductColor] = useState('green');
    const [productCapacity, setProductCapacity] = useState('128');
    const [productPrice, setProductPrice] = useState('$829.00');
    const [monthlyPrice, setMonthlyPrice] = useState('$34.54');
    const [productImage,setProductImage] = useState(iphone13Green);
    const [isMonhtly, setIsMonthly] = useState(false);
    const [isCash, setIsCash] = useState(false);

    const [currentPrice,setCurrentPrice] = useState(829.00);
   
    

    async function AddToBag(event){
        event.preventDefault();
        const selectedProduct = {
            id : uuidv4(),
            productName,
            productColor,
            productCapacity,
            productPrice,
            monthlyPrice,
            productImage,
            isMonhtly,
            isCash
             
        }
    
        await dispatch(({
            type : 'ADD_TO_BAG',
            payload : selectedProduct
        }));

        await dispatch(({
            type : 'TOTAL',
            payload : currentPrice
        }));

        setOpen(true);
        // console.log(currentPrice)
        
        
        
        
        
        
    }
  return (
    <div className={classes.iphone_container}>
        <header>
            <h3>Iphone 13</h3>
            <p>From $799 or $33.29/mo. for 24 mo. *before trade-in</p>
        </header>
        <section className={open ? classes.section_of : classes.section}>
            <div className={classes.item_image}>
                {isGreen && (
                    <Image src={iphone13Green} alt='product image' />
                )}
                {isPink && (
                    <Image src={iphone13Pink} alt='product image' />
                )}
                {isBlue && (
                    <Image src={iphone13Blue} alt='product image' />
                )}
                {isMidnight && (
                    <Image src={iphone13Midnight} alt='product image' />
                )}
                {isWhite && (
                    <Image src={iphone13White} alt='product image' />
                )}
                {isRed && (
                    <Image src={iphone13Red} alt='product image' />
                )}
                {allColors && (
                    <Image src={iphone13Family} alt='product image' className={classes.iphone_colors_img}/>
                )}
            </div>
            <div className={classes.product_options}>
                <span>New</span>
                <h1>Buy iPhone 13</h1>
                <p>Get $90–$600 off when you trade in an iPhone 8 or newer◊◊</p>
                <Link href='/'>See how to trade-in works</Link>
                <h3>Your model.</h3>
                <div className={classes.model}>
                    <div className={classes.product_name}>
                        <h3>Iphone 13</h3>
                        <p>6.1-inch display 
                        <sup>1</sup>
                        </p>  
                    </div>
                    <div className={classes.price}>
                        <span>From $799 or</span>
                        <span>$33.29/mo. for 24 mo. *</span>
                        <span>before trade-in</span>
                    </div>
                </div>
                <hr />

                <h3>Choose your finish.</h3>
                    
                <div className={classes.colors}>
                    <div className={!isGreen ? classes.green : classes.green_on}
                    onClick={()=> {
                        setIsBlue(false);
                        setIsGreen(true);
                        setIsMidnight(false);
                        setIsPink(false);
                        setIsRed(false);
                        setIsWhite(false);
                        setAllColors(false);
                        setProductColor('green');
                        setProductImage(iphone13Green);
                        window.scrollBy(0, 450);

                    }}
                    >
                        <span></span>
                        <p>Green</p>
                    </div>
                    <div className={!isPink ? classes.pink : classes.pink_on}
                    onClick={()=> {
                        setIsBlue(false);
                        setIsGreen(false);
                        setIsMidnight(false);
                        setIsPink(true);
                        setIsRed(false);
                        setIsWhite(false);
                        setAllColors(false);
                        setProductColor('pink');
                        setProductImage(iphone13Pink);
                        window.scrollBy(0, 450);



                    }}
                    >
                        <span></span>
                        <p>Pink</p>
                    </div>
                    <div className={!isBlue ? classes.blue : classes.blue_on}
                    onClick={()=> {
                        setIsBlue(true);
                        setIsGreen(false);
                        setIsMidnight(false);
                        setIsPink(false);
                        setIsRed(false);
                        setAllColors(false);
                        setIsWhite(false);
                        setProductColor('blue');
                        setProductImage(iphone13Blue);
                        window.scrollBy(0, 450);

                    }}
                    >
                        <span></span>
                        <p>Blue</p>

                    </div>
                    <div className={!isMidnight ? classes.midnight : classes.midnight_on}
                    onClick={()=> {
                        setIsBlue(false);
                        setIsGreen(false);
                        setIsMidnight(true);
                        setIsPink(false);
                        setIsRed(false);
                        setAllColors(false);
                        setIsWhite(false);
                        setProductColor('midnight');
                        setProductImage(iphone13Midnight);
                        window.scrollBy(0, 450);


                    }}
                    >
                        <span></span>
                        <p>Midnight</p>

                    </div>
                    <div className={!isWhite ? classes.white : classes.white_on}
                    onClick={()=> {
                        setIsBlue(false);
                        setIsGreen(false);
                        setIsMidnight(false);
                        setIsPink(false);
                        setIsRed(false);
                        setIsWhite(true);
                        setAllColors(false);
                        setProductColor('white');
                        setProductImage(iphone13White);
                        window.scrollBy(0, 450);


                    }}
                    >
                        <span></span>
                        <p>Starlight</p>

                    </div>
                    <div className={!isRed ? classes.red : classes.red_on}
                    onClick={()=> {
                        setIsBlue(false);
                        setIsGreen(false);
                        setIsMidnight(false);
                        setIsPink(false);
                        setIsRed(true);
                        setAllColors(false);
                        setIsWhite(false);
                        setProductColor('red');
                        setProductImage(iphone13Red);
                        window.scrollBy(0, 450);


                    }}
                    >
                        <span></span>
                        <p>(Product)Red</p>

                    </div>
                </div> 

                <div className={classes.product_red}>
                    <span>(Product)<sup>Red</sup></span>
                    <p>Every iPhone 13 (PRODUCT)RED purchase contributes equally to the fight to end AIDS and its impact from COVID-19.footnote◊◊◊</p>
                </div>
                <h3>Choose your capacity.</h3>
                <Link href='/'>
                How much capacity is right for you?
                </Link>
                <div className={classes.capacities}>
                    <div className={isOne ? classes.isOne : ''}
                    onClick={ () => {
                        setIsOne(true);
                        setIsTwo(false);
                        setIsThree(false);
                        setProductCapacity('128');
                        setProductPrice('$829.00');
                        setMonthlyPrice('$34.54');
                        setCurrentPrice(829.00);
                        window.scrollBy(0, 450);

                    }}
                    >
                        <span>128<sub>GB</sub><sup>2</sup></span>
                        <p>
                        From $799 or $33.29/mo.
                        <br />
                        for 24 mo.*before trade-in
                        </p>
                    </div>
                    <div className={isTwo ? classes.isTwo : ''}
                    onClick={ () => {
                        setIsOne(false);
                        setIsTwo(true);
                        setIsThree(false);
                        setProductCapacity('256');
                        setProductPrice('$929.00');
                        setMonthlyPrice('$38.70');
                        setCurrentPrice(929.00);
                        window.scrollBy(0, 450);




                    }}
                    
                    >
                        <span>256<sub>GB</sub><sup>2</sup></span>
                        <p>
                        From $899 or $37.45/mo.
                        <br />
                        for 24 mo.*before trade-in
                        </p>
                    </div>
                    <div className={isThree ? classes.isThree : ''}
                    onClick={ async() => {
                        setIsOne(false);
                        setIsTwo(false);
                        setIsThree(true);
                        setProductCapacity('512');
                        setProductPrice('$1,129.00');
                        setMonthlyPrice('$47.04');
                        setCurrentPrice(1,129.00);
                        window.scrollBy(0, 450);

                        

                    }}
                    >
                        <span>512<sub>GB</sub><sup>2</sup></span>
                        <p>
                        From $1099 or $45.79/mo.
                        <br />
                        for 24 mo.*before trade-in
                        </p>
                    </div>
                </div>
                <h3>Choose a payment option.</h3>
                <div className={classes.payOptions}>
                    <div className={isMonhtly ? classes.monthly_on :''}
                    onClick={()=> {

                        // window.scrollTo(0,50000);
                        setIsMonthly(true);
                        setIsCash(false);
                        // window.scrollBy(0, 1000);
                        // scrollToBottom()
                        payRef.current?.scrollIntoView({behavior: 'smooth'});

                    }}
                    >
                        <div>
                            <Image src={appleIcon} alt='' />
                            <p>Apple Card Monthly Installments </p>
                        </div>

                        <span>{monthlyPrice}/mo for 24mo</span>
                        <br />
                        <span>{productPrice} Total</span>
                        <hr />
                        <ul>
                            <li>Pay for your iphone with low monthly payments
                            </li>
                            <li>Financed at 0% APR</li>
                            <li>Get 3% cash back on the full cost of the iphone, right way</li>
                        </ul>
                    </div>

                    <div className={isCash ? classes.cash_on :''}
                    onClick={()=> {
                        window.scrollTo(0,document.body.scrollHeight);
                        setIsMonthly(false);
                        setIsCash(true);
                        // window.scrollBy(0, 1000);
                        // scrollToBottom()
                        payRef.current?.scrollIntoView({behavior: 'smooth'});


                    }}
                    >
                        <div>     
                            <p>One time payments</p>
                        </div>
                        <span>{productPrice}</span>
                        <hr />
                        <ul>
                            <li>Pay the total amount today
                            </li>
                            <li>Get 3% Daily Cash back when you pay with your existing Apple Card</li>
                            
                        </ul>
                    </div>
                </div>
                {isMonhtly || isCash ?  (
                     
                <div className={classes.card_label} ref={payRef}>
                    <h2>{isMonhtly ? monthlyPrice + '/mo for 24mo. *' + productPrice + 'Total' : productPrice}
                    </h2>
                    <p>{isMonhtly ? 'Apple card monthly installements' : 'One time payments'}</p>
                    <Link href='/'>Get 3% Daily Cash with Apple Card</Link>

                    <button onClick={AddToBag}>Add to Bag</button>
                </div>
                ):null}

               
            </div>
        </section>

        <div className={open ? classes.bag_review : classes.bag_review_of}>
            <div>
                <Image src={productImage} alt='image' />
                <div>
                    <h3>{productName} {productCapacity}GB {productColor}
                    </h3>
                    <span>{!isMonhtly ? 'One Time payment' : 'Apple Card Monthly Installments'}
                    </span>
                </div>
                        
            </div>
            
            <button onClick={(e)=> {
                e.preventDefault();
                router.replace('/shop/bag');
            }}>Review Bag</button>
            
            <FontAwesomeIcon icon={faTimes} onClick={()=> setOpen(false)}/>
        </div>

    </div>
  )
}

export default Iphone