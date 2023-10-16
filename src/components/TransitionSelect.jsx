import PropTypes from "prop-types";
import { TransitionList } from "./constants";
import "./TransitionSelect.css";
import { useContext } from "react";
import { TransitionContext } from "../App";
export const TransitionSelect = () => {
  const { TransitionName, setTransitionName } = useContext(TransitionContext);
  return (
    <div>
      <select
        className="flat-select"
        name="TransitionSelect"
        id="TransitionSelect"
        onChange={(e) => {
          setTransitionName(e.target.value);
        }}
      >
        {TransitionList.map((item) => {
          return (
            <option className="flat-select-option" value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};
TransitionSelect.propTypes = {
  label: PropTypes.string,
};
