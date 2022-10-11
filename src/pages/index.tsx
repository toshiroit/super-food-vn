import Banner from "@/components/Banner/Banner";
import BannerGift from "@/components/Banner/BannerGift";
import ProductList from "@/components/Product/ProductList";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ProductItem as ProductItemType } from "@/types/product/product";

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const onLogin = () => {};
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
    <div className={""}>
      <Head>
        <title>
          🔥🔥 Đồ ăn ngon , mức giá hấp dẫn chỉ có tại Super Food VN 🔥🔥
        </title>
        <meta
          name="description"
          content="Mua hàng nhanh chóng tại Super Food VN "
        />
      </Head>
      <div className="bodyIdx">
        <div className="container">
          {/* <Banner /> */}
          <BannerGift />
          <div className="main">
            <div className="main__wp1">
              <div className="main__wp1___title">
                <h4>
                  <picture>
                    <img src={"/images/new-items.png"} alt="" />
                  </picture>
                  Khám phá quản mới
                </h4>
                <div className="alw">
                  <i className="fa-size fa-solid fa-paperclip" />
                </div>
              </div>
              <ProductList />
            </div>
            <div className="main__wp1">
              <div className="main__wp1___title">
                <h4>
                  <picture>
                    <img src={"/images/new-items.png"} alt="" />
                  </picture>
                  Khám phá quản mới
                </h4>
                <div className="alw">
                  <i className="fa-size fa-solid fa-paperclip" />
                </div>
              </div>
              <ProductList />
            </div>
            <div className="main__wp1">
              <div className="main__wp1___title">
                <h4>
                  <picture>
                    <img src={"/images/new-items.png"} alt="" />
                  </picture>
                  Khám phá quản mới
                </h4>
                <div className="alw">
                  <i className="fa-size fa-solid fa-paperclip" />
                </div>
              </div>
              <ProductList />
            </div>
            <div className="main__wp1">
              <div className="main__wp1___title">
                <h4>
                  <picture>
                    <img src={"/images/new-items.png"} alt="" />
                  </picture>
                  Khám phá quản mới
                </h4>
                <div className="alw">
                  <i className="fa-size fa-solid fa-paperclip" />
                </div>
              </div>
              <ProductList />
            </div>
          </div>
          {/* <Trademark /> */}
        </div>
      </div>
    </div>
  );
};
export default Home;
