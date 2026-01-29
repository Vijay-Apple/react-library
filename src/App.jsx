import { useState } from "react";
import "./App.css";

function App() {
  let [showCount, setShowCount] = useState(15);
  let increaseByOne = () => {
    showCount = showCount + 1;
    setShowCount(showCount);
    console.log(showCount);
    if (showCount === 100) {
      let afterEnter20 = "you are able to increase only 20 ";
      setShowCount(afterEnter20);
    }
  };
  let decreaseByOne = () => {
    showCount = showCount - 1;
    setShowCount(showCount);
    console.log(showCount);
    if (showCount === 0) {
      let negative_value_entering = "you are not able to Enter negative number";
      setShowCount(negative_value_entering);
    }
  };

  return (
    <>
      <h1>Google Count</h1>
      <br />
      <h2>show google count: {showCount}</h2>

      <button onClick={increaseByOne}>increaseByOne</button>
      <br />
      <br />
      <button onClick={decreaseByOne}>decreaseByOne</button>
    </>
  );
}

export default App;
