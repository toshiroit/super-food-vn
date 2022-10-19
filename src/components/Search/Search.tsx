import { selectSearchSliceSearchType } from "@/redux/features/search/search-selects";
import { changeSearch } from "@/redux/features/search/search-slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { FilterSearch } from "@/types/search/search";
import { useState } from "react";
import ProductList from "../Product/ProductList";

const Search = () => {
  const [loadingSearch] = useState(true);
  const dispatch = useAppDispatch()
  const dataSearchType = useAppSelector(selectSearchSliceSearchType)
  const onFilter = (value: FilterSearch) => {
    dispatch(changeSearch({
      searchType: { valueType: value.value, nameType: value.name }
    }))
  }
  return (
    <div className="search">
      {console.log(dataSearchType)}
      <div className="container">
        <div className="search__content breadcrum">
          <div className="search__content___inner">
            <div className="header">
              <ul className="header__list">
                <li className="header__list___item active">Đang mở cửa</li>
                <li className="header__list___item">Đang giảm giá</li>
                <li className="header__list___item">FreeShip</li>
                <li className="header__list___item">Đánh giá cao</li>
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
            {!loadingSearch ? (
              <>
                <div className="bd">
                  <ProductList />
                </div>
                <div className="pagination">
                  <ul className="pagination__main">
                    <li className="pagination__main___item arrow">
                      <i className="fa-solid fa-angle-left fa-size" />
                    </li>
                    <li className="pagination__main___item active">1</li>
                    <li className="pagination__main___item">2</li>
                    <li className="pagination__main___item">3</li>
                    <li className="pagination__main___item">4</li>
                    <li className="pagination__main___item">5</li>
                    <li className="pagination__main___item">6</li>
                    <li className="pagination__main___item">7</li>
                    <li className="pagination__main___item arrow">
                      <i className="fa-solid fa-angle-right fa-size" />
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <div className="product" style={{ textAlign: "center" }}>
                <lord-icon
                  src="https://cdn.lordicon.com/xjovhxra.json"
                  trigger="loop"
                  colors="primary:#121331,secondary:#08a88a"
                  style={{
                    minHeight: "350px",
                    width: "100px",
                    height: "100px",
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Search;
