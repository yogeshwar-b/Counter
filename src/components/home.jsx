import { useState } from "react";
import "./home.css";
import { CSSTransition } from "react-transition-group";
import { TransitionTimeOut } from "./constants";
import PropTypes from "prop-types";

const Counter = (props) => {
  const [count, ChangeCounter] = useState(0);
  //Determines if the state is entering or exiting.
  const [isEnter, ChangeIsEnter] = useState(true);
  function timeout(delay) {
    return new Promise((res) => setTimeout(res, delay));
  }

  return (
    <div className="grid-container">
      <div
        className={
          props.themedata == "dark" ? "fsize-dark grid-item" : "fsize grid-item"
        }
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
        <div
          className={
            props.themedata == "dark"
              ? "fsize-dark grid-item"
              : "fsize grid-item"
          }
        >
          {count}
        </div>
      </CSSTransition>
      <div
        className={
          props.themedata == "dark" ? "fsize-dark grid-item" : "fsize grid-item"
        }
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

Counter.propTypes = {
  themedata: PropTypes.string,
};
export default Counter;
