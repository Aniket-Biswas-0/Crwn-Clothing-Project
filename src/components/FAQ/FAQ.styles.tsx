import styled from "styled-components";

export const FAQContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    font-family: 'Carter One', cursive;
    width: 900px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    h2 {
        font-size: 60px;
        margin-bottom: 20px;
    }
`;

export const FAQItems = styled.div`
    margin-bottom: 20px;
    .question.active {
        background-color: #555;
      }
`;

export const FAQQuestion = styled.div`
    background-image: linear-gradient(90deg, #abe9cd 0%, #3eadcf 74%);
    width: 800px;
    padding: 10px;
    cursor: pointer;
    font-size: 30px;
    box-shadow: 0 5px 4px rgba(0, 0, 0, 0.5);
    text-shadow: -1px 3px 0 #000, 1px -1px 0 #000, -1px 2px 0 #000, -1px 1px 0 #000;
    border-radius: 20px;
`;

export const FAQAnswer = styled.div `
    background-color: #555;
    padding: 10px;
    margin: 20px;
    font-size: 25px;
    background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(176,229,208,1) 42%, rgba(92,202,238,0.41) 93.6% );
    text-shadow: -1px 2px 0 #000, 1px -1px 0 #000, -1px 2px 0 #000, -1px 1px 0 #000;
    box-shadow: 0 5px 4px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
`
