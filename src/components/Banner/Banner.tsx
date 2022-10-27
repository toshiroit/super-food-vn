import { slug } from "@/lib/slug";
import { searchProductByName } from "@/redux/features/product/product-thunks";
import { selectSearchSliceLoading, selectSearchSliceSearchType, selectSearchSliceTextSearch } from "@/redux/features/search/search-selects";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { useRouter } from "next/router";
import { ChangeEvent, EventHandler, FormEvent, useState } from "react";

const Banner = () => {
  const router = useRouter();
  const [textSearch, setTextSearch] = useState<string>()
  const searchType = useAppSelector(selectSearchSliceSearchType)
  const textSearchRx = useAppSelector(selectSearchSliceTextSearch)
  const dispatch = useAppDispatch()
  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setTextSearch(e.target.value)
  }
  const onSearchProduct = (e: FormEvent<EventTarget>) => {
    e.preventDefault();
    if (textSearch && textSearch.length > 0) {
      const page = router.query.page || 1
      dispatch(searchProductByName({ value: searchType, textSearch: textSearch }))
      router.push(`/search?q=${slug(textSearch || '')}`);
    }
  };
  return (
    <div className="banner">
      <div className="banner__inner">
        <div className="container">
          <div className="banner__inner___title">
            <h4>TÌM VÀ ĐẶT MÓN</h4>
            <h4>TÍCH ĐIỂM GIẢM GIÁ</h4>
          </div>
          <form onSubmit={onSearchProduct}>
            <div className="wrapper">
              <div className="wrapper__search">
                <span className="iconSearch">
                  <i className="fa-solid fa-magnifying-glass" />
                </span>
                <input
                  type="text"
                  value={textSearch}
                  onChange={onChangeSearch}
                  placeholder="Tìm đồ ăn vặt buối tối - trà sữa - đồ ăn đêm ngay bây giờ nào "
                />
                <ul
                  style={{ display: "none" }}
                  className="wrapper__search___listSearch"
                >
                  <h4>Kết quả tìm kiếm </h4>
                  <li className="itemSearch">
                    <i className="fa-regular fa-hand-point-right" />
                    124124124124124
                  </li>
                  <li className="itemSearch">
                    <i className="fa-regular fa-hand-point-right" />
                    124124124124124
                  </li>
                  <li className="itemSearch">
                    <i className="fa-regular fa-hand-point-right" />
                    124124124124124
                  </li>
                  <li className="itemSearch">
                    <i className="fa-regular fa-hand-point-right" />
                    124124124124124
                  </li>
                  <li className="itemSearch">
                    <i className="fa-regular fa-hand-point-right" />
                    124124124124124
                  </li>
                  <li className="itemSearch">
                    <i className="fa-regular fa-hand-point-right" />
                    124124124124124
                  </li>
                  <li className="itemSearch">
                    <i className="fa-regular fa-hand-point-right" />
                    124124124124124
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Banner;
