import React from 'react';
import './formbutton.scss';

import { CustomButtomContainer } from './formButton.styles';



// take not of all of the props being bassed into the buton. When you separate them the syles into styled components, you need be aware of other components that need to be aware of certain styles.
const FormButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => {
    return (
      <button
        className={`${inverted ? 'inverted' : ''} ${
          isGoogleSignIn ? 'google-sign-in' : ''
        } custom-button`}
        {...otherProps}
      >
        {children}
    </button>
    )
}

export default FormButton;