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
  // console.log(transitionItem);
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
              isEnter1 ? ChangeIsEnter1(false) : ChangeIsEnter1(true);
              // await timeout(duration);
              ChangeCounter2(count1 - 1);
              isEnter2 ? ChangeIsEnter2(false) : ChangeIsEnter2(true);
            } else {
              isEnter2 ? ChangeIsEnter2(false) : ChangeIsEnter2(true);
              // await timeout(duration);
              ChangeCounter1(count2 - 1);
              isEnter1 ? ChangeIsEnter1(false) : ChangeIsEnter1(true);
            }
            isProcessing = false;
          }
        }}
      >
        -
      </div>
      <div className="grid-item flex-center">
        <Transition in={isEnter1} timeout={TransitionDuration}>
          {(state) => (
            <div
              style={{
                ...currentTransition[state],
                position: "absolute",
              }}
              className={"fsize" + themeclass}
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
                position: "absolute",
              }}
              className={"fsize" + themeclass}
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
            isEnter1 ? ChangeIsEnter1(false) : ChangeIsEnter1(true);
            // await timeout(duration);
            ChangeCounter2(count1 + 1);
            isEnter2 ? ChangeIsEnter2(false) : ChangeIsEnter2(true);
          } else {
            isEnter2 ? ChangeIsEnter2(false) : ChangeIsEnter2(true);
            // await timeout(duration);
            ChangeCounter1(count2 + 1);
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
