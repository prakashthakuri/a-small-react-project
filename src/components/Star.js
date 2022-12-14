import React, { useState } from "react";
import mockData from "../mockData.json";
import Button from "./common/Button.Component";
import Input from "./common/Input.Component";
import StarCard from "./StarCard";

export default function Star() {
  const PopularStars = mockData;
  const NumberOfStars = PopularStars.length;

  const [inputValue, setInputValue] = useState("");
  const [transformValue, setTransformValue] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [storedStarObj, setStoredStarObj] = useState([]);

  const randomMultipleValue = (arr, num) => {
    const shuffle = [...arr].sort(() => 0.5 - Math.random());

    return shuffle.slice(0, num);
  };

  const inputOnChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setInputValue(Number(value));
  };

  const onButtonClick = () => {
    if (inputValue > NumberOfStars || inputValue === 0)
      setErrorMessage("Error! Select the available number of stars");
    else setErrorMessage(null);

    if (inputValue) {
      setStoredStarObj(randomMultipleValue(PopularStars, inputValue));
    }
    console.log(storedStarObj);
  };

  const [handleTriangleOpacity, setHandleTriangleOpacity] = useState("1");
  const [handleCircleOpacity, setHandleCircleOpacity] = useState("1");
  const [handleSquareOpacity, setHandleSquareOpacity] = useState("1");

  let circleClick, squareClick, triangleClick;

  console.log(handleCircleOpacity);

  const starNames = storedStarObj.map((name, key) => {
    circleClick = () => {
      console.log("click");
      handleCircleOpacity === "1"
        ? setHandleCircleOpacity("0.5")
        : setHandleCircleOpacity("1");
    };
    triangleClick = () => {
      handleTriangleOpacity === "1"
        ? setHandleTriangleOpacity("0.5")
        : setHandleTriangleOpacity("1");

      console.log(handleTriangleOpacity);
    };
    squareClick = () => {
      handleSquareOpacity === "1"
        ? setHandleSquareOpacity("0.5")
        : setHandleSquareOpacity("1");
    };

    if (inputValue < NumberOfStars) {
      return (
        <>
          {name.type === "square" ? (
            <StarCard
              key={key}
              storedData={name}
              squareOpacity={handleSquareOpacity}
              triangleOpacity={handleTriangleOpacity}
              circleOpacity={handleCircleOpacity}
            />
          ) : null}
          {name.type === "triangle" ? (
            <StarCard
              key={key}
              storedData={name}
              squareOpacity={handleSquareOpacity}
              triangleOpacity={handleTriangleOpacity}
              circleOpacity={handleCircleOpacity}
            />
          ) : null}
          {name.type === "circle" ? (
            <StarCard
              key={key}
              storedData={name}
              squareOpacity={handleSquareOpacity}
              triangleOpacity={handleTriangleOpacity}
              circleOpacity={handleCircleOpacity}
            />
          ) : null}
        </>
      );
    } else return null;
  });

  return (
    <div className="card">
      <Input placeholder="N" value={inputValue} inputOnChange={inputOnChange} />

      <Button label="Submit" handleClick={onButtonClick} />

      <h3 className="danger">{errorMessage}</h3>

      <div className="star-card">
        <div
          className="star-subCard"
          style={{
            transform: `translate(${transformValue}px,0)`,
            transition: "all 1s ease 0s",
          }}
        >
          {starNames}
        </div>
      </div>

      <div>
        <div className="button">
          <button onClick={circleClick}> Circle</button>
          <button onClick={triangleClick}> Triangle</button>
          <button onClick={squareClick}> Square</button>
          <button
            onClick={() => setTransformValue((prevValue) => prevValue + 5)}
          >
            {" "}
            Forward
          </button>
          <button
            onClick={() => setTransformValue((prevValue) => prevValue - 5)}
          >
            {" "}
            Backward
          </button>
        </div>
      </div>
    </div>
  );
}
