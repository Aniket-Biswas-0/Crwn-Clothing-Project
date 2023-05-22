import styled from 'styled-components';

export const SignInContainer = styled.div`
display: flex;
    flex-direction: column;
    width: 380px;
    text-shadow: -2px -1px 5px black;
    color: white;

  h2 {
    margin: 10px 0;
    font-family: 'Carter One';
    font-size: 35px;
  }

  span {
    font-family: 'Carter One';
    font-size: 20px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
