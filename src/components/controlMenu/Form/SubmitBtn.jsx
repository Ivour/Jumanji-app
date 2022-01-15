import React from "react";
import LoadingButton from "@mui/lab/LoadingButton";

import SendIcon from "@mui/icons-material/Send";

export default function SubmitBtn(props) {
  const [loading, setLoading] = React.useState(false);
  function handleClick() {
    setLoading(true);
  }

  return (
    <LoadingButton
      onClick={handleClick}
      endIcon={<SendIcon />}
      loading={loading}
      loadingPosition="end"
      variant="contained"
      size="small"
      color="secondary"
      sx={{ margin: "0.5em" }}
      disabled={!props.formIsValid}
    >
      Send
    </LoadingButton>
  );
}
