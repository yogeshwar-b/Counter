import Counter from "./components/home";
import { TransitionSelect } from "./components/TransitionSelect";
import { createContext, useState } from "react";
import "./App.css";
import MaterialUISwitch from "./components/switch";
export const ThemeContext = createContext(null);

const App = () => {
  const [themeclass, setThemeClass] = useState("-dark");
  return (
    <ThemeContext.Provider value={themeclass}>
      <div className={"mainplate " + "mainplate" + themeclass}>
        <div className="div-center">
          <MaterialUISwitch
            onChange={() => {
              themeclass ? setThemeClass("") : setThemeClass("-dark");
            }}
            defaultChecked
          />
        </div>
        <div className="div-center">
          <TransitionSelect />
        </div>
        <Counter />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
