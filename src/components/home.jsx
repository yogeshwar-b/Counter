import { useState } from "react";
import "./home.css";

const Home = () => {
  const [count, ChangeCounter] = useState(0);

  return (
    <div className="grid-container">
      <div
        className="fsize grid-item"
        onClick={() => ChangeCounter((oldCount) => oldCount - 1)}
      >
        -
      </div>
      <div className="fsize grid-item">{count}</div>
      <div
        className="fsize grid-item"
        onClick={() => ChangeCounter((oldCount) => oldCount + 1)}
      >
        +
      </div>
    </div>
  );
};

export default Home;
