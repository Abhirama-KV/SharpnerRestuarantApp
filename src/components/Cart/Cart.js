import Modal from '../UI/Modal';
import classes from './Cart.module.css'

const Cart = (props) =>{
    const cartItem = <ul>{[{
        id:'c1',
            name:'cake',
            amount:2,
            price:9}].map(item=><li>{item.name}</li>)}</ul>

    return (
        <Modal >
            
                {cartItem}
           
            <div className={classes.total}>
                <span>Total Amount</span>
                <span >36.65</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']}>close</button>
                <button className={classes['button']}>order</button>
            </div>
        </Modal>
    )
}

export default Cart;