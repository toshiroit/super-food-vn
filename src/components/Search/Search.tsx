import { clientRoutes } from "@/constants/router/client/client";
import { timeSince } from "@/lib/formatDate";
import { slug } from "@/lib/slug";
import {
  selectProductSliceData,
  selectProductSliceDataSearch,
  selectProductSliceLoadingSearch,
} from "@/redux/features/product/product-selects";
import { searchProductByName } from "@/redux/features/product/product-thunks";
import {
  selectSearchSliceDataSearchShop,
  selectSearchSliceSearchType,
  selectSearchSliceTextSearch,
} from "@/redux/features/search/search-selects";
import {
  changeSearch,
  changeSearchType,
} from "@/redux/features/search/search-slice";
import { getShopByNameOrCode } from "@/redux/features/search/search-thunks";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { FilterSearch } from "@/types/search/search";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LoadingDIO from "../Loading/LoadingDIO";
import LoadingSpinner from "../Loading/LoadingSpinner";
import ProductList from "../Product/ProductList";

const Search = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [typeSearch, setTypeSearch] = useState<"PRODUCT" | "SHOP" | null>(null);
  const searchType = useAppSelector(selectSearchSliceSearchType);
  const dataSearchShop = useAppSelector(selectSearchSliceDataSearchShop);
  const dataTextSearch = useAppSelector(selectSearchSliceTextSearch);
  const dataProduct = useAppSelector(selectProductSliceDataSearch);
  const loadingSearch = useAppSelector(selectProductSliceLoadingSearch);

  const onChangeFilter = (value: FilterSearch) => {
    dispatch(
      changeSearchType({
        searchType: value.name,
        textSearch: value.value,
      })
    );
  };
  useEffect(() => {
    const query = router.query;
    if (query) {
      const query_search = (router.query.q as string) || "";
      if (query.type === "shop") {
        dispatch(
          getShopByNameOrCode({
            name_shop: query_search,
            code_shop: query_search,
          })
        );
        setTypeSearch("SHOP");
      } else {
        setTypeSearch("PRODUCT");
      }
    }
    //eslint-disable-next-line
  }, [router.query]);
  useEffect(() => {
    let isStopAPI = true;
    const page = router.query.page || 1;
    let textSearch = dataTextSearch;
    if (dataTextSearch.length === 0) {
      textSearch = localStorage.getItem("text_search") || "";
    }
    function searchProduct() {
      if (isStopAPI) {
        dispatch(
          searchProductByName({
            textSearch: textSearch,
            page: String(page),
            type_filter: searchType,
          })
        );
      }
    }
    searchProduct();
    return () => {
      isStopAPI = false;
    };
  }, [router.query, dispatch, searchType, dataTextSearch]);
  const paginationEl = (size: number): React.ReactElement[] => {
    let i = 0,
      result = [],
      j = 0,
      pageLimit = 7;
    for (i = 1; i <= size; i++) {
      result.push(
        <Link href={`/search?q=${router.query.q}&page=${i}`}>
          <a>
            <li
              className={`pagination__main___item ${
                Number(router.query.page || 1) === i ? "active" : ""
              }`}
            >
              {i}
            </li>
          </a>
        </Link>
      );
    }
    return result;
  };
  const onChangePage = (change: "pre" | "next") => {
    if (router.query.page) {
      if (change === "pre") {
        router.query.page = "1";
      }
    }
  };
  return (
    <div className="search">
      <div className="container">
        <div className="search__content breadcrum">
          {typeSearch === "PRODUCT" ? (
            <div className="search__content___inner">
              <div className="header">
                <ul className="header__list">
                  <li
                    onClick={() =>
                      onChangeFilter({ name: "OPEN-SHOP", value: 1 })
                    }
                    className={`header__list___item ${
                      searchType &&
                      searchType[2] &&
                      searchType[2].value.value_name_type === 1
                        ? "active"
                        : ""
                    }`}
                  >
                    Đang mở cửa
                  </li>
                  <li
                    onClick={() =>
                      onChangeFilter({ name: "DISCOUNT", value: 1 })
                    }
                    className={`header__list___item ${
                      searchType &&
                      searchType[2] &&
                      searchType[2].value.value_name_type === 2
                        ? "active"
                        : ""
                    }`}
                  >
                    Đang giảm giá
                  </li>
                  <li
                    onClick={() =>
                      onChangeFilter({ name: "FREE-SHIP", value: 1 })
                    }
                    className={`header__list___item ${
                      searchType &&
                      searchType[2] &&
                      searchType[2].value.value_name_type === 3
                        ? "active"
                        : ""
                    }`}
                  >
                    FreeShip
                  </li>
                  <li
                    onClick={() =>
                      onChangeFilter({ name: "EVALUATE-TOP", value: 1 })
                    }
                    className={`header__list___item ${
                      searchType &&
                      searchType[2] &&
                      searchType[2].value.value_name_type === 4
                        ? "active"
                        : ""
                    }`}
                  >
                    Đánh giá cao
                  </li>
                </ul>
                <div className="header__sort">
                  <select
                    onChange={(e) =>
                      onChangeFilter({
                        name: "SORT",
                        value: Number(e.target.value),
                      })
                    }
                    className="header__sort___item"
                  >
                    <option value={-1}>Sắp xếp </option>
                    <option value={0}>Tên A-Z </option>
                    <option value={1}>Tên Z-A</option>
                    <option value={2}>Giá thấp nhất </option>
                    <option value={3}>Giá cao nhất </option>
                  </select>
                  <select
                    onChange={(e) =>
                      onChangeFilter({
                        name: "TYPE-SHOW",
                        value: Number(e.target.value),
                      })
                    }
                    className="header__sort___item"
                  >
                    <option value={-1}>Loại hiện thị </option>
                    <option value={0}>Đang HOT</option>
                    <option value={1}>Mua nhiều nhất </option>
                    <option value={2}>Đặt nhiều </option>
                  </select>
                </div>
              </div>
              <div
                className="result"
                style={{
                  padding: "0 10px 10px 10px",
                }}
              >
                <span style={{ fontWeight: 500, fontSize: "0.9rem" }}>
                  Sản phẩm tìm thấy : {dataProduct && dataProduct.totalItems}{" "}
                </span>
              </div>
              <>
                <div className="bd">
                  {loadingSearch ? (
                    <div style={{ textAlign: "center" }}>
                      <LoadingDIO />
                    </div>
                  ) : !dataProduct ? (
                    <h1>KHONG CO SAN PHAM</h1>
                  ) : (
                    <ProductList
                      item={{ typeShow: "ANY" }}
                      dataProductAll={dataProduct && dataProduct.data}
                    />
                  )}
                </div>
                <div className="pagination">
                  <ul className="pagination__main">
                    {dataProduct && dataProduct.totalPages > 7 ? (
                      <li
                        onClick={() => onChangePage("pre")}
                        className="pagination__main___item arrow"
                      >
                        <i className="fa-solid fa-angle-left fa-size" />
                      </li>
                    ) : (
                      ""
                    )}
                    {paginationEl(dataProduct && dataProduct.totalPages)}
                    {dataProduct && dataProduct.totalPages > 7 ? (
                      <li className="pagination__main___item arrow">
                        <i className="fa-solid fa-angle-right fa-size" />
                      </li>
                    ) : (
                      ""
                    )}
                  </ul>
                </div>
              </>
            </div>
          ) : dataSearchShop.loading ? (
            <div className="LoadingSearch" style={{ padding: "100px" }}>
              <LoadingSpinner css={{ textAlign: "center" }} />
            </div>
          ) : dataSearchShop.data && dataSearchShop.data ? (
            <div className="search__content___inner">
              <div className="bd">
                <ul className="listShop">
                  {dataSearchShop.data.data &&
                    dataSearchShop.data.data.map((item: any) => {
                      return (
                        <li key={item.code_shop} className="listShop__item">
                          <div className="logo">
                            <picture>
                              <img
                                src={
                                  item.image && item.image.length > 0
                                    ? item.image.length
                                    : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png"
                                }
                                alt=""
                              />
                            </picture>
                            <div className="name">
                              <h4>{item.name_shop} </h4>
                              <div className="nick_name">
                                <i className="fa-solid fa-hashtag"></i>laubo94
                              </div>
                              <div className="follow">
                                <b>{item.follow_shop}</b> Theo dõi
                              </div>
                            </div>
                          </div>
                          <ul className="listValue">
                            <li className="listValue__item">
                              <h5>
                                <i className="fa-solid fa-box-open"></i>{" "}
                                {item.quatity_product}
                              </h5>
                              <span>Sản phẩm</span>
                            </li>
                            <li className="listValue__item">
                              <h5>
                                <i className="fa-regular fa-star"></i>{" "}
                                {item.evaluate}
                              </h5>
                              <span>Đánh giá</span>
                            </li>
                            <li className="listValue__item">
                              <h5>
                                <i className="fa-regular fa-calendar"></i>{" "}
                                {timeSince(item.createdAt)}
                              </h5>
                              <span>Hoạt động</span>
                            </li>
                            <li className="listValue__item">
                              <h5>
                                <i className="fa-solid fa-box-open"></i> 101
                              </h5>
                              <span>101 Sản phẩm</span>
                            </li>
                          </ul>
                          <div className="select">
                            <div className="select__btn">
                              <Link
                                href={clientRoutes.SHOP_INDEX(
                                  `${
                                    item.code_shop && item.code_shop.trim()
                                  }.${slug(
                                    item.name_shop ? item.name_shop.trim() : ""
                                  )}`
                                )}
                              >
                                <a>
                                  <button>
                                    {" "}
                                    <i className="fa-regular fa-eye"></i>
                                    Xem Shop
                                  </button>
                                </a>
                              </Link>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
          ) : (
            "ERROR"
          )}
        </div>
      </div>
    </div>
  );
};
export default Search;
