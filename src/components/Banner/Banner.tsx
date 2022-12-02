import { slug } from "@/lib/slug";
import { searchProductByName } from "@/redux/features/product/product-thunks";
import {
  selectSearchSliceDataListTextSearch,
  selectSearchSliceLoading,
  selectSearchSliceSearchType,
  selectSearchSliceTextSearch,
} from "@/redux/features/search/search-selects";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { changeSearch } from "@/redux/features/search/search-slice";
import { useRouter } from "next/router";
import {
  ChangeEvent,
  FocusEvent,
  FocusEventHandler,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { getListTextSearch } from "@/redux/features/search/search-thunks";
import Link from "next/link";
import { clientRoutes } from "@/constants/router/client/client";

const Banner = () => {
  const router = useRouter();
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const searchFormRef = useRef<HTMLFormElement | null>(null);
  const [textSearch, setTextSearch] = useState<string>();
  const searchType = useAppSelector(selectSearchSliceSearchType);
  const textSearchRx = useAppSelector(selectSearchSliceTextSearch);
  const [focus, setFocus] = useState<HTMLInputElement>();
  const [listSearch, setListSearch] = useState<boolean>(false);
  const dataListTextSearch = useAppSelector(
    selectSearchSliceDataListTextSearch
  );
  const dispatch = useAppDispatch();
  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setTextSearch(e.target.value);
    dispatch(getListTextSearch({ text: e.target.value }));
  };
  const onSearchProduct = (e: FormEvent<EventTarget>) => {
    e.preventDefault();
    if (textSearch && textSearch.length > 0) {
      const page = router.query.page || 1;
      setListSearch(false);
      searchInputRef.current?.blur();
      dispatch(changeSearch({ textSearch: textSearch }));
      dispatch(
        searchProductByName({ value: searchType, textSearch: textSearch })
      );
      router.push(`/search?q=${slug(textSearch || "")}&type=product`);
    }
  };
  const onHideList = (e: FocusEvent<HTMLInputElement>) => {
    setListSearch(false);
  };
  useEffect(() => {
    document.body.addEventListener("click", onClickSearch);
    return () => {
      document.body.removeEventListener("click", onClickSearch);
    };
  }, []);
  useEffect(() => {
    onHideListSearch();
  }, [router.query]);
  const onClickSearch = (e: any) => {
    if (searchFormRef.current && !searchFormRef.current.contains(e.target)) {
      searchInputRef.current?.blur();
      setListSearch(false);
    } else {
      setListSearch(true);
    }
  };
  const onHideListSearch = () => {
    searchInputRef.current?.blur();
    setListSearch(false);
  };
  return (
    <div className="banner">
      <div className="banner__inner">
        <div className="container">
          <div className="banner__inner___title">
            <h4>TÌM VÀ ĐẶT MÓN</h4>
            <h4>TÍCH ĐIỂM GIẢM GIÁ</h4>
          </div>
          <form
            ref={searchFormRef}
            name="form_search"
            id="formSearch"
            onSubmit={onSearchProduct}
          >
            <div className="wrapper">
              <div className="wrapper__search">
                <span className="iconSearch">
                  <i className="fa-solid fa-magnifying-glass" />
                </span>
                <input
                  type="text"
                  ref={searchInputRef}
                  value={textSearch}
                  onChange={onChangeSearch}
                  placeholder="Tìm đồ ăn vặt buối tối - trà sữa - đồ ăn đêm ngay bây giờ nào "
                />
                <ul
                  style={{
                    display: `${
                      textSearch && listSearch && dataListTextSearch.data
                        ? ""
                        : "none"
                    }`,
                  }}
                  className="wrapper__search___listSearch"
                >
                  <h4>Kết quả tìm kiếm </h4>
                  <Link href={`/search/?q=${textSearch}&type=shop`}>
                    <a>
                      <li
                        style={{
                          fontWeight: 500,
                          color: "#222",
                          background: "#bddeff4f",
                        }}
                        className="itemSearch"
                      >
                        <i className="fa-solid fa-store"></i>
                        Tìm Shop : {textSearch}
                      </li>
                    </a>
                  </Link>
                  {dataListTextSearch.data &&
                  dataListTextSearch.data.length > 0 ? (
                    listSearch &&
                    dataListTextSearch.data.map((item: any, key: number) => {
                      return (
                        <Link
                          key={item.code_product}
                          href={clientRoutes.PRODUCT_DETAIL(
                            slug(item.name),
                            item.code_product
                          )}
                        >
                          <a>
                            <li className="itemSearch">
                              <i className="fa-regular fa-hand-point-right" />
                              {item.name}
                            </li>
                          </a>
                        </Link>
                      );
                    })
                  ) : (
                    <li className="itemSearch">
                      <i className="fa-regular fa-hand-point-right" />
                      Không tìm thấy dữ liệu
                    </li>
                  )}
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
