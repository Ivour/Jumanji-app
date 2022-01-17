import React from "react";
import { useSelector } from "react-redux";
import LoadingButton from "@mui/lab/LoadingButton";

import SendIcon from "@mui/icons-material/Send";

export default function SubmitBtn(props) {
  //const [loading, setLoading] = React.useState(false);
  const isLoading = useSelector((state) => state.form.spinnerIsLoading);
  /*  function handleClick() {
    setLoading(true);
  } */

  return (
    <LoadingButton
      onClick={props.a}
      endIcon={<SendIcon />}
      loading={isLoading}
      loadingPosition="end"
      variant="contained"
      size="small"
      type="submit"
      color="secondary"
      sx={{ margin: "0.5em" }}
      disabled={!props.formIsValid}
    >
      Add marker
    </LoadingButton>
  );
}
