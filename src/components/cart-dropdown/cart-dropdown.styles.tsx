import styled, { keyframes } from 'styled-components';

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from '../button/button.styles';

const slideInAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 400px;
  height: 550px;
  display: flex;
  flex-direction: column;
  padding: 30px;
  border: 1px solid black;
  background-color: #37B140;
  top: 70px;
  right: 160px;
  opacity: 0;
  transform: translateY(-100%);
  animation-name: ${slideInAnimation};
  animation-duration: 500ms;
  animation-fill-mode: forwards;
  z-index: 5;
  border-radius: 35px 10px;
  box-shadow: 5px 4px 3px rgba(0, 0, 0, .6);
  background: radial-gradient(circle, rgba(86, 237, 5, 1) -10%, rgba(5, 83, 135, 1) 50%, rgba(1, 33, 40, 1) 120%);
  font-family: 'Inter', sans-serif;
  font-weight: 900;

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin: auto;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: auto;
  text-shadow: 2px 4px 4px rgba(0 ,0 ,0 , .6);
`;

export const CartItems = styled.div`
  height: 450px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  scrollbar-width: none;
  border-bottom: 2px solid #EFC4C4;
  margin-bottom: 5px;

	&::-webkit-scrollbar {
		width: 0em;
	  }
	&::-webkit-scrollbar-thumb {
		background-color: transparent;
	  }
`;

export const Total = styled.span`
margin-left: auto;
margin-bottom: 20px;
font-size: 18px;
`;