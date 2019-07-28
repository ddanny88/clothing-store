import React from 'react';
import FormButton from '../FormButton/FormButton';
// import './cartdropdown.scss';
import CartItem from '../CartItem/CartItem';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/CartReducer/cart.selectors';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/CartReducer/cartActions'

// styles:
import { CartDropdownContainer, CartItemsContainer, EmptyMessage, ButtonWrapper } from './cartDropdown.styles';


const CartDropdown = ({ cartItems, history, dispatch }) => {

    const toCheckout = () => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
    }

    return (
        <CartDropdownContainer>
            <CartItemsContainer>
                {
                    cartItems.length ?

                    cartItems.map(item => (
                    <CartItem key={item.id} item={item}></CartItem>))
                    :
                    <EmptyMessage className="empty-message">Your cart is empty</EmptyMessage>
                }
            </CartItemsContainer>
           <ButtonWrapper>
            <FormButton onClick={toCheckout}>GO TO CHECKOUT</FormButton>
           </ButtonWrapper>
        </CartDropdownContainer>
    )
}
const mapStateToProps = state => {
    return {
        cartItems: selectCartItems(state)
    }
}
export default withRouter(connect(mapStateToProps)(CartDropdown));