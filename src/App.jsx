import Counter from "./components/home";

import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [theme, setTheme] = useState(true);
  useEffect(() => {
    theme ? console.log("Dark Theme") : console.log("Light Theme");
  }, []);

  return (
    <div className="mainplate">
      <div>
        Dark Mode
        <input
          type="checkbox"
          checked={theme}
          onChange={() => {
            setTheme(!theme);
            console.log("Theme Changed");
          }}
        />
      </div>
      <Counter />
    </div>
  );
};

export default App;
