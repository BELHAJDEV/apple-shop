import React,{useContext, useEffect, useState} from 'react';
import classes from './profile.module.css';
import Image from 'next/image';
import { Context } from '../../Context';

function Profile() {
  const {value1} = useContext(Context);
  const [state,dispatch] = value1;
  const [user, setUser] = useState('');
  const [loading, setLoading] = useState(true);

  async function getOrders(){

    if(state.user.username !== ""){
      setLoading(true)
      const result = await fetch('/api/myorders',{
        method : 'POST',
        body : JSON.stringify({email :  state.user.email}),
        headers : {
          'Content-Type' : 'application/json'
        }
      });
    
      const data = await result.json();
      
      await dispatch({
        type : 'ADD_MYORDERS',
        payload :  data.orders
      })
      // setUser(data)
      setLoading(false);
      
      
    }
    
  }
  useEffect(()=> {
    getOrders();
  },[state.user.email])
  
  if(loading){
    return <p className={classes.text}>Loading ...</p>
  }

  if(state.user.isAdmin){
    return <div className={classes.admin_profile_container}>
     <div className={classes.header}>
        <span>Product Image</span>
        <span>Product Name</span>
        <span>Product Color</span>
        <span>Product Capacity</span>
        <span>Product Price</span>
        {/* <span>Payment option</span> */}
        <span>Order date</span>
      </div>
      
    {state.myOrders.map((order,i)=> {
      return (
        <div className={classes.order} key={i}>
        <span>
          <Image src={order.productImage} alt='image' />
        </span>
        <span>{order.productName}</span>
        <span>{order.productColor}</span>
        <span>{order.productCapacity}</span>
        <span className={classes.order_price}>{order.productPrice}</span>
        <span>{new Date(order.date).getDate()+'-'+ (new Date(order.date).getMonth()+1)  + '-'+new Date(order.date).getFullYear()}</span>
      </div>
      )
      
    })}
    </div>
  }

  return (
    <div className={classes.profile_container}>
      {state.myOrders.length > 0 ? (
        state.myOrders.map((order,i)=> (
          <div className={classes.order} key={i}>
            <Image src={order.productImage} alt='img' />
            <div className={classes.order_right_zone}>
                <div>
                            
                    <h3>{order.productName} {order.productCapacity}GB {order.productColor}</h3>
                    
                      <p>{!order.isMonhtly ? 'One Time payment' : 'Apple Card Monthly Installments'}</p>
                    
                </div>
                <div>
                    <h3 className={classes.price}>{!order.isMonhtly ? order.productPrice : order.monthlyPrice + ' per month'}</h3>
                    
                    <p>{ new Date(order.date).getDate()}-{ new Date(order.date).getMonth() + 1}-{ new Date(order.date).getFullYear()}</p>
                </div>

            </div>
          </div>
        ))
      ) : <p>No orders</p>}
        
        
        
        
    </div>
  )
}


export default Profile