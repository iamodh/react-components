import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 600px;
  box-shadow: inset 0 0 20px purple;
  aspect-ratio: 600/300;
  position: relative;

  background-image: ${(props) => `url(${props.$imageUrl})`};
`;

const Button = styled.button`
  all: unset;
  font-size: 32px;
  color: white;
  font-weight: bold;

  position: absolute;
  transform: translateY(-50%);

  &:focus {
    border: 1px solid blue;
  }
`;

const LeftButton = styled(Button)`
  left: 0;
  top: 50%;
`;

const RightButton = styled(Button)`
  right: 0;
  top: 50%;
`;

const Circles = styled.div`
  display: flex;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 20px;
  gap: 10px;
`;

const Circle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  cursor: pointer;
  background-color: ${(props) =>
    props.$active ? "white" : "rgba(0, 0, 0, 0.8)"};
`;

const images = [
  "https://fastly.picsum.photos/id/92/600/300.jpg?hmac=AYomWlz9wXpwr2LelD8tlQcLadspJLD_k8F-09V8DYk",
  "https://fastly.picsum.photos/id/362/600/300.jpg?hmac=x1yN59uj1PhuhVpgzAQYfkG-HUos8iz0n9PIHV96W3A",
  "https://fastly.picsum.photos/id/564/600/300.jpg?hmac=a-cVRfcTpXv2iDqLqb6e_OgVvgYXKYgSrFjg_yhhHK8",
  // "https://fastly.picsum.photos/id/1003/600/300.jpg?hmac=cW28FZkYcDHn7i8N6YFVZgNd2KQOHZiv54jOIpts9fI"
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCircle, setCurrentCircle] = useState(null);

  const handleRight = () => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handleLeft = () => {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleCircleClick = (event) => {
    const circleId = +event.target.id;
    console.log(circleId);
    setCurrentIndex(circleId);
  };

  console.log(currentIndex);
  return (
    <>
      <Container $imageUrl={images[currentIndex]}>
        <LeftButton onClick={handleLeft}>{"<"}</LeftButton>
        <RightButton onClick={handleRight}>{">"}</RightButton>
        <Circles>
          {images.map((_, index) => (
            <Circle
              onClick={handleCircleClick}
              key={index}
              id={index}
              $active={index === currentIndex}
            />
          ))}
        </Circles>
      </Container>
    </>
  );
}
