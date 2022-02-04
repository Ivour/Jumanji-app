import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

export default function GameCheckbox(props) {
  const checkHandler = (event) => {
    props.onGetCheckState(event.target.checked);
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            defaultChecked
            icon={<RadioButtonUncheckedIcon color="secondary" />}
            checkedIcon={<CheckCircleIcon />}
            color="secondary"
            onChange={checkHandler}
          />
        }
        label="Pick ONE place from EACH user"
        labelPlacement="start"
      />
    </FormGroup>
  );
}
