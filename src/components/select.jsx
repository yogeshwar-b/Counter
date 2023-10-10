import * as React from "react";
import PropTypes from "prop-types";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectSmall(props) {
  const [selected, setSelected] = React.useState("");

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120, maxWidth: 400 }} size="medium">
      <InputLabel>{props.label}</InputLabel>
      <Select label={props.label} value={selected} onChange={handleChange}>
        {props.itemlist.map((item) => {
          return (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}

SelectSmall.propTypes = {
  label: PropTypes.string,
  itemlist: PropTypes.array,
};
