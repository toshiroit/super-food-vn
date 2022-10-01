import { ProductContentData } from "@/types/product/product";
import { useState } from "react";

const ProductDetailContent = () => {
  const [isActiveShow, setIsActiveShow] = useState<number>(1);
  const dataFk = [
    {
      title: "Mô tả",
      content: `The Modern Data Stack rabbit — Directus is an instant REST+GraphQL API and intuitive no-code data collaboration app for any SQL database.,
    The Modern Data Stack rabbit — Directus is an instant REST+GraphQL API and intuitive no-code data collaboration app for any SQL database.
The Modern Data Stack rabbit — Directus is an instant REST+GraphQL API and intuitive no-code data collaboration app for any SQL database.
The Modern Data Stack rabbit — Directus is an instant REST+GraphQL API and intuitive no-code data collaboration app for any SQL database.
      `,
      isActive: 1,
    },
    {
      title: "Hướng dẫn sử dung",
      content:
        "Simply follow the setup prompts and the CLI will create your new project director",
      isActive: 2,
    },
    {
      title: "Trả hàng",
      content: "onfiguration file, and initial database.",
      isActive: 3,
    },
    {
      title: "Lưu ý ",
      content: ", and to ensure you have the latest security patches,",
      isActive: 4,
    },
  ];
  const selectText = (value: ProductContentData[]) => {
    let result = dataFk.map((item, index) => {
      return (
        <li
          key={index}
          onClick={() => setIsActiveShow(item.isActive)}
          className="table__select___item"
        >
          {item.title}
        </li>
      );
    });
    return result;
  };
  const contentText = (value: ProductContentData[]) => {
    let result = value.map((item, index) => {
      if (item.isActive === isActiveShow) {
        return <p key={index}>{item.content}</p>;
      }
    });
    return result;
  };
  return (
    <>
      <div className="title">
        <h4>
          <i className="fa-solid fa-book" /> Thông tin và hướng dẫn sử dụng
        </h4>
      </div>
      <div className="table">
        <ul className="table__select">{selectText(dataFk)}</ul>
        <div className="table__content">{contentText(dataFk)}</div>
      </div>
    </>
  );
};
export default ProductDetailContent;
