import React from 'react';
// import {Link} from 'react-router-dom';
import { ReactComponent as Logo} from '../../assets/croun.svg'
// import './header.scss';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../CartIcon/cartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/userReducer/user.selectors';
import { selectHidden } from '../../redux/CartReducer/cart.selectors';


//styleed components:
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionDiv } from './header.styles';


const Header = (props) => {
    const { currentUser, hidden } = props;
    const handleSignOut = () => {
        auth.signOut();
    }


    return (
        <HeaderContainer>
            <LogoContainer to="/">
                <Logo className="logo" />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to="/shop">SHOP</OptionLink>
                <OptionLink to="/contact">CONTACT</OptionLink>
                { currentUser ?
                    <OptionDiv onClick={handleSignOut}>SIGN OUT</OptionDiv>
                    :
                    <OptionLink to="/signin">SIGN IN</OptionLink>
                }
                <CartIcon />
            </OptionsContainer>

            { hidden ?
                null
                :
                <CartDropdown />
            }
        </HeaderContainer>
    )
}

// createStructuredSelector will take the top level state and pass it to the individual selectors. This is useful when you have multiple selectors from multiple reducers.
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectHidden
});

export default connect(mapStateToProps)(Header);