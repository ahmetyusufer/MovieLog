import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setIsOpen } from "../redux/slices/uiSlice";

function useEscapeKey() {
  const dispatch = useDispatch();
  useEffect(() => {
    function EventEscape(event) {
      if (event.key === "Escape") {
        dispatch(setIsOpen(true));
      }
    }

    document.addEventListener("keydown", EventEscape);

    return () => {
      document.removeEventListener("keydown", EventEscape);
    };
  }, [dispatch]);
}

export default useEscapeKey;
