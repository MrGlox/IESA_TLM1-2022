import { useState } from "react";

import List from "components/List";
import data from "data.json";

export default function Form() {
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
    <>
      <div>
        {/* input for filter */}
        <input type="text" onChange={handleChange} />
        <p>{value}</p>
      </div>
      {/* display list */}
      <List apparts={filteredApparts}></List>
    </>
  );
}
