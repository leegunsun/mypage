import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  /* height: 100vh; // 브라우저 높이를 전부 차지하도록 설정 */
`;

export const descBoard = styled.div`
  position: relative;
  background-color: blue;
  display: flex;
  justify-content: center; // 수정된 코드
  align-items: center; // 수정된 코드
  flex-direction: column;
  margin-top: 80px;
  border: 1px solid #000;
  width: 80%;
  height: 100%;
  min-height: 65vh;
`;

export const descCard = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 40px 40px 40px 40px;
  background-color: white;
  position: relative;
  width: 80%;
  height: 7rem;
`;
