import { useState } from "react";

const App = () => {
  const [count, ChangeCounter] = useState(0);
  return (
    <center>
      <button onClick={() => ChangeCounter((oldCount) => oldCount + 1)}>
        +
      </button>
      <div>{count}</div>
      <button onClick={() => ChangeCounter((oldCount) => oldCount - 1)}>
        -
      </button>
    </center>
  );
};

export default App;
