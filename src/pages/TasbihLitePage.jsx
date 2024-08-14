import { useState } from "react";
import ControlButtons from "../components/buttons/ControlButtons";
import Heading from "../components/heading/Heading";
import Screen from "../components/screen/Screen";
import "./tasbihLite.css";

const TasbihLitePage = () => {
  const [count, setCount] = useState(0);

  function handleIncrease() {
    setCount((prev) => prev + 1);
  }

  function handleDecrease() {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  }

  function handleReset() {
    setCount(0);
  }

  return (
    <div className="tasbih-container">
      <Heading count={count} />
      <Screen count={count} />
      <ControlButtons
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
        onReset={handleReset}
      />
    </div>
  );
};

export default TasbihLitePage;
