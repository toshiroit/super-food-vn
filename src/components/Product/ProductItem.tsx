import { clientRoutes } from "@/constants/router/client/client";
import { formatPriceVND } from "@/lib/formatPrice";
import { slug } from "@/lib/slug";
import { ProductItemProps } from "@/types/product/product";
import { NextPage } from "next";
import Link from "next/link";
import React from "react";
const ProductItem = ({ productItemProps }: ProductItemProps) => {
  const priceSale = (sale: number, price: number) => {
    return 100;
  };

  return (
    <li className="product__wp___item">
      <Link
        href={clientRoutes.PRODUCT_DETAIL(
          slug(productItemProps.name),
          productItemProps.code_product
        )}
      >
        <a>
          <div className="point">
            <span>{productItemProps.evaluate}</span>
          </div>
          <div className="image">
            <picture>
              <img src={productItemProps.image} alt="" />
            </picture>
          </div>
          <div className="name">
            <p>{productItemProps.name}</p>
          </div>
          <div className="price">
            <span className="t1 text">
              {formatPriceVND(productItemProps.price)}
            </span>
            <span className="t2 text">
              {formatPriceVND(
                priceSale(productItemProps.discount, productItemProps.price)
              )}
            </span>
          </div>
          <div className="sellable">
            <div className="col-1">
              <span>
                Đã bán : <b>{productItemProps.purchase}</b>
              </span>
            </div>
            <div className="col-1">
              {/* <box-icon name='map'></box-icon> */}
              <b>3.km</b>
            </div>
          </div>
          <div className="address"></div>
        </a>
      </Link>
      <div className="btn">
        <button type="button">
          <i className="fa-solid fa-basket-shopping fa-size" />
          <span>Chọn mua</span>
        </button>
      </div>
    </li>
  );
};
export default ProductItem;
