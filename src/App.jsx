import Counter from "./components/home";

import { useState } from "react";
import "./App.css";
import MaterialUISwitch from "./components/switch";
const App = () => {
  const [theme, setTheme] = useState("dark");

  return (
    <div className={"mainplate " + theme}>
      <div className="darkmodeswitch">
        <MaterialUISwitch
          onChange={() => {
            theme ? setTheme("") : setTheme("dark");
          }}
          defaultChecked
        />
      </div>
      <Counter />
    </div>
  );
};

export default App;
