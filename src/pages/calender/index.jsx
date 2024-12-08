import { useEffect, useState } from "react";
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
`;

const Month = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-top: 20px;
`;

const Days = styled.div`
  display: grid;
  width: 400px;
  gap: 16px;
  grid-template-columns: repeat(7, 40px);
  grid-auto-rows: 40px;
  justify-content: center;

  span:nth-child(7n + 1) {
    color: red;
  }

  span:nth-child(7n) {
    color: blue;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
  }
`;

export default function Calender() {
  const getFirstDayOfWeek = (year, month) => {
    return new Date(year, month - 1, 1).getDay();
  };

  const getLastDay = (year, month) => {
    return new Date(date.year, date.month, 0).getDate();
  };

  const [isModal, setIsModal] = useState(false);

  const today = new Date();
  const [date, setDate] = useState({
    year: today.getFullYear(),
    month: today.getMonth() + 1,
    day: today.getDate(),
  });

  const [days, setDays] = useState(
    // ["","","", 1, 2, 3, ... , 31]
    [
      ...Array(getFirstDayOfWeek(date.year, date.month)).fill(""),
      ...Array(getLastDay(date.year, date.month)).keys(),
    ].map((i) => {
      if (i === "") return "";
      else return i + 1;
    })
  );

  const handleModal = () => {
    setIsModal((prev) => !prev);
  };

  const handleMonthDown = () => {
    if (date.month <= 1)
      setDate((prev) => {
        return { ...prev, year: prev.year - 1, month: 12 };
      });
    else
      setDate((prev) => {
        return { ...prev, month: prev.month - 1 };
      });
  };

  useEffect(() => {
    setDays(
      [
        ...Array(getFirstDayOfWeek(date.year, date.month)).fill(""),
        ...Array(getLastDay(date.year, date.month)).keys(),
      ].map((i) => {
        if (i === "") return "";
        else return i + 1;
      })
    );
  }, [date]);

  const handleMonthUp = () => {
    if (date.month >= 12)
      setDate((prev) => {
        return { ...prev, year: prev.year + 1, month: 1 };
      });
    else
      setDate((prev) => {
        return { ...prev, month: prev.month + 1 };
      });
  };

  console.log(days);
  return (
    <>
      <Wrapper $isModal={isModal}>
        <Button onClick={handleModal}>{isModal ? "Off" : "On"}</Button>
        {isModal && (
          <Modal>
            <Month>
              <button onClick={handleMonthDown}>{"<"}</button>
              <h2>
                {date.year}년 {date.month}월
              </h2>
              <button onClick={handleMonthUp}>{">"}</button>
            </Month>
            <Days>
              {["일", "월", "화", "수", "목", "금", "토"].map((i) => (
                <span style={{ fontWeight: "bold" }} key={i}>
                  {i}
                </span>
              ))}
              {days.map((day, index) => (
                <span key={index}>{day}</span>
              ))}
            </Days>
          </Modal>
        )}
      </Wrapper>
    </>
  );
}
