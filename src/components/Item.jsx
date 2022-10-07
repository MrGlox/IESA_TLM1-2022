import "./Item.scss";
import { Link } from "react-router-dom";
import slugify from "slugify";

export default function Item({ title, children, status }) {
  return (
    <li>
      <h2>
        <Link
          to={slugify(title, {
            lower: true,
          })}
        >
          <span
            className={`pellet ${status ? " pellet--green" : " pellet--red"}`}
          ></span>
          {title}
        </Link>
      </h2>
      <p>{children}</p>
    </li>
  );
}
