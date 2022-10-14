import { selectCommentDataComment, selectCommentLoading } from "@/redux/features/comment/comment-selects";
import { getCommentByProduct } from "@/redux/features/comment/comment-thunks";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import CommentItem from "./Comment/CommentItem";

const ProductDetailComment = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const dataComment = useAppSelector(selectCommentDataComment)
  const loadingComment = useAppSelector(selectCommentLoading)
  const [isActive] = useState<any>();
  const onSortComment = (name: string) => { };
  useEffect(() => {
    const query_name = router.query.name as string
    const code_product = query_name.split('.')[1]
    dispatch(getCommentByProduct({ code_product }))
  }, [router.query, dispatch])
  return (
    <>
      <div className="evaluate__point">
        <div className="evaluate__point___user evaluate__point___top">
          <div className="left">
            <div className="title">
              <h4>4.9</h4>
              <div className="w">
                <div className="star">
                  <i className="fa-solid fa-star fa-size" />
                  <i className="fa-solid fa-star fa-size" />
                  <i className="fa-solid fa-star fa-size" />
                  <i className="fa-solid fa-star fa-size" />
                  <i className="fa-solid fa-star fa-size" />
                </div>
                <span>1041+ nhận xét </span>
              </div>
            </div>
            <ul className="point">
              <li className="point__item">
                <div className="star">
                  <i className="fa-size fa-solid fa-star" />
                  <i className="fa-size fa-solid fa-star" />
                  <i className="fa-size fa-solid fa-star" />
                  <i className="fa-size fa-solid fa-star" />
                  <i className="fa-size fa-solid fa-star" />
                </div>
                <div className="wp">
                  <div className="wp__after" />
                </div>
                <div className="text">
                  <span>914.914+</span>
                </div>
              </li>
              <li className="point__item">
                <div className="star">
                  <i className="fa-size fa-solid fa-star" />
                  <i className="fa-size fa-solid fa-star" />
                  <i className="fa-size fa-solid fa-star" />
                  <i className="fa-size fa-solid fa-star" />
                  <i className="fa-size fa-solid fa-star not-active" />
                </div>
                <div className="wp" />
                <div className="text">
                  <span>12.000+</span>
                </div>
              </li>
              <li className="point__item">
                <div className="star">
                  <i className="fa-size fa-solid fa-star" />
                  <i className="fa-size fa-solid fa-star" />
                  <i className="fa-size fa-solid fa-star" />
                  <i className="fa-size fa-solid fa-star not-active" />
                  <i className="fa-size fa-solid fa-star not-active" />
                </div>
                <div className="wp" />
                <div className="text">
                  <span>912</span>
                </div>
              </li>
              <li className="point__item">
                <div className="star">
                  <i className="fa-size fa-solid fa-star" />
                  <i className="fa-size fa-solid fa-star" />
                  <i className="fa-size fa-solid fa-star not-active" />
                  <i className="fa-size fa-solid fa-star not-active" />
                  <i className="fa-size fa-solid fa-star not-active" />
                </div>
                <div className="wp" />
                <div className="text">
                  <span>120</span>
                </div>
              </li>
              <li className="point__item">
                <div className="star">
                  <i className="fa-size fa-solid fa-star" />
                  <i className="fa-size fa-solid fa-star not-active" />
                  <i className="fa-size fa-solid fa-star not-active" />
                  <i className="fa-size fa-solid fa-star not-active" />
                  <i className="fa-size fa-solid fa-star not-active" />
                </div>
                <div className="wp" />
                <div className="text">
                  <span>40</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="right">
            <div className="title">
              <h4>Tất cả hình ảnh (6)</h4>
            </div>
            <ul className="image">
              {/* <li
                          onClick={() =>
                            onShowBackgroundFixed(
                              item_w.link,
                              item_w.code,
                              "image"
                            )
                          }
                          className="image__item"
                        >
                          <picture>
                            <img src={item_w.link} alt="" />
                          </picture>
                        </li> */}
            </ul>
            <div className="sort">
              <h3 className="w">Lọc theo :</h3>
              <ul className="sort__main">
                <li
                  onClick={() => onSortComment("sortaz")}
                  className={`sort__main___item ${isActive === "sortaz" ? "active" : ""
                    }`}
                >
                  Đánh giá thấp đến cao
                </li>
                <li
                  onClick={() => onSortComment("sortza")}
                  className={`sort__main___item ${isActive === "sortza" ? "active" : ""
                    }`}
                >
                  Đánh giá cao đến thấp
                </li>
                <li
                  onClick={() => onSortComment("sort5s")}
                  className={`sort__main___item ${isActive === "sort5s" ? "active" : ""
                    }`}
                >
                  5 <i className="fa-solid fa-star fa-size" />
                </li>
                <li
                  onClick={() => onSortComment("sort4s")}
                  className={`sort__main___item ${isActive === "sort4s" ? "active" : ""
                    }`}
                >
                  4 <i className="fa-solid fa-star fa-size" />
                </li>
                <li
                  onClick={() => onSortComment("sort3s")}
                  className={`sort__main___item ${isActive === "sort3s" ? "active" : ""
                    }`}
                >
                  3 <i className="fa-solid fa-star fa-size" />
                </li>
                <li
                  onClick={() => onSortComment("sort2s")}
                  className={`sort__main___item ${isActive === "sort2s" ? "active" : ""
                    }`}
                >
                  2 <i className="fa-solid fa-star fa-size" />
                </li>
                <li
                  onClick={() => onSortComment("sort1s")}
                  className={`sort__main___item ${isActive === "sort1s" ? "active" : ""
                    }`}
                >
                  1 <i className="fa-solid fa-star fa-size" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Item Comment */}

        <>{/* <CommentItem /> */}

          {
            dataComment && dataComment.map(item => {
              return (
                <CommentItem key={item.code_comment}
                  CommentItemProps={item}
                />
              )
            })
          }
        </>
        <div />
      </div>
      <div className="evaluate__pagination">
        <ul className="evaluate__pagination___main">
          <li className="item prev">
            <i className="fa-solid fa-angle-left" />
          </li>
          <li className="item active">1</li>
          <li className="item">1</li>
          <li className="item">1</li>
          <li className="item">...</li>
          <li className="item">1</li>
          <li className="item">1</li>
          <li className="item">1</li>
          <li className="item next">
            <i className="fa-solid fa-angle-right" />
          </li>
        </ul>
      </div>
    </>
  );
};
export default ProductDetailComment;
