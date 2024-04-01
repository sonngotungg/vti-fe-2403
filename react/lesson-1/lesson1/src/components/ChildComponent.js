import { Button } from "@mui/material";
import React from "react";

const ChildComponent = (props) => {
  console.log({ props });
  return (
    <>
      <h1>Count: {props.count}</h1>
      <h1>Key1 Value: {props.key1}</h1>
      <h1>Key2 Value: {props.key2}</h1>
      <Button onClick={props.onDoubleUp}>Double Up</Button>
      <Button onClick={() => props.onSend("data from child")}>
        Send data from child to parent
      </Button>
    </>
  );
};

export default ChildComponent;
