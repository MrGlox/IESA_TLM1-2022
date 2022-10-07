import { useParams } from "react-router-dom";

import data from "data.json";
import slugify from "slugify";

export default function Appart() {
  const { slug } = useParams();

  const appart = data.find((appart) => {
    return (
      slug ===
      slugify(appart.title, {
        lower: true,
      })
    );
  });

  if (!appart) return "Error 404";

  return (
    <div>
      <h1>{appart.title}</h1>
      <p>{appart.children}</p>
    </div>
  );
}
