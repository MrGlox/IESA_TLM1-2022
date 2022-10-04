import "./Item.scss";

export default function Item({ title, children, status }) {
  return (
    <li>
      <h2>
        <span
          className={`pellet ${status ? " pellet--green" : " pellet--red"}`}
        ></span>
        {title}
      </h2>
      <p>{children}</p>
    </li>
  );
}
