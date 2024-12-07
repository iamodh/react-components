import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  background-color: ${(props) =>
    props.$isModal ? "rgba(0,0,0,0.5)" : "transparent"};
`;

const Button = styled.button`
  margin-top: 64px;
`;

const Modal = styled.div`
  box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.5);

  background-color: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 500px;
  border-radius: 32px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 48px;
`;

const Month = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-top: 24px;
`;

const Days = styled.div`
  display: flex;
  align-items: center;
`;

export default function Calender() {
  const [isModal, setIsModal] = useState(false);
  const [month, setMonth] = useState(1);

  const handleModal = () => {
    setIsModal((prev) => !prev);
  };

  const handleMonthDown = () => {
    if (month <= 1) setMonth(12);
    else setMonth((month) => month - 1);
  };

  const handleMonthUp = () => {
    if (month >= 12) setMonth(1);
    else setMonth((month) => month + 1);
  };

  return (
    <>
      <Wrapper $isModal={isModal}>
        <Button onClick={handleModal}>{isModal ? "Off" : "On"}</Button>
        {isModal && (
          <Modal>
            <Month>
              <button onClick={handleMonthDown}>{"<"}</button>
              <h2>{month}월</h2>
              <button onClick={handleMonthUp}>{">"}</button>
            </Month>
            <Days>
              <span>1</span>
            </Days>
          </Modal>
        )}
      </Wrapper>
    </>
  );
}
