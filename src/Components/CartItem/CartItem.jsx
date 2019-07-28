import React from 'react';
// import './cartitem.scss';

import { ItemDetailsContainer, CartItemContainer, CartItemImage, ItemNameDetail, ItemPriceDetail} from './cartItem.styles';

const Cartitem = ({item}) => {
    const { name, price, imageUrl, quantity } = item;
    return (
        <CartItemContainer>
            <CartItemImage src={imageUrl} alt="item"/>
            <ItemDetailsContainer>
                <ItemNameDetail>{name}</ItemNameDetail>
                <ItemPriceDetail>{quantity} x ${price}</ItemPriceDetail>
            </ItemDetailsContainer>
        </CartItemContainer>
    )
}

export default Cartitem;