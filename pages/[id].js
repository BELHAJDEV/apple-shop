import React from 'react';
import classes from './test.module.css';

function product({ID}) {
  return (
    <div className={classes.test}>{ID}</div>
  )
}


export default product;


export async function getServerSideProps(context){
    // const {id} = context.req.params;
    const {params ,req, res} = context;
    const id = params.id
    // console.log(req)

    return {
        props : {
            ID : id
        }
    }
}
