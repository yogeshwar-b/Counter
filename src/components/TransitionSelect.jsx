import PropTypes from "prop-types";
import { TransitionList } from "./constants";
import "./TransitionSelect.css";
export const TransitionSelect = () => {
  return (
    <div>
      <select
        className="flat-select"
        name="TransitionSelect"
        id="TransitionSelect"
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
