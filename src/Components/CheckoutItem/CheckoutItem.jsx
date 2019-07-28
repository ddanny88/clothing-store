import React from 'react';
// import './checkoutitem.scss';
import { connect } from 'react-redux';
import { removeItem, reduceQuantity, addItem } from '../../redux/CartReducer/cartActions'

import { CheckoutItemContainer, ImageContainer, ItemImage, ItemOptionSpan, ItemQuantitySpan, LeftArrowRemove, RightArrowAdd, RemoveButton, ItemQuantityValue } from './checkoutItem.styles';

const CheckoutItem = ({ item, clearItem, addItem, reduceItem }) => {
    const { name, imageUrl, quantity, price } = item;
    const clearItemFromCart = () => {
        clearItem(item);
    }

    const addItemToCart = () => {
        addItem(item)
    }

    const reduceItemFromCart = () => {
        reduceItem(item);
    }



    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <ItemImage src={imageUrl} alt="item"/>
            </ImageContainer>
            <ItemOptionSpan>{name}</ItemOptionSpan>
            <ItemQuantitySpan>
                <LeftArrowRemove className="arrow" onClick={reduceItemFromCart}>&#10094;</LeftArrowRemove>
                <ItemQuantityValue>{quantity}</ItemQuantityValue>
                <RightArrowAdd className="arrow" onClick={addItemToCart}>&#10095;</RightArrowAdd>
            </ItemQuantitySpan>
            <ItemOptionSpan>${price}</ItemOptionSpan>
            <RemoveButton className="remove-button" onClick={clearItemFromCart}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        clearItem: item => dispatch(removeItem(item)),
        addItem: item => dispatch(addItem(item)),
        reduceItem: item => dispatch(reduceQuantity(item))
    }
}

export default connect(null, mapDispatchToProps)(CheckoutItem);