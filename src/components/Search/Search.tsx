import { selectProductSliceData, selectProductSliceDataSearch, selectProductSliceLoadingSearch } from "@/redux/features/product/product-selects";
import { searchProductByName } from "@/redux/features/product/product-thunks";
import { selectSearchSliceSearchType } from "@/redux/features/search/search-selects";
import { changeSearch } from "@/redux/features/search/search-slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { FilterSearch } from "@/types/search/search";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LoadingDIO from "../Loading/LoadingDIO";
import ProductList from "../Product/ProductList";

const Search = () => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const searchType = useAppSelector(selectSearchSliceSearchType)
  const dataProduct = useAppSelector(selectProductSliceDataSearch)
  const loadingSearch = useAppSelector(selectProductSliceLoadingSearch)

  const onFilter = (value: FilterSearch) => {
    dispatch(changeSearch({
      searchType: { valueType: value.value, nameType: value.name }
    }))
  }
  useEffect(() => {
    let isCanelledAPI = true
    const page = router.query.page || 1
    if (router.query.q && router.query.page) {
      function searchProduct() {
        if (isCanelledAPI) {
          dispatch(searchProductByName({
            value: searchType, textSearch: router.query.q as string || '', page: String(page)
          }))
        }
      }
      searchProduct()
      return () => {
        isCanelledAPI = false
      }

    }
  }, [router.query.page])
  const paginationEl = (size: number): React.ReactElement[] => {
    let i = 0, result = []
    if (size > 7) {
    }
    else if (size < 7) {
      for (i = 1; i <= size; i++) {
        result.push(
          <Link href={`/search?q=${router.query.q}&page=${i}`}>
            <a>
              <li className={
                `pagination__main___item ${Number(router.query.page || 1) === i ? 'active' : ''}`
              }>{i}</li>
            </a>
          </Link>
        )

      }
    }
    return result;
  }
  return (
    <div className="search">
      <div className="container">
        <div className="search__content breadcrum">
          <div className="search__content___inner">
            <div className="header">
              <ul className="header__list">
                <li
                  onClick={() => onFilter({ name: 'LIST-SHOP', value: '0' })}
                  className={
                    `header__list___item ${searchType && searchType[2] && searchType[2].valueType === '0' ? 'active' : ''}`}
                >
                  Đang mở cửa
                </li>
                <li
                  onClick={() => onFilter({ name: 'LIST-SHOP', value: '1' })}
                  className={
                    `header__list___item ${searchType && searchType[2] && searchType[2].valueType === '1' ? 'active' : ''}`
                  }
                >
                  Đang giảm giá
                </li>
                <li
                  onClick={() => onFilter({ name: 'LIST-SHOP', value: '2' })}
                  className={
                    `header__list___item ${searchType && searchType[2] && searchType[2].valueType === '2' ? 'active' : ''}`
                  }>
                  FreeShip
                </li>
                <li
                  onClick={() => onFilter({ name: 'LIST-SHOP', value: '3' })}
                  className={
                    `header__list___item ${searchType && searchType[2] && searchType[2].valueType === '3' ? 'active' : ''}`
                  }>
                  Đánh giá cao
                </li>
              </ul>
              <div className="header__sort">
                <select
                  onChange={(e) => onFilter({ name: 'SORT', value: e.target.value })}
                  className="header__sort___item">
                  <option value={-1}>Sắp xếp </option>
                  <option value={0}>Tên A-Z </option>
                  <option value={1}>Tên Z-A</option>
                  <option value={2}>Giá thấp nhất </option>
                  <option value={3}>Giá cao nhất </option>
                </select>
                <select
                  onChange={(e) => onFilter({ name: 'TYPE-SHOW', value: e.target.value })}
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
                padding: '0 10px 10px 10px'
              }}
            >
              <span style={{ fontWeight: 500, fontSize: '0.9rem' }}>

                Sản phẩm tìm thấy : {dataProduct && dataProduct.totalItems} </span>
            </div>
            <>
              <div className="bd">
                {
                  loadingSearch ? <div style={{ textAlign: 'center' }}>
                    <LoadingDIO />
                  </div> :
                    !dataProduct ?
                      <h1>KHONG CO SAN PHAM</h1> :
                      <ProductList item={{ typeShow: 'ANY' }} dataProductAll={dataProduct && dataProduct.data} />

                }
              </div>
              <div className="pagination">
                <ul className="pagination__main">

                  {
                    dataProduct && dataProduct.totalPages > 7 ?
                      <li className="pagination__main___item arrow">
                        <i className="fa-solid fa-angle-left fa-size" />
                      </li> : ''
                  }
                  {paginationEl(dataProduct && dataProduct.totalPages)}
                  {
                    dataProduct && dataProduct.totalPages > 7 ?
                      <li className="pagination__main___item arrow">
                        <i className="fa-solid fa-angle-right fa-size" />
                      </li> : ''
                  }
                </ul>
              </div>
            </>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Search;
