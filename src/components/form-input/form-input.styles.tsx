import styled, { css } from 'styled-components';

const subColor = 'rgb(255, 255, 255)';
const mainColor = '#202731';

const shrinkLabelStyles = css`
top: -14px;
font-size: 12px;
color: ${subColor};
`;

type FormInputLabelProps = {
  shrink?: boolean;
};

export const FormInputLabel = styled.label<FormInputLabelProps>`
color: ${subColor};
font-size: 17px;
font-weight: normal;
position: absolute;
pointer-events: none;
left: 5px;
top: 10px;
transition: 300ms ease all;
  ${({ shrink }) => shrink && shrinkLabelStyles};
`;

export const Input = styled.input`
background: none;
background-color: none;
color: ${subColor};
font-size: 18px;
padding: 10px 10px 10px 5px;
display: block;
width: 100%;
border: none;
border-radius: 0;
border-bottom: 1px solid ${subColor};
margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ ${FormInputLabel} {
    ${shrinkLabelStyles};
  }
`;

export const Group = styled.div`
position: relative;
margin: 45px 0;
background: none;
font-family: 'Carter One';
font-size: 17px;

  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;
