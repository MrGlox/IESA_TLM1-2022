import { useState } from "react";

export default function Form() {
  const [value, setValue] = useState("");
  const handleChange = (ev) => setValue(ev.target.value);

  return (
    <>
      <input type="text" onChange={handleChange} />
      <p>{value}</p>
    </>
  );
}
