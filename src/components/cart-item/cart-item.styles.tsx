import styled from 'styled-components';

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 98px;
  padding-bottom: 5px;
  margin-bottom: 15px;
  box-shadow: -5px 2px 3px rgba(0, 0, 0, 0.4);
}

  img {
    max-width: 65px;
    max-hight: 70px;
    border-radius: 20px 10px;
  }
`;

export const ItemDetails = styled.p`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;

  span {
    display: flex;
    align-items: center;
    font-size: 16px;
    padding: 5px 0px;
  }
`;