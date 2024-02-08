import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';
import { useContext, useRef, useState } from 'react';
import CartContext from '../../../store/CartContext';

const MealItemForm = props => {
    const amountRef = useRef();
    const [errorMsg,setErrorMsg] = useState();

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const amount = amountRef.current.value;
        const amountNum = +amount;
        
        if(amount<1 || amount>5){
            setErrorMsg('please enter a valid amount');
            return; 
        }

        props.onAddToCart(amountNum);
        
    }   

    return (
        <form className={classes.form} onSubmit={onSubmitHandler}>
            <Input label='Amount' 
                ref={amountRef}
            input={{    
                id:'amount',
                type:'number',
                min:'1',
                max:'5',
                step:'1',
                defaultValue:'1'
            }}/>
            
            <button >+ ADD</button>

            <p>{errorMsg}</p>
        </form>
    )
}

export default MealItemForm;