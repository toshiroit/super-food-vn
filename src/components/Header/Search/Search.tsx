import { FormHTMLAttributes, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchList from "./SearchList";
const Search = () => {
  const [isDisplaySearchList, setDisplaySearchList] = useState({
    display: false,
  });
  const refInputSearch = useRef<HTMLFormElement>(null);
  const dispatch = useDispatch();
  const onSearchSubmit = () => {};
  <form
    onSubmit={onSearchSubmit}
    ref={refInputSearch}
    id="searchList"
    method=""
  >
    <div className="search">
      <input
        type="search"
        name="name"
        placeholder="Tìm kiếm sản phẩm ........... "
        id=""
      />
      <select>
        <option>124124</option>
      </select>
      <i className="fa-solid fa-magnifying-glass fa-size fa-search-sett" />
      {isDisplaySearchList.display ? (
        <SearchList refInputSearch={refInputSearch} nameSearch={"124"} />
      ) : (
        ""
      )}
    </div>
  </form>;
};
export default Search;
