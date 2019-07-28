import React from 'react';
// import './cartIcon.scss';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/CartReducer/cartActions';
import { selectCartItemsCount } from '../../redux/CartReducer/cart.selectors'

import { CartIconDisplay, ItemCountDisplay, ShoppingIconSvg } from './cartItem.styles';



const CartIcon = ({ toggleCart, itemCount }) => {

    return (
        <CartIconDisplay onClick={toggleCart}>
          <ShoppingIconSvg/>
            <ItemCountDisplay>{ itemCount }</ItemCountDisplay>
        </CartIconDisplay>
    )
}


// This is an example of a selector: you are getting some state in this case the cartItems, and taking a piece of that state, the quantity and passing that alone to props instead of the whole cartItems array of object. You are 'selecting' a piece of state.
const mapStateToProps = state => {
    return {
        itemCount: selectCartItemsCount(state)
    }
}

const mapDispachToProps = (dispatch) => {
    return {
        toggleCart: () => dispatch(toggleCartHidden())
    }
}

export default connect(mapStateToProps, mapDispachToProps)(CartIcon);

/** NOTES:
 * When useing selectors, when something causes a component to rerender, all of the mapStateToProps are called, passing in new props into the component even if the value of the props are the same thus it can cause the state to change causing another rerender. Memoization or Cacheing is optimal here so you can store the value and prevnet the components that dont need to be rerendered from rerendering and being passed new props of the same value.
 *
 * Re-renders are a performance issue. By storing the values instead of creating new ones that are the same, you are saving some rerenders.
*/