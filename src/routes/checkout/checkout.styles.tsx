import styled from 'styled-components';
import Button from '../../components/button/button.component';

export const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;

export const Total = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;

export const AddressContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-radius: 35px 20px;
background-color: #abe9cd;
background-image: linear-gradient(90deg, #abe9cd 0%, #3eadcf 74%);
height: 8rem;
width: 30rem;
margin-bottom: 2rem;
`;
export const AddressTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;
export const AddressText = styled.div`
  font-size: 1.2rem;
  margin-bottom: .3rem;
`;

export const PaymentContainer = styled.div`
margin-top: -1.5rem;
display: flex;
width: 70rem;
justify-content: space-between;
align-items: center;
`;

export const ProceedToPay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  h2 {
    margin-bottom: -.8rem;
  }
  h1 {
    color: white;
    font-size: 2rem;
    margin-top: 0rem;
  }
`;

export const SignInButton = styled(Button)`

`;