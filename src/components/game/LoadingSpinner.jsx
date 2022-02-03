import CircularProgress from "@mui/material/CircularProgress";

export default function LoadingSpinner({ appIsLoading }) {
  return (
    <CircularProgress
      color="secondary"
      sx={
        appIsLoading ? { position: "absolute", right: "50%", top: "50%" } : {}
      }
    />
  );
}
