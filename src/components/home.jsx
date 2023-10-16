import { useContext, useState } from "react";
import "./home.css";
import { CSSTransition } from "react-transition-group";
import { TransitionTimeOut } from "./constants";
import PropTypes from "prop-types";
import { ThemeContext, TransitionContext } from "../App";

const Counter = () => {
  const themeclass = useContext(ThemeContext);
  const { transitionName, setTransitionName } = useContext(TransitionContext);
  const [count, ChangeCounter] = useState(0);
  //Determines if the state is entering or exiting.
  const [isEnter1, ChangeIsEnter1] = useState(true);
  const [isEnter2, ChangeIsEnter2] = useState(false);
  // const textsizeclass = "fsize" + themeclass;

  return (
    <div className="grid-container">
      <div
        className={"fsize" + themeclass + " grid-item"}
        onClick={async () => {
          if (isEnter1) {
            isEnter1 ? ChangeIsEnter1(false) : ChangeIsEnter1(true);
            ChangeCounter((oldCount) => oldCount - 1);
            isEnter2 ? ChangeIsEnter2(false) : ChangeIsEnter2(true);
          } else {
            isEnter2 ? ChangeIsEnter2(false) : ChangeIsEnter2(true);
            ChangeCounter((oldCount) => oldCount - 1);
            isEnter1 ? ChangeIsEnter1(false) : ChangeIsEnter1(true);
          }
        }}
      >
        -
      </div>
      <div style={{ display: "block" }}>
        <CSSTransition
          in={isEnter1}
          timeout={TransitionTimeOut}
          classNames={"animate-count-" + transitionName}
        >
          {isEnter1 ? (
            <div className={"fsize" + themeclass + " grid-item"}>{count}</div>
          ) : (
            <div></div>
          )}
        </CSSTransition>
        <CSSTransition
          in={isEnter2}
          timeout={TransitionTimeOut}
          classNames={"animate-count-" + transitionName}
        >
          {isEnter2 ? (
            <div className={"fsize" + themeclass + " grid-item"}>{count}</div>
          ) : (
            <div></div>
          )}
        </CSSTransition>
      </div>
      <div
        className={"fsize" + themeclass + " grid-item"}
        onClick={async () => {
          if (isEnter1) {
            isEnter1 ? ChangeIsEnter1(false) : ChangeIsEnter1(true);
            ChangeCounter((oldCount) => oldCount + 1);
            isEnter2 ? ChangeIsEnter2(false) : ChangeIsEnter2(true);
          } else {
            isEnter2 ? ChangeIsEnter2(false) : ChangeIsEnter2(true);
            ChangeCounter((oldCount) => oldCount + 1);
            isEnter1 ? ChangeIsEnter1(false) : ChangeIsEnter1(true);
          }
        }}
      >
        +
      </div>
    </div>
  );
};

export default Counter;
