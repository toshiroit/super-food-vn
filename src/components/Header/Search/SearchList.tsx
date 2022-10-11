import { searchListProps } from "@/types/search/search";
import React, { Ref, useRef, useState } from "react";

const SearchList = ({ nameSearch, refInputSearch }: searchListProps) => {
  const refSearch = useRef<HTMLDivElement>(null);
  const [dataSearch] = useState<[]>([]);
  return (
    <div ref={refSearch} className="search__list">
      <div className="wp">
        <div className="title">
          <i className="fa-solid fa-signature" />
          Từ khóa tìm kiếm
        </div>
        <ul className="search__list___wp">
          {dataSearch.map((item, index) => {
            return (
              <li key={index} className="search__list___wp____item">
                <div className="text">
                  <i className="fa-solid fa-magnifying-glass fa-size" />
                  <p>{"124124"}</p>
                </div>
                <i className="fa-solid fa-xmark" />
              </li>
            );
          })}
          <div className="search__list___wp____show">
            <p>Xem thêm</p>
            <i className="fa-solid fa-chevron-down fa-size" />
          </div>
        </ul>
      </div>
      <div className="wp">
        <div className="title">
          <i className="fa-solid fa-font" />
          Từ khóa tìm kiếm phổ biến
        </div>
        <ul className="keyword">
          <li className="keyword__item">Sản phẩm hot</li>
          <li className="keyword__item">Sản phẩm hot</li>
          <li className="keyword__item">Sản phẩm đang bán chạy</li>
          <li className="keyword__item">Gà đông tảo</li>
          <li className="keyword__item">Trà sữa</li>
          <li className="keyword__item">Cơm chiên</li>
          <li className="keyword__item">Cơm sinh viên</li>
          <li className="keyword__item">Cơm 0đ</li>
        </ul>
      </div>
    </div>
  );
};
export default SearchList;
