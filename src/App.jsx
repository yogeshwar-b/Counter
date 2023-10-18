import Counter from "./components/home";
import { TransitionSelect } from "./components/TransitionSelect";
import { createContext, useState } from "react";
import "./App.css";
import MaterialUISwitch from "./components/switch";
import { TransitionList } from "./components/constants";
export const ThemeContext = createContext();
export const TransitionContext = createContext();

const App = () => {
  const [transitionItem, setTransitionName] = useState(TransitionList[0].name);
  const [themeclass, setThemeClass] = useState("-dark");
  return (
    <TransitionContext.Provider value={{ transitionItem, setTransitionName }}>
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
    </TransitionContext.Provider>
  );
};

export default App;
