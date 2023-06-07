import styled from 'styled-components';

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 98px;
  padding-bottom: 5px;
  margin-bottom: 10px;
  box-shadow: -5px 2px 3px rgba(0, 0, 0, 0.4);
}

  img {
    max-width: 75px;
    max-hight: 75px;
    border-radius: 20px 10px;
  }
`;

export const ItemDetails = styled.p`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0px 15px;
`;

export const BaseSpan = styled.span`
display: flex;
align-items: center;
font-size: 16px;
padding: 5px 0px;
text-shadow: 2px 4px 4px rgba(0 ,0 ,0 , .6);
`;

export const Quantity = styled(BaseSpan)`
  display: flex;
  text-shadow: 2px 4px 4px rgba(0 ,0 ,0 , .6);
`;

export const Arrow = styled.div`
  cursor: pointer;
  margin: 15px;
`;

export const Value = styled.span`
 margin: 0px -10px;
 text-shadow: 2px 4px 4px rgba(46,91,173,0.6);
`;

export const RemoveButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: white;
  text-shadow: 2px 4px 4px rgba(0 ,0 ,0 , .6);
`;