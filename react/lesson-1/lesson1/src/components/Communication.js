import { Button } from "@mui/material";
import React, { useState } from "react";
import ChildComponent from "./ChildComponent";
import "./Communication.css";

const Communication = () => {
  const [count, setCount] = useState(0);
  const [intro, setIntro] = useState("");

  const handleIncrease = () => {
    console.log("increase");
    const newCount = count + 1;
    setCount(newCount);
  };

  const handleDecrease = () => {
    const newCount = count - 1;
    setCount(newCount);
  };

  const handleDoubleUp = () => setCount(count * 2);
  const handleSendIntro = (dataFromChild) => {
    setIntro(dataFromChild);
  };

  return (
    <div className="Communication">
      <h1>Intro: {intro}</h1>
      <ChildComponent
        count={count}
        key1={1}
        key2={2}
        onDoubleUp={handleDoubleUp}
        // onSend={() => handleSendIntro(data)}
        onSend={handleSendIntro}
      />
      <div>
        <Button onClick={handleIncrease} variant="contained">
          +
        </Button>
        <Button onClick={handleDecrease} variant="outlined">
          -
        </Button>
      </div>
    </div>
  );
};

export default Communication;
