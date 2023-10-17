import { useContext, useState } from "react";
import "./home.css";
import { CSSTransition, Transition } from "react-transition-group";
import { TransitionTimeOut } from "./constants";
import { ThemeContext, TransitionContext } from "../App";
import { red } from "@mui/material/colors";

const Counter = () => {
  const themeclass = useContext(ThemeContext);
  const { transitionName, setTransitionName } = useContext(TransitionContext);
  const [count, ChangeCounter] = useState(0);
  //Determines if the state is entering or exiting.
  const [isEnter1, ChangeIsEnter1] = useState(true);
  const [isEnter2, ChangeIsEnter2] = useState(false);
  // const textsizeclass = "fsize" + themeclass;
  const duration = 1000;

  const defaultStyle = {
    // position: "absolute",
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  };

  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  return (
    <div className="grid-container">
      <div
        className={"fsize" + themeclass + " grid-item"}
        onClick={() => {
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
      <div className="grid-item">
        <Transition in={isEnter1} timeout={duration}>
          {(state) => (
            <div
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
                position: "absolute",
              }}
              className={"fsize" + themeclass}
            >
              {count}
            </div>
          )}
        </Transition>
        <Transition in={isEnter2} timeout={duration}>
          {(state) => (
            <div
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
              className={"fsize" + themeclass}
            >
              {count}
            </div>
          )}
        </Transition>
      </div>
      <div
        className={"fsize" + themeclass + " grid-item"}
        onClick={() => {
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
