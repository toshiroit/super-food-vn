import { useState } from "react";
import ProductList from "../Product/ProductList";
import ProductDetailComment from "./ProductDetailComment";
import ProductDetailContent from "./ProductDetailContent";
import ProductDetailShow from "./ProductDetailShow";
import { ProductItem as ProductItemType } from "@/types/product/product";
import ProductItem from "../Product/ProductItem";
const ProductDetail = () => {
  const [dataProductDetail] = useState(null);
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
  return (
    <>
      {/* <NotificationRoot data={dataNotification} /> */}
      <div className="detail">
        <div className="container">
          <div className="detail__content breadcrumb">
            <div className="detail__content___breadcrumb breadcrumb__content">
              {/* <BreadCrumb data={dataBreadcrumb} /> */}
            </div>
            <div
              className={`detail__content___product ${
                dataProductDetail ? "" : "productDetailLoading"
              }`}
            >
              <ProductDetailShow />
            </div>
            <div className="detail__content___wop">
              <ProductDetailContent />
            </div>
            <div className="detail__content___comment">
              <ProductDetailComment />
            </div>
          </div>
        </div>
      </div>
      <div className="productAbout">
        <div className="container">
          <div className="productAbout__opw">
            <div className="title">
              <h4>Thức ăn đi kèm</h4>
            </div>
          </div>
          <div className="productAbout__product">
            <div className="productAbout__product___overScroll">
              {products.map((item, index) => {
                return <ProductItem productItemProps={item} key={index} />;
              })}
            </div>
          </div>
        </div>
        <div className="productAbout">
          <div className="container">
            <div className="productAbout__opw">
              <div className="title">
                <h4>Có thể bạn yêu thích</h4>
              </div>
            </div>
            <div className="productAbout__product">
              <div className="productAbout__product___overScroll">
                {products.map((item, index) => {
                  return <ProductItem productItemProps={item} key={index} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductDetail;
