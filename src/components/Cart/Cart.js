import { useContext, useState } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css'
import CartContext from '../../store/CartContext';
import CartItem from './CartItem';

const Cart = (props) =>{
    const cartCtx = useContext(CartContext)
    const hasItem = cartCtx.items.length >  0;
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    

    const remove = (id)=>{
        cartCtx.removeItem(id)
    }
    const add = (item)=>{
        cartCtx.addItem({...item,amount:1});
    }

    return (
        <Modal onClose={props.onClose}>
            
                {cartCtx.items.map(item=><CartItem price={item.price}
                 name={item.name} 
                 amount={item.amount} 
                 onRemove={remove.bind(null,item.id)} 
                 onAdd={add.bind(null,item)}/>)}
           
            <div className={classes.total}>
                <span>Total Amount</span>
                <span >{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button onClick={()=>props.onClose(false)} className={classes['button--alt']}>close</button>
                {hasItem && <button className={classes['button']}>order</button>}
            </div>
        </Modal>
    )
}

export default Cart;