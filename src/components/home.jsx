import { useContext, useState } from "react";
import "./home.css";
import { Transition } from "react-transition-group";
import { TransitionDuration } from "./constants";
import { ThemeContext, TransitionContext } from "../App";
import { TransitionList } from "./constants";

// function timeout(delay) {
//   return new Promise((res) => setTimeout(res, delay));
// }
var isProcessing = false;

const Counter = () => {
  const themeclass = useContext(ThemeContext);
  const { transitionItem, setTransitionName } = useContext(TransitionContext);
  const [count1, ChangeCounter1] = useState(0);
  const [count2, ChangeCounter2] = useState(0);
  //Determines if the state is entering or exiting.
  const [isEnter1, ChangeIsEnter1] = useState(true);
  const [isEnter2, ChangeIsEnter2] = useState(false);
  const currentTransition = TransitionList.find((obj) => {
    return obj.name == transitionItem;
  }).transitiondata;

  return (
    <div className="grid-container">
      <div
        className={"fsize" + themeclass + " grid-item"}
        onClick={async () => {
          if (!isProcessing) {
            isProcessing = true;
            if (isEnter1) {
              ChangeIsEnter1(false);
              ChangeCounter2(count1 - 1);
              ChangeCounter1(count1 - 1);
              ChangeIsEnter2(true);
            } else {
              ChangeIsEnter2(false);
              ChangeCounter1(count2 - 1);
              ChangeCounter2(count2 - 1);
              ChangeIsEnter1(true);
            }
            isProcessing = false;
          }
        }}
      >
        -
      </div>
      <div className="grid-stack">
        <Transition in={isEnter1} timeout={TransitionDuration}>
          {(state) => (
            <div
              style={{
                ...currentTransition[state],
              }}
              className={"grid-stack-item fsize" + themeclass}
            >
              {count1}
            </div>
          )}
        </Transition>
        <Transition in={isEnter2} timeout={TransitionDuration}>
          {(state) => (
            <div
              style={{
                ...currentTransition[state],
              }}
              className={"grid-stack-item fsize" + themeclass}
            >
              {count2}
            </div>
          )}
        </Transition>
      </div>
      <div
        className={"fsize" + themeclass + " grid-item"}
        onClick={async () => {
          if (isEnter1) {
            ChangeIsEnter1(false);
            // await timeout(duration);
            ChangeCounter2(count1 + 1);
            ChangeIsEnter2(true);
          } else {
            ChangeIsEnter2(false);
            // await timeout(duration);
            ChangeCounter1(count2 + 1);
            ChangeIsEnter1(true);
          }
        }}
      >
        +
      </div>
    </div>
  );
};

export default Counter;
