import { Fragment } from "react";
import cartIcon from '../../assets/CartIcon';
import classes from './HeaderCartButton.module.css'
import CartIcon from "../../assets/CartIcon";

const HeaderCartButton = ()=> {
    return (
        <Fragment >
            <button className={classes.button}>
            <span className="classes.icon"><CartIcon /></span>
            <span className="">Your Cart</span>    
            <span className={classes.badge}>3</span>
            </button>
        </Fragment>
    )
}

export default HeaderCartButton;