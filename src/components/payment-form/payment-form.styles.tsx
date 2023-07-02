import styled from 'styled-components';
import Button from '../button/button.component';

export const PaymentFormContainer = styled.div`
  height: 130px;
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 35px 20px;
  background-color: #abe9cd;
  background-image: linear-gradient(90deg, #abe9cd 0%, #3eadcf 74%);
  width: 35rem;
`;

export const FormContainer = styled.form`
  height: 100px;
  min-width: 500px;
  align-items: center;
  h2 {
    font-size: 2rem;
    margin-top: -.3rem;
    text-align: center;
  }
`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 8rem;
`;