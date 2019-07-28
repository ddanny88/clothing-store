import styled, { css } from 'styled-components';


const buttonStyles = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;


const ItemStyles = css`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;

  &:hover {
    opacity: 0.85;
    display: flex;
  }
`;


const invertedStyles = css`
    background-color: white;
    color: black;
    border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;

    }
    /* ${ItemStyles} */
`;


const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

// function determines the additional styles based on the props passed into the component.
const getButtonStyles = props => {
    if (props.isGoogleSignIn) {
      return googleSignInStyles;
    }

    return props.inverted ? invertedStyles : buttonStyles;
};

// root button styles:
export const CustomButtomContainer = styled.button`
   min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;
  ${getButtonStyles}
`;

