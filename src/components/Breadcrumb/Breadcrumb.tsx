import Link from "next/link";
import { useState } from "react";

const Breadcrumb = () => {
  const [data] = useState([
    {
      name: "124",
      link: "",
    },
  ]);
  return (
    <ul className="main">
      {data &&
        data.map((item, index) => {
          return (
            <Link key={index} href={item.link}>
              <a className="main__item">
                <li className="main__item">
                  {item.name === "index" ? "Trang chủ " : item.name}
                </li>
              </a>
            </Link>
          );
        })}
    </ul>
  );
};
export default Breadcrumb;
