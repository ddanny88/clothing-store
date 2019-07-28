import { removeItem } from "./cartActions";

export const addItemToCart = (cartItems, itemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === itemToAdd.id);
    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === itemToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        )
    }
    return [...cartItems, {...itemToAdd, quantity: 1}]
}

export const removeItemFromCart = (cartItems, itemToRemove) => {
    return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id);
}

// export const reduceQuantity = (cartItems, itemToReduce) => {
//     const existingCartItem = cartItems.find(item => item.id === itemToReduce.id);
//     if (existingCartItem.quantity === 1) {
//         return cartItems.filter(item => item.id !== itemToReduce.id);
//     }
//     return cartItems.map(item => item.id === itemToReduce.id ? {...item, quantity: item.quantity - 1} 
//         : item
//     );
// }


export const reduceQuantity = (cartItems, itemToReduce) => {
    for (let i = 0; i < cartItems.length; i++) {
        if (cartItems[i].id === itemToReduce.id) {
            if (cartItems[i].quantity === 1) {
                return removeItemFromCart(cartItems, itemToReduce);
            } else if (cartItems[i].quantity > 1) {
                return cartItems.map(item => item.id === itemToReduce.id ? {...item, quantity: item.quantity - 1} : item);
            }
        }
    }
}