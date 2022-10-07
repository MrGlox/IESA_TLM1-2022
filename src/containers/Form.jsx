import List from "components/List";
import { useFilter } from "contexts/Main";

export default function Form() {
  const { handleChange, value, filteredApparts } = useFilter();

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
