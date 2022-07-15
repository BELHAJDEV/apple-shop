import React,{useContext} from 'react';
import classes from './chekout.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Context } from '../../Context';
import { getSession } from 'next-auth/react';

const CheckOut = () => {

    const {value1} = useContext(Context);
    const [state, dispatch] = value1;

    async function addOrders(){
        const response = await fetch('/api/orders',{
            method : 'POST',
            body : JSON.stringify({orders : state.bag}),
            headers : {
                'Content-Type' : 'application/json'
            }
        })

        const data = await response.json();

        await dispatch({
            type : 'EMPTY_BAG',
        })

        
    }
  return (
    <div className={classes.wraper}>
        <button onClick={addOrders}>Order 
        <FontAwesomeIcon icon={faCheck} />
        </button>
    </div>
  )
}

export default CheckOut