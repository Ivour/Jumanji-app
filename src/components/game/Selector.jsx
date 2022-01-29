import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const arr = Array.from({ length: 10 }, (_, i) => i + 1);

export default function BasicSelect(props) {
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
    props.onGetValue(event.target.value);
  };

  return (
    <Box sx={{ width: "50%" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" color="secondary">
          How many places you want to pick?
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="How many places you want to pick?"
          onChange={handleChange}
          color="secondary"
          value={value}
          disabled={props.isChecked}
        >
          {arr.map((n) => (
            <MenuItem value={n} color="secondary" key={n}>
              {n}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
