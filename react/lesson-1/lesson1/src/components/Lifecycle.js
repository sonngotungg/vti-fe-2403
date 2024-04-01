import { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import "./Lifecycle.css";

const Lifecycle = () => {
  // tao state
  //   console.log("1");
  const [count, setCount] = useState(0);
  const [intro, setIntro] = useState("");
  //   console.log("2");

  //   C1: useEffect(callback)
  //   C2: useEffect(callback, [])
  //   C3: useEffect(callback, [item1, item2, ...])

  //   useEffect(() => {
  //     ///
  //     console.log("100 - run everytime component re-render");
  //   });

  //   useEffect(() => {
  //     console.log("200 - run 1 time when component mounting");
  //   }, []);

  // useEffect(() => {
  //   console.log(
  //     "300 - run 1 time when component mounting and when count is changed"
  //   );

  //   return ()
  // }, [count]);

  useEffect(() => {
    return () => {
      // do sth before unmounting
      console.log("unmounting 1");
    };
  });

  useEffect(() => {
    return () => {
      // do sth before unmounting
      console.log("unmounting 2");
    };
  }, []);

  useEffect(() => {
    const internalId = setInterval();
    return () => {
      // do sth before unmounting
      console.log("unmounting 3");
    };
  }, [count]);

  const handleIncrease = () => {
    console.log("increase");
    const newCount = count + 1;
    setCount(newCount);
  };

  const handleDecrease = () => {
    const newCount = count - 1;
    setCount(newCount);
  };
  //   console.log("3");

  const handleTextFieldChange = (e) => {
    setIntro(e.target.value);
  };

  return (
    <div className="Lifecycle">
      {/* {console.log("4")} */}
      <h1>Count: {count}</h1>
      <h1>Intro: {intro}</h1>
      {/* <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button> */}
      <div>
        <Button onClick={handleIncrease} variant="contained">
          +
        </Button>
        <Button onClick={handleDecrease} variant="outlined">
          -
        </Button>
      </div>
      <div style={{ marginTop: "40px" }}>
        <TextField
          value={intro}
          onChange={handleTextFieldChange}
          id="outlined-search"
          label="Search field"
          type="search"
        />
      </div>
    </div>
  );
};

export default Lifecycle;
