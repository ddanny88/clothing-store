import styled from 'styled-components';
import { ReactComponent as ShoppingIcon } from '../../assets/shoppingBag.svg';

export const CartIconDisplay = styled.div`
    width: 45px;
    height: 45px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const ItemCountDisplay = styled.div`
    position: absolute;
    font-size: 10px;
    font-weight: bold;
    bottom: 12px;
`;

export const ShoppingIconSvg = styled(ShoppingIcon)`
    width: 24px;
    height: 24px;
`;