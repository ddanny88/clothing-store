import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';


// css blocks are used for styled components that share styles so we dont duplicate our code.
const OptionSyles = css`
    padding: 10px 15px;
    cursor: pointer;
`;

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;
`;

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
    ${OptionSyles}
`;

export const OptionDiv = styled.div`
    ${OptionSyles}
`;