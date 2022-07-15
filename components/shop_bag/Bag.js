import { useState , useContext} from 'react';
import classes from './bag.module.css';
import iphone13Red from '../../public/images/iphones/iphone-13-red.png';
import iphone13Midnight from '../../public/images/iphones/iphone-13-midnight.png';
import Image from 'next/image';
import { Context} from '../../Context';
import {useRouter} from 'next/router';

function Bag () {
    const router = useRouter();
    
    const {value1} = useContext(Context);
    const [state,dispatch] = value1;

    async function removeItemHandler(id){
        await dispatch({
            type : 'DELETE_PRODUCT',
            payload : id
        })
    }
    return (
        <div className={classes.bag_container}>
            <header>
                <h1>Your bag total is ${state.total}.</h1>
                <p>Free delivery and free returns.</p>
                <button onClick={()=> router.replace('/checkout')}>Check Out</button>
            </header>

            <section>
                {state.bag.map((product,i)=> (
                    <div className={classes.product} key={i}>
                    <Image src={product.productImage} alt='img' />
                    <div className={classes.product_right_zone}>
                        <div>
                            
                            <h3>{product.productName} {product.productCapacity}GB {product.productColor}</h3>
                            <p>{!product.isMonhtly ? 'One Time payment' : 'Apple Card Monthly Installments'}</p>
                        </div>
                        <div>
                            <h3>{!product.isMonhtly ? product.productPrice : product.monthlyPrice + 'per month'}</h3>
                            <p onClick={removeItemHandler.bind(null,product.id)}>Remove</p>
                        </div>

                    </div>
                </div> 
                ))}
                    
                
            </section>
        </div>

    )

}

export default Bag;