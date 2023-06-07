import styled from 'styled-components';
import Button from '../button/button.component';

export const AddressFormContainer = styled.div`
height: 40rem;
width: 600px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-radius: 35px 20px;
margin-bottom: 2rem;
h2 {
    color: white;
    font-size: 1.8rem;
    margin-bottom: .5rem;
}
`;

export const FormContainer = styled.form`
  min-width: 500px;
  align-items: center;
`;

export const SubmitButton = styled(Button)`
  margin-left: auto;
  margin-top: 0px;
  z-index: 5;
`;