import PropTypes from "prop-types";
import SelectSmall from "./select";
import { TransitionList } from "./constants";
export const TransitionSelect = () => {
  return (
    <div>
      <SelectSmall itemlist={TransitionList} label="Select Transition" />
    </div>
  );
};
TransitionSelect.propTypes = {
  label: PropTypes.string,
};
