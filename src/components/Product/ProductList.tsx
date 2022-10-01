import {
  ProductItem as ProductItemType,
  ProductListProps,
} from "@/types/product/product";
import { NextPage } from "next";
import { useState } from "react";
import ProductItem from "./ProductItem";

const ProductList: NextPage<ProductListProps> = ({ productList }) => {
  const [products] = useState<ProductItemType[]>([
    {
      codeProduct: "#124865",
      name: "124",
      image:
        "https://img.freepik.com/premium-photo/rice-with-young-green-peas-shrimps-arugula-black-bowl-healthy-food-buddha-bowl_2829-2420.jpg?w=2000",
      link: "124",
      payQuality: "13",
      point: 124,
      price: 24,
      sale: 41,
    },
    {
      codeProduct: "#124865",
      name: "124",
      image:
        "https://img.freepik.com/premium-photo/rice-with-young-green-peas-shrimps-arugula-black-bowl-healthy-food-buddha-bowl_2829-2420.jpg?w=2000",
      link: "124",
      payQuality: "13",
      point: 124,
      price: 24,
      sale: 41,
    },
    {
      codeProduct: "#124865",
      name: "124",
      image:
        "https://img.freepik.com/premium-photo/rice-with-young-green-peas-shrimps-arugula-black-bowl-healthy-food-buddha-bowl_2829-2420.jpg?w=2000",
      link: "124",
      payQuality: "13",
      point: 124,
      price: 24,
      sale: 41,
    },
    {
      codeProduct: "#124865",
      name: "124",
      image:
        "https://img.freepik.com/premium-photo/rice-with-young-green-peas-shrimps-arugula-black-bowl-healthy-food-buddha-bowl_2829-2420.jpg?w=2000",
      link: "124",
      payQuality: "13",
      point: 124,
      price: 24,
      sale: 41,
    },
    {
      codeProduct: "#124865",
      name: "124",
      image:
        "https://img.freepik.com/premium-photo/rice-with-young-green-peas-shrimps-arugula-black-bowl-healthy-food-buddha-bowl_2829-2420.jpg?w=2000",
      link: "124",
      payQuality: "13",
      point: 124,
      price: 24,
      sale: 41,
    },
    {
      codeProduct: "#124865",
      name: "124",
      image:
        "https://img.freepik.com/premium-photo/rice-with-young-green-peas-shrimps-arugula-black-bowl-healthy-food-buddha-bowl_2829-2420.jpg?w=2000",
      link: "124",
      payQuality: "13",
      point: 124,
      price: 24,
      sale: 41,
    },
    {
      codeProduct: "#124865",
      name: "124",
      image:
        "https://img.freepik.com/premium-photo/rice-with-young-green-peas-shrimps-arugula-black-bowl-healthy-food-buddha-bowl_2829-2420.jpg?w=2000",
      link: "124",
      payQuality: "13",
      point: 124,
      price: 24,
      sale: 41,
    },
    {
      codeProduct: "#124865",
      name: "124",
      image:
        "https://img.freepik.com/premium-photo/rice-with-young-green-peas-shrimps-arugula-black-bowl-healthy-food-buddha-bowl_2829-2420.jpg?w=2000",
      link: "124",
      payQuality: "13",
      point: 124,
      price: 24,
      sale: 41,
    },
    {
      codeProduct: "#124865",
      name: "124",
      image:
        "https://img.freepik.com/premium-photo/rice-with-young-green-peas-shrimps-arugula-black-bowl-healthy-food-buddha-bowl_2829-2420.jpg?w=2000",
      link: "124",
      payQuality: "13",
      point: 124,
      price: 24,
      sale: 41,
    },
    {
      codeProduct: "#124865",
      name: "124",
      image:
        "https://img.freepik.com/premium-photo/rice-with-young-green-peas-shrimps-arugula-black-bowl-healthy-food-buddha-bowl_2829-2420.jpg?w=2000",
      link: "124",
      payQuality: "13",
      point: 124,
      price: 24,
      sale: 41,
    },
    {
      codeProduct: "#124865",
      name: "124",
      image:
        "https://img.freepik.com/premium-photo/rice-with-young-green-peas-shrimps-arugula-black-bowl-healthy-food-buddha-bowl_2829-2420.jpg?w=2000",
      link: "124",
      payQuality: "13",
      point: 124,
      price: 24,
      sale: 41,
    },
    {
      codeProduct: "#124865",
      name: "124",
      image:
        "https://img.freepik.com/premium-photo/rice-with-young-green-peas-shrimps-arugula-black-bowl-healthy-food-buddha-bowl_2829-2420.jpg?w=2000",
      link: "124",
      payQuality: "13",
      point: 124,
      price: 24,
      sale: 41,
    },
    {
      codeProduct: "#124865",
      name: "124",
      image:
        "https://img.freepik.com/premium-photo/rice-with-young-green-peas-shrimps-arugula-black-bowl-healthy-food-buddha-bowl_2829-2420.jpg?w=2000",
      link: "124",
      payQuality: "13",
      point: 124,
      price: 24,
      sale: 41,
    },
  ]);
  const [isShowAll] = useState(false);
  return (
    <>
      <div className="product">
        <div className="product__wp">
          {products &&
            products.map((item, index) => {
              return <ProductItem productItemProps={item} key={index} />;
            })}
        </div>
        {isShowAll ? (
          <div className="showAll">
            <span>
              XEM TẤT CẢ <i className="fa-solid fa-chevron-right"></i>
            </span>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
export default ProductList;
