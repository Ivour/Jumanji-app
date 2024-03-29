import { useCallback } from "react";
import { useDispatch } from "react-redux";

const useHttp = () => {
  const dispatch = useDispatch();
  const sendRequest = useCallback(
    async (requestConfig, applyDataFn) => {
      try {
        const response = await fetch(requestConfig.url, {
          method: requestConfig.method || "GET",
          body: JSON.stringify(requestConfig.body) || null,
          headers: requestConfig.headers || {},
        });

        if (!response.ok) throw new Error("something went wrong");

        const data = await response.json();

        dispatch(applyDataFn(data));
      } catch (err) {
        console.error(err.message);
      }
    },
    [dispatch]
  );

  return sendRequest;
};

export default useHttp;
