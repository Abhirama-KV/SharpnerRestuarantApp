import { useReducer } from "react";
import CartContext from "./CartContext";

const defaultCartState = {
    items:[],
    totalAmount:0
}

const cartReducer = (state,action) => {
    if(action.type == 'ADD' ){
        const index=state.items.findIndex(food=>food.name === action.item.name);
        const existingItem = state.items[index];   

        let updatedTotalAmount = 0;
        let updatedItems = [];

        if(existingItem){
            const updatedItem={...state.items[index],amount:existingItem.amount+action.item.amount};
            
            updatedItems = [...state.items];
            updatedItems[index] = updatedItem;
            
            updatedTotalAmount = state.totalAmount +  action.item.amount * action.item.price;
        }else{
            updatedItems = state.items.concat(action.item);
            updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        }

        return {
            items:updatedItems,
        totalAmount:updatedTotalAmount
        }
    }

     if(action.type == 'REMOVE'){
        const index=state.items.findIndex(food=>food.id === action.id);
        const existingItem = state.items[index];  
        
        existingItem.amount -= 1;

        let updatedTotalAmount = 0;
        let updatedItems = [];

        if(existingItem.amount < 1){
            updatedItems = state.items.filter(food=>food.id !== action.id)
            updatedTotalAmount = state.totalAmount - existingItem.price;
        }else {
            const updatedItem = {...existingItem,amount:existingItem.amount};
            console.log(updatedItem);
            updatedItems = [...state.items];
            updatedItems[index] = updatedItem;
            updatedTotalAmount = state.totalAmount - existingItem.price;
        }
        return {
            items:updatedItems,
            totalAmount:updatedTotalAmount
        }
     }
}

const CartProvider = (props) => {
    const [cartState,dispatchCartAction] = useReducer(cartReducer,defaultCartState);

    const addItemToCartHandler = (item) => {
        dispatchCartAction({type:'ADD',item:item})
    }
    
    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({type:'REMOVE',id:id})
    }

    const cartContext = {
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem:addItemToCartHandler,
        removeItem:removeItemFromCartHandler
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;