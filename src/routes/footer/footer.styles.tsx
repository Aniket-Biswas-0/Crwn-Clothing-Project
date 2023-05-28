import styled from "styled-components";

import {
    BaseButton,
    GoogleSignInButton,
    InvertedButton,
  } from '../../components/button/button.styles'

export const FooterContainer = styled.div `
    display: flex;
    justify-content: space-evenly;
    background-color: black;
    color: white;
    padding: 0px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 50px;
    padding-bottom: 20px;
    border-radius: 50px 50px 0px 0px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const SiteNavigation = styled.div `
  h4 {
    text-align: center;
    font-size: 18px;
    font-family: 'Carter One', cursive;
    margin-bottom: 16px;
  }
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  ul li {
    margin-bottom: 10px; /* Increase or decrease this value as needed */
  }
`;

export const FollowUs = styled.div `
h4 {
    text-align: center;
    font-size: 18px;
    font-family: 'Carter One', cursive;
    margin-bottom: 16px;
  }
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  ul li {
    margin-bottom: 10px; /* Increase or decrease this value as needed */
  }
`;

export const Newsletter = styled.div `
h4 {
    text-align: center;
    font-size: 18px;
    font-family: 'Carter One', cursive;
    margin-bottom: 16px;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    padding: 0;
    margin: 0;
    margin-top: -40px;
  }
  
  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin: -55px;
  }
`;

export const ContactUs = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    padding: 0;
    margin: 0;
h4 {
    text-align: center;
    font-size: 18px;
    font-family: 'Carter One', cursive;
    margin-bottom: 16px;
  }

  p {
    text-align: center;
    max-width: 200px;
  }
`;