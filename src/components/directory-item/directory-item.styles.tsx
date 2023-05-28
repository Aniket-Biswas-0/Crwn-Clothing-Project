import styled from 'styled-components';

type BackgroundImageProps = {
  imageUrl: string;
};

export const BackgroundImage = styled.div<BackgroundImageProps>`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const Body = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
  position: absolute;
  max-width: 200px;

  h2 {
    font-weight: bold;
    margin: 0 6px 0;
    font-size: 22px;
    color: #4a4a4a;
    text-transform: uppercase;
    z-index: 1;
  }

  p {
    font-weight: lighter;
    font-size: 16px;
    z-index: 1;
  }

  svg {
    height: 290px;
    position: absolute;
  }
`;

export const DirectoryItemContainer = styled.div`
  min-width: 30%;
  height: 340px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 10px 7.5px 15px;
  overflow: hidden;
  border-radius: 50px 20px;

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  &:hover {
    cursor: pointer;

    ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    ${Body} {
      opacity: 0.9;
    }
  }

  @media screen and (max-width: 800px) {
    height: 200px;

  }

  overflow: hidden;
  position: relative;

  /* For Webkit-based browsers (Chrome, Safari) */
  ::-webkit-scrollbar {
    display: none;
  }

  /* For Firefox */
  scrollbar-width: none;
  -ms-overflow-style: none;
`;
