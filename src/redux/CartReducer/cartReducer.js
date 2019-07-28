import { cartTypes } from './cartTypes';
import { addItemToCart, removeItemFromCart, reduceQuantity } from './cart.utils';

const initialState = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case cartTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case cartTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case cartTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        case cartTypes.REDUCE_QUANTITY:
            return {
                ...state,
                cartItems: reduceQuantity(state.cartItems, action.payload)
            }
        default:
            return state;
    }
}

export default cartReducer;