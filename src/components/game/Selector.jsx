import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { setPlacesToShow } from "../../store/gameSlice";
import { useDispatch, useSelector } from "react-redux";

export default function BasicSelect(props) {
  const dispatch = useDispatch();
  const placesToShow = useSelector((state) => state.game.placesToShow);
  const placesData = useSelector((state) => state.form.placesData);

  const numberOfPlacesToShow = placesData.length > 5 ? 5 : placesData.length;

  const itemsInSelect = Array.from(
    { length: numberOfPlacesToShow },
    (_, i) => i + 1
  );
  const handleChange = (event) => {
    dispatch(setPlacesToShow(event.target.value));
  };

  return (
    <Box sx={{ width: "90%" }}>
      <FormControl fullWidth size="small">
        <InputLabel id="demo-simple-select-label" color="secondary">
          How many places you want to pick?
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="How many places you want to pick?"
          onChange={handleChange}
          color="secondary"
          value={placesToShow}
          sx={{ borderRadius: "1rem" }}
        >
          {itemsInSelect.map((n) => (
            <MenuItem
              value={n}
              color="secondary"
              key={n}
              sx={{ borderRadius: "1rem" }}
            >
              {n}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
