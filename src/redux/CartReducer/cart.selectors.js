import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((acc, el) => {
        return acc + el.quantity;
    }, 0)
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => getItemTotals(cartItems).reduce((acc, el) => acc + el, 0)
);

const getItemTotals = arr => arr.map(item => item.price * item.quantity);

