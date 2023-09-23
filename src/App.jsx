import Counter from "./components/home";

import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [theme, setTheme] = useState(0);
  useEffect(() => {
    theme ? setTheme("") : setTheme("dark");
  }, []);

  return (
    <div className={"mainplate " + theme}>
      <div>
        Dark Mode
        <input
          type="checkbox"
          checked={theme}
          onChange={() => {
            theme ? setTheme("") : setTheme("dark");
          }}
        />
      </div>
      <Counter />
    </div>
  );
};

export default App;
