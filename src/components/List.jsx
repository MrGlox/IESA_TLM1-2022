import Item from "./Item";

export default function List({ apparts = [] }) {
  if (apparts.length === 0) {
    return "Apparts not found";
  }

  return (
    <ul>
      {apparts.map((appart, index) => {
        return (
          <Item
            key={"item" + index}
            title={appart.title}
            status={appart.status}
          >
            {appart.children}
          </Item>
        );
      })}
    </ul>
  );
}
