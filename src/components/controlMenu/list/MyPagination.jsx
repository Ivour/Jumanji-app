import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import { changeSelectedPagination } from "../../../store/listSlice";

const MyPagination = () => {
  const placesCount = useSelector((state) => state.form.placesData.length);
  const dispatch = useDispatch();
  return (
    <Stack spacing={2}>
      <Pagination
        count={Math.ceil(placesCount / 5)}
        variant="outlined"
        shape="rounded"
        onChange={(e, page) => dispatch(changeSelectedPagination(page))}
      />
    </Stack>
  );
};

export default MyPagination;
