import { useContext, useState } from "react";
import "./home.css";
import { CSSTransition } from "react-transition-group";
import { TransitionTimeOut } from "./constants";
import PropTypes from "prop-types";
import { ThemeContext } from "../App";

const Counter = () => {
  const themeclass = useContext(ThemeContext);
  console.log(themeclass);
  const [count, ChangeCounter] = useState(0);
  //Determines if the state is entering or exiting.
  const [isEnter, ChangeIsEnter] = useState(true);
  // const textsizeclass = "fsize" + themeclass;
  function timeout(delay) {
    return new Promise((res) => setTimeout(res, delay));
  }

  return (
    <div className="grid-container">
      <div
        className={"fsize" + themeclass + " grid-item"}
        onClick={async () => {
          ChangeIsEnter(false);
          await timeout(TransitionTimeOut);
          ChangeCounter((oldCount) => oldCount - 1);
          ChangeIsEnter(true);
        }}
      >
        -
      </div>
      <CSSTransition
        in={isEnter}
        timeout={TransitionTimeOut}
        classNames="animate-count"
      >
        <div className={"fsize" + themeclass + " grid-item"}>{count}</div>
      </CSSTransition>
      <div
        className={"fsize" + themeclass + " grid-item"}
        onClick={async () => {
          if (isEnter) ChangeIsEnter(false);
          await timeout(TransitionTimeOut);
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
