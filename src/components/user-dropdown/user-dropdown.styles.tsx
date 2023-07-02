import styled, { keyframes } from 'styled-components';

export const MenuContainer = styled.div`
  font-family: 'Inter', sans-serif;
  font-weight: 900;
  font-size: 1rem;
`;

export const MenuTrigger = styled.div`
    cursor: pointer;
    border: none;
    background-color: transparent;
    margin-top: .8rem;
    color: #FFF;
    top: 15px;
    right: 100px
`;

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

export const DropdownMenu = styled.div`
    position: absolute;
    background-color: #37B140;
    border-radius: 8px;
    width:250px;
    opacity: 0;
    transform: translateY(-100%);
    animation-name: ${slideInAnimation};
    animation-duration: 500ms;
    animation-fill-mode: forwards;
    z-index: 7;
    top: 75px;
    right: 70px;
    border: 1px solid #000000; 
    box-shadow: 5px 4px 4px rgba(0, 0, 0, 0.6);

    h3{
        width: 100%;
        text-align: center;
        font-size: 18px;
        padding: 7px 0px;
        font-weight: 500;
        font-size: 18px;
        color: #f4f4f4;
        line-height: 1.2rem;
      }

    &::before{
        content: '';
        position: absolute;
        right: 15px;
        bottom: 220px;
        height: 20px;
        width: 20px;
        background: #37B140;
        transform: rotate(45deg);
    }
`;

export const MenuItems = styled.div`
    padding-left: 1.8rem;
    font-weight: 900;
    font-family: 'Inter', sans-serif;
`;

export const DropdownItems = styled.div`
    padding: 10px  0;
    border-top: 1px solid rgba(0, 0, 0, 0.05);
    &:hover a{
        color: #0A5B81;
        cursor: pointer;
      }
    &:hover img{
        opacity: 1;
        cursor: pointer;
      }
    & img{
        max-width: 20px;
        margin-right: 10px;
        margin-top: 5px;
        opacity: 1;
        transition: 500ms;
      }
    & a{
        max-width: 100px;
        margin-left: 10px;
        transition: 500ms;
      }
`;

const slideOutAnimation = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0px);
  }
  100% {
    opacity: 0;
    transform: translateY(-20px);
  }
`;

export const DropUpMenu = styled.div`
position: absolute;
background-color: #37B140;
border-radius: 8px;
width:200px;
opacity: 1;
transform: translateY(-100%);
animation-name: ${slideOutAnimation};
animation-duration: 500ms;
animation-fill-mode: forwards;
z-index: 7;
top: 75px;
right: 70px;
border: 1px solid #000000; 
box-shadow: 5px 4px 4px rgba(0, 0, 0, 0.6);

h3{
    width: 100%;
    text-align: center;
    font-size: 18px;
    padding: 7px 0px;
    font-weight: 500;
    font-size: 18px;
    color: #f4f4f4;
    line-height: 1.2rem;
  }

&::before{
    content: '';
    position: absolute;
    right: 15px;
    bottom: 280px;
    height: 20px;
    width: 20px;
    background: #37B140;
    transform: rotate(45deg);
}
`;