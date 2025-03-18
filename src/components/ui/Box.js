import { useState } from "react";

function Box({ children }) {
  const [isBoxOpen, setIsBoxOpen] = useState(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsBoxOpen((open) => !open)}
      >
        {isBoxOpen ? "–" : "+"}
      </button>
      {isBoxOpen && children}
    </div>
  );
}

export default Box;
