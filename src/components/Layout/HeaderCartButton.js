import { Fragment } from "react";
import cartIcon from '../../assets/CartIcon';
import classes from './HeaderCartButton.module.css'
import CartIcon from "../../assets/CartIcon";
import CartContext from '../../store/CartContext';
import { useContext } from "react";


const HeaderCartButton = (props)=> {
    const cartCtx = useContext(CartContext);

    const totalAmount = cartCtx.items.reduce((currentAmount,item)=>{
        return currentAmount + item.amount;
    },0);

    return (
        <Fragment >
            <button onClick={()=>props.onShow(true)} className={classes.button}>
            <span className="classes.icon"><CartIcon /></span>
            <span className="">Your Cart</span>    
            <span className={classes.badge}>{totalAmount}</span>
            </button>
        </Fragment>
    )
}

export default HeaderCartButton;