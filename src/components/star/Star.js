import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { setStarClickedNumber } from "../../redux/slices/uiSlice";

import StarItem from "./StarItem";

function Star({ piece = 10 }) {
  const dispatch = useDispatch();
  const { starClickedNumber } = useSelector((state) => state.uiSlice);

  const [hoverNumber, setHoverNumber] = useState(0);

  return (
    <div className="star">
      {Array.from({ length: piece }, (_, index) => (
        <StarItem
          key={index}
          onClick={() => {
            dispatch(setStarClickedNumber(index + 1));
          }}
          fill={hoverNumber > index ? "yellow" : "none"}
          onMouseEnter={() => setHoverNumber(index + 1)}
          onMouseLeave={() => setHoverNumber(starClickedNumber)}
        />
      ))}
      <span className="starNumber">{hoverNumber || " "}</span>
    </div>
  );
}

export default Star;
