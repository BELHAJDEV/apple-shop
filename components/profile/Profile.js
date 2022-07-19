import React,{useContext, useEffect, useState} from 'react';
import classes from './profile.module.css';
import iphone13White from '../../public/images/iphones/iphone-13-white.png';
import iphone13Red from '../../public/images/iphones/iphone-13-red.png';
import iphone13Midnight from '../../public/images/iphones/iphone-13-midnight.png';
import Image from 'next/image';
import { Context } from '../../Context';

function Profile() {
  const {value1} = useContext(Context);
  const [state,dispatch] = value1;
  const [user, setUser] = useState('')
  async function getOrders(){

    if(state.user.username !== ""){
      
      const result = await fetch('/api/myorders',{
        method : 'POST',
        body : JSON.stringify({email :  state.user.email}),
        headers : {
          'Content-Type' : 'application/json'
        }
      });
    
      const data = await result.json();
      console.log(data.orders);
      
      await dispatch({
        type : 'ADD_MYORDERS',
        payload :  data.orders
      })
      // setUser(data)
    }
    
  }
  useEffect(()=> {
    getOrders();
  },[state.user.email])
  
  return (
    <div className={classes.profile_container}>
      {state.myOrders.length > 0 ? (
        state.myOrders.map((order,i)=> (
          <div className={classes.product} key={i}>
            <Image src={order.productImage} alt='img' />
            <div className={classes.product_right_zone}>
                <div>
                            
                    <h3>{order.productName} {order.productCapacity}GB {order.productColor}</h3>
                    
                      <p>{!order.isMonhtly ? 'One Time payment' : 'Apple Card Monthly Installments'}</p>
                    
                </div>
                <div>
                    <h3>{!order.isMonhtly ? order.productPrice : order.monthlyPrice + 'per month'}</h3>
                    
                    <p>{order.date}</p>
                </div>

            </div>
          </div>
        ))
      ) : <p>No orders</p>}
        

        
        
    </div>
  )
}


export default Profile