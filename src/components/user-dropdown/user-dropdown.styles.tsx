import styled from 'styled-components';

export const MenuContainer = styled.div`
  font-family: 'Carter One';
  font-size: 1rem;
  display: inline-block;
`;

export const MenuTrigger = styled.button`
    cursor: pointer;
    border: none;
    background-color: transparent;
    color: #FFF;
    font-size: 1.5em;
    font-decoration: none;
    text-transform: uppercase;
    font-family: 'Carter One';
`;

export const DropdownMenu = styled.div`
    margin-left: 1.4rem;
    position: absolute;
    background-color: #37B140;
    border-radius: 8px;
    width:200px;
    

    &::before{
        content: '';
        position: absolute;
        top: -5px;
        right: 20px;
        height: 20px;
        width: 20px;
        background: #37B140;
        transform: rotate(45deg);
    }
`;

export const MenuItems = styled.div`
    padding-left: 1.8rem;
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
        opacity: 0.5;
        transition: 500ms;
      }
    & a{
        max-width: 100px;
        margin-left: 10px;
        transition: 500ms;
      }
`;

export const ActiveDropdown = styled.div`
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    transition: 500ms ease;
    h3{
        width: 100%;
        text-align: center;
        font-size: 18px;
        padding: 20px 0;
        font-weight: 500;
        font-size: 18px;
        color: #cecece;
        line-height: 1.2rem;
      }
`;
export const InactiveDropdown = styled.div`
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition: 500ms ease;
`;