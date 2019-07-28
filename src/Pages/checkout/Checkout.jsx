import React from 'react';
import './checkout.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/CartReducer/cart.selectors';
import CheckoutItem from '../../Components/CheckoutItem/CheckoutItem';
import StripeCheckoutButton from '../../Components/StripeButton/StripeButton';



const CheckoutPage = ({ cartItems, total }) => {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>

            {
                cartItems.map(item => (
                    <CheckoutItem key={item.id} item={item}/>
                ))
            }

            <div className="total">
                <span>TOTAL: ${ total }.00</span>
            </div>
            <StripeCheckoutButton price={total}/>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);