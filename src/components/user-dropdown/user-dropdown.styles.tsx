import styled from 'styled-components';

export const MenuContainer = styled.div`
  font-family: 'Carter One';
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

export const DropdownMenu = styled.div`
    position: absolute;
    background-color: #37B140;
    border-radius: 8px;
    width:200px;
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    transition: 500ms ease;
    z-index: 1;
    top: 65px;
    right: 120px;
    h3{
        width: 100%;
        text-align: center;
        font-size: 18px;
        padding: 10px 0;
        font-weight: 500;
        font-size: 18px;
        color: #cecece;
        line-height: 1.2rem;
      }

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
export const InactiveDropdown = styled.div`
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition: 500ms ease;
`;