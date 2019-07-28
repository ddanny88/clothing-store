import styled, { css } from 'styled-components';



const ItemOptionStyles = css`
    width: 23%;
`;
const ArrowStyles = css`
    cursor: pointer;
`;


export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
`;

export const ImageContainer = styled.div`
    width: 23%;
    padding-right: 15px;
`;

export const ItemImage = styled.img`
    width: 100%;
    height: 100%;
`;


// name, quantity, price
export const ItemOptionSpan = styled.span`
${ItemOptionStyles}
`;

export const ItemQuantitySpan = styled.span`
    display: flex;
    ${ItemOptionStyles}
`;

export const ItemQuantityValue = styled.span`
    margin: 0 10px;
`;

export const LeftArrowRemove = styled.div`
    ${ArrowStyles}
`;

export const RightArrowAdd = styled.div`
    ${ArrowStyles}
`;

export const RemoveButton = styled.div`
    padding-left: 12px;
    ${ArrowStyles}
`;