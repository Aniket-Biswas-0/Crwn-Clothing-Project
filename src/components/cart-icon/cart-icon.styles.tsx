import styled from 'styled-components';

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    width: 2rem;
    height: 2rem;
  }
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: .15rem;
  bottom: 6px;
`;
