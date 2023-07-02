import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const CategoryPreviewContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: -30px;
  margin-bottom: 70px;
  font-family: 'Inter', sans-serif;

  @media screen and (max-width: 800px) {
    align-items: center;
  }
`;

export const Title = styled(Link)`
  font-size: 35px;
  margin-top: 25px;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
`;

export const Preview = styled.div`
  display: grid;
  margin: 20px 0px;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 80px;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 15px;
    grid-row-gap: 25px;
  }

  @media screen and (max-width: 400px) {
    grid-template-columns: 1fr;
    grid-row-gap: 25px;
  }
`;
