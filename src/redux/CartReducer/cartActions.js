import { cartTypes } from './cartTypes';

export const toggleCartHidden = () => {
    return {
        type: cartTypes.TOGGLE_CART_HIDDEN
    }
}

export const addItem = (item) => {
    return {
        type: cartTypes.ADD_ITEM,
        payload: item
    }
}

export const removeItem = (item) => {
    return {
        type: cartTypes.REMOVE_ITEM,
        payload: item
    }
}

export const reduceQuantity = (item) => {
    return {
        type: cartTypes.REDUCE_QUANTITY,
        payload: item
    }
}