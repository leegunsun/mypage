import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Test = styled.div`
  background-color: ${(props) => props.color};
  padding: ${(props) => props.padding}px;
  animation: ${rotate} 2s linear forwards;
`;

const link = styled(Link)`
  padding: 10px;
  font-size: 24px;
  color: black;
  font-weight: bold;
  text-decoration-line: none;
  margin-bottom: 10px;

  &:hover {
    color: gray;
  }
  &:active {
    color: black;
  }

  animation-duration: 1s;
  animation-name: slidein;
  animation-fill-mode: backwards; // Add this line

  @keyframes slidein {
    from {
      margin-left: 100%;
      width: 300%;
    }

    to {
      margin-left: 0%;
      width: 100%;
    }
  }
`;

const linkContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 200px;
  margin-top: 0px;
`;

const mainContainer = styled.div``;

const titleContainer = styled.h4`
  margin-left: 20px;
  width: 100%;
`;

const HeaderImage = styled.img`
  width: 100%; // width is set to 100% to adjust with browser width
  height: 200px; // height is set to a fixed value
  object-fit: cover; // object-fit is set to cover to maintain the aspect ratio
`;

const wrapContainer = styled.div`
  position: relative;
  width: 100%;
`;

const imgText = styled.p`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 1rem;
  left: 50%;
  width: 100%;
  text-align: center;
  font-size: 80px;
  font-weight: bold;
`;

const BorderLine = styled.div`
  border-bottom: 1px solid #333;
  width: 80%;
  position: absolute;
  margin-top: 50px;
`;

export {
  link,
  linkContainer,
  mainContainer,
  titleContainer,
  HeaderImage,
  wrapContainer,
  imgText,
  BorderLine,
};
