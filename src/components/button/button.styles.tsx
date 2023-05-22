import styled, { keyframes } from 'styled-components';

import { SpinnerContainer } from '../spinner/spinner.styles';

const buttonBackgroundColor = '#6200ee';
const buttonHoverColor = '#3700b3';
const buttonTextColor = '#ffffff';

const buttonBorderColor = '#6200ee';
const buttonHoverBorderColor = '#ffffff';

const buttonAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

export const BaseButton = styled.button`
min-width: 165px;
width: auto;
height: 50px;
letter-spacing: 0.5px;
line-height: 50px;
padding: 0 35px 0 35px;
font-size: 15px;
background-color: black;
color: white;
text-transform: uppercase;
font-family: 'Carter One';
font-weight: bolder;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
border-radius: 8px;
margin: 20px auto;

  &:hover {
    background-color: white;
      color: black;
      border: 1px solid black;
      border-radius: 12px;
      transform: scale(1.03);
      transition: transform .5s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }

  &:focus {
    outline: none;
  }

  &:active {
    animation: ${buttonAnimation} 0.3s ease;
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
background-color: #4285f4;
color: white;
text-shadow: -1px -1px 5px black;
border: 1px solid rgb(106, 26, 235);

&:hover {
  background-color: #3173df;
  color: white;
  //border: none;
}
`;

export const InvertedButton = styled(BaseButton)`
background-color: white;
color: black;
border: 1px solid black;

&:hover {
  background-color: black;
  color: white;
  border: none;
}
`;

export const ButtonSpinner = styled(SpinnerContainer)`
  width: 30px;
  height: 30px;
`;

const zoomInAnimation = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

export const AnimatedButton = styled(BaseButton)`
  animation: ${zoomInAnimation} 0.5s ease;

  &:hover {
    animation: none;
    transform: scale(1);
  }
`;
