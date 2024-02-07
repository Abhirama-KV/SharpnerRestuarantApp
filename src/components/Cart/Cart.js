import { useState } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css'

const Cart = (props) =>{
    

    const cartItem = <ul>{[{
        id:'c1',
            name:'cake',
            amount:2,
            price:9}].map(item=><li>{item.name}</li>)}</ul>

    return (
        <Modal onClose={props.onClose}>
            
                {cartItem}
           
            <div className={classes.total}>
                <span>Total Amount</span>
                <span >36.65</span>
            </div>
            <div className={classes.actions}>
                <button onClick={()=>props.onClose(false)} className={classes['button--alt']}>close</button>
                <button className={classes['button']}>order</button>
            </div>
        </Modal>
    )
}

export default Cart;