import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: -5px;
  font-family: 'Carter One';
  background: #000a13;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px 20px;
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 470px;
  padding: 25px;
  & span{
    padding-left: 20px;
    font-size: 2rem;
    text-transform: uppercase;
  }

  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0px;
  }
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 5rem;
  margin-top: 10px;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const NavLink = styled(Link)`
  padding: 0px 20px;
  margin-top:0px;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 1.5rem;
  
  div{
    margin-right: 25px;
  }
  }
`;