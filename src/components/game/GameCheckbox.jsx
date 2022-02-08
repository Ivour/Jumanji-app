import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { useDispatch } from "react-redux";
import { setCheckboxIsChecked } from "../../store/gameSlice";

export default function GameCheckbox() {
  const dispatch = useDispatch();

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            icon={<RadioButtonUncheckedIcon color="secondary" />}
            checkedIcon={<CheckCircleIcon />}
            color="secondary"
            onChange={(e) => {
              dispatch(setCheckboxIsChecked(e.target.checked));
            }}
          />
        }
        label="Pick ONE place from EACH user"
        labelPlacement="start"
      />
    </FormGroup>
  );
}
