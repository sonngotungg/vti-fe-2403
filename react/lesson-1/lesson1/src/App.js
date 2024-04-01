import { useState } from "react";
import "./App.css"; // ES6: import ----> đây là nơi mình import Style cho component
import Communication from "./components/Communication";
import { Button } from "@mui/material";

function App() {
  const [isShow, setIsShow] = useState(true);

  const handleShow = () => setIsShow(true);
  const handleHide = () => setIsShow(false);
  const handleToggle = () => setIsShow(!isShow);

  return (
    <>
      <div>
        <Button onClick={handleShow} variant="contained">
          SHOW
        </Button>
        <Button onClick={handleHide} variant="outlined">
          HIDE
        </Button>
        <Button onClick={handleToggle} variant="outlined">
          TOGGLE
        </Button>
      </div>
      {isShow && <Communication />}
    </>
  );
}

export default App; // ES6: Export
