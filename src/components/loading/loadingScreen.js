import styled, { keyframes } from "styled-components";

export default function LoadingScreen() {
  return (
    <LoadingSection>
      <LoadingBox>
        <div />
      </LoadingBox>
    </LoadingSection>
  );
}

const LoadingSection = styled.section`
  width: 100vw;
  height: 100vh;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const keyFrame = keyframes`
    0% {
        transform: translateX(0);
    } 
    50% {
        transform: translateX(-17vw);
    }
    100% {
        transform: translateX(0vw);
    }
`;

const LoadingBox = styled.div`
  width: 20vw;
  height: 10px;
  border-radius: 5px;
  overflow: hidden;
  background: #cfcfcf;
  display: flex;

  & > div {
    height: 10px;
    width: 3vw;
    border-radius: 5px;
    background: #ffaa00;
    animation: ${keyFrame} 1.5s ease-in-out infinite;
  }
`;
