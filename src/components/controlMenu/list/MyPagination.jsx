import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import { changeSelectedPagination } from "../../../store/listSlice";
import { ITEMS_PER_PAGE } from "../../../helpers/constants";

const MyPagination = () => {
  const placesCount = useSelector((state) => state.form.placesData.length);
  const dispatch = useDispatch();
  return (
    <Stack sx={{ marginTop: "1em" }}>
      <Pagination
        count={Math.ceil(placesCount / ITEMS_PER_PAGE)}
        variant="outlined"
        color="success"
        onChange={(e, page) => dispatch(changeSelectedPagination(page))}
      />
    </Stack>
  );
};

export default MyPagination;
