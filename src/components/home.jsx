import { useState } from "react";
import "./home.css";
import { CSSTransition } from "react-transition-group";

const Counter = () => {
  const [count, ChangeCounter] = useState(0);
  const [isEnter, ChangeIsEnter] = useState(true);
  function timeout(delay) {
    return new Promise((res) => setTimeout(res, delay));
  }

  return (
    <div className="grid-container">
      <div
        className="fsize grid-item"
        onClick={async () => {
          ChangeIsEnter(false);
          await timeout(500);
          ChangeCounter((oldCount) => oldCount - 1);
          ChangeIsEnter(true);
        }}
      >
        -
      </div>
      <CSSTransition in={isEnter} timeout={500} classNames="animate-count">
        <div className="fsize grid-item">{count}</div>
      </CSSTransition>
      <div
        className="fsize grid-item"
        onClick={async () => {
          if (isEnter) ChangeIsEnter(false);
          await timeout(500);
          ChangeCounter((oldCount) => oldCount + 1);
          ChangeIsEnter(true);
        }}
      >
        +
      </div>
    </div>
  );
};

export default Counter;
