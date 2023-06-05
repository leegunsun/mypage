import styled from "styled-components";
import { Link } from "react-router-dom";

const link = styled(Link)`
  padding: 10px;
  font-size: 1.5rem;
  color: black;
  font-weight: bold;
  text-decoration-line: none;
  margin-bottom: 10px;
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
  /* height: 10vh; // 뷰포트의 높이를 100%로 설정 */
`;

const HeaderImage = styled.img`
  // 원하는 스타일링을 여기에 추가하세요.
  // 예를 들어, 너비를 100%로 설정하려면 아래와 같이 작성하세요.
  width: 100%;
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
  font-size: 5rem;
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
