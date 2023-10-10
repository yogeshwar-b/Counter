import Counter from "./components/home";
import { TransitionSelect } from "./components/TransitionSelect";
import { useState } from "react";
import "./App.css";
import MaterialUISwitch from "./components/switch";
const App = () => {
  const [themeclass, setThemeClass] = useState("dark");

  return (
    <div className={"mainplate " + themeclass}>
      <div className="div-center">
        <MaterialUISwitch
          onChange={() => {
            themeclass ? setThemeClass("") : setThemeClass("dark");
          }}
          defaultChecked
        />
      </div>
      <div className="div-center">
        <TransitionSelect themedata={themeclass} />
      </div>
      <Counter themedata={themeclass} />
    </div>
  );
};

export default App;
