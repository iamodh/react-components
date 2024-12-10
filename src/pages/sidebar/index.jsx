import { useState } from "react";
import styled, { css, keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    left: 300px;
  }
  100% { 
    left: 0;
  }
`;
const fadeOut = keyframes`
  0% {
    left: 0;
  }
  100% { 
    left: 300px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  overflow: hidden;
  background-color: ${(props) =>
    props.$active ? `rgba(0, 0, 0, 0.5);` : "transparent"};
`;

const Container = styled.div`
  width: 300px;
  height: 100vh;
  margin-left: auto;
  background-color: green;
  position: relative;
  left: 300px;
  ${(props) =>
    props.$active
      ? css`
          animation: ${fadeIn} 0.4s ease-in forwards;
        `
      : css`
          animation: ${fadeOut} 0.4s ease-in forwards;
        `};
`;

const Button = styled.button`
  position: absolute;
  top: 30px;
  right: 0;
`;

export default function Sidebar() {
  const [active, setActive] = useState(false);

  return (
    <Wrapper $active={active}>
      <Button
        onClick={() => {
          setActive(true);
        }}
      >
        메뉴
      </Button>
      <Container $active={active}>
        <button
          onClick={() => {
            setActive(false);
          }}
        >
          닫기
        </button>
      </Container>
      ;
    </Wrapper>
  );
}
