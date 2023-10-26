import { TransitionList } from "./constants";
import "./TransitionSelect.css";
import { useContext } from "react";
import { TransitionContext, ThemeContext } from "../App";
export const TransitionSelect = () => {
  const { transitionItem, setTransitionName } = useContext(TransitionContext);
  return (
    <div>
      <select
        className="flat-select"
        name="TransitionSelect"
        id="TransitionSelect"
        value={transitionItem}
        onChange={(e) => {
          setTransitionName(e.target.value);
        }}
      >
        {TransitionList.map((item) => {
          return (
            <option
              key={item.name}
              className="flat-select-option"
              value={item.name}
            >
              {item.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};
