import styled from 'styled-components';

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from '../button/button.styles';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 350px;
  height: 700px;
  display: flex;
  flex-direction: column;
  padding: 30px;
  border: 1px solid black;
  background-color: #37B140;
  top: 70px;
  right: 200px;
  z-index: 5;
  border-radius: 35px 10px;
  box-shadow: 5px 4px 3px rgba(0, 0, 0, .6);
  background: radial-gradient(circle, rgba(86, 237, 5, 1) -10%, rgba(5, 83, 135, 1) 50%, rgba(1, 33, 40, 1) 120%);

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin: auto;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 130px auto;
`;

export const CartItems = styled.div`
  height: 570px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  scrollbar-width: none;

	&::-webkit-scrollbar {
		width: 0em;
	  }
	&::-webkit-scrollbar-thumb {
		background-color: transparent;
	  }
`;