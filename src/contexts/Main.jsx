import { createContext, useState, useContext } from "react";

import data from "data.json";

const MainContext = createContext();
export default MainContext;

export function MainProvider({ children }) {
  // state to handle value from input
  const [value, setValue] = useState("");

  // state to handle filtered apparts
  const [filteredApparts, setFilteredApparts] = useState(data);

  // function triggered at input value change
  const handleChange = (ev) => {
    // sync state value with input
    setValue(ev.target.value);

    // sync filtered apparts with input value
    setFilteredApparts(
      data.filter(
        (
          appart // one appart by one
        ) =>
          // filter condition
          appart.title.toLowerCase().includes(ev.target.value.toLowerCase())
      )
    );
  };

  return (
    <MainContext.Provider value={{ value, filteredApparts, handleChange }}>
      {children}
    </MainContext.Provider>
  );
}

export const useFilter = () => useContext(MainContext);
