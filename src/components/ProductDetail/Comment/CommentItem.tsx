import { formatDatePostSQL } from "@/lib/formatDate";
import {
  CommentItemProps,
  EvaluateProductItemIProps,
  EvaluateType,
} from "@/types/comment/comment";
import { ReactElement, useState } from "react";
import { AuthContext, useAuthContext } from "src/contexts/Auth/AuthContext";
import CommentReplay from "./CommentReplay";

const CommentItem = ({ itemEvaluate }: EvaluateProductItemIProps) => {
  const { data, isLogged } = useAuthContext();
  const [isCheck] = useState(false);
  const [dataIsCommentReplay] = useState({
    isActive: false,
  });

  const evaluatePoint = (point: number): ReactElement => {
    let nameEvaluate: EvaluateType = {
      name: "Hài lòng",
      color: null,
    };
    if (point > 8) {
      nameEvaluate.color = "#28a745";
      nameEvaluate.name = "Quá hài lòng";
    } else if (point < 8) {
      nameEvaluate.color = "#28a745";
      nameEvaluate.name = "Hài lòng";
    } else if (point < 6) {
      nameEvaluate.color = "#ffc107";
      nameEvaluate.name = "Tạm ổn";
    } else if (point < 5) {
      nameEvaluate.color = "#dc3545";
      nameEvaluate.name = "Không ổn";
    } else {
      nameEvaluate.color = "#dc3545";
      nameEvaluate.name = "Quá không ổn ";
    }
    return (
      <span style={{ color: nameEvaluate.color }}>
        {nameEvaluate.color === "#28a745"
          ? "😍 "
          : nameEvaluate.color === "#ffc107"
          ? "😌 "
          : nameEvaluate.color === "#dc3545"
          ? "😡 "
          : ""}
        {nameEvaluate.name}
      </span>
    );
  };
  const isCheckLike = (likeData: any) => {
    let resultCheck = false;
    if (isLogged && data) {
      if (likeData && data.data && data.data.payload) {
        likeData.map((item: any) => {
          if (item.code_user.trim() === data.data.payload.code_user.trim()) {
            resultCheck = true;
          }
        });
      }
    }
    return resultCheck;
  };
  const resultStarEl = (point: number) => {
    const result = [];
    for (let i = 0; i < point; i++) {
      result.push(<i className="fa-size fa-solid fa-star"></i>);
    }
    for (let j = point; j <= 5; j++) {
      result.push();
    }
    return result;
  };
  return (
    <>
      <div className="evaluate__point___user">
        <div className="left comment">
          <div className="content">
            <div className="avatar">
              <picture>
                <img src={itemEvaluate.avatar} alt="" />
              </picture>
            </div>
            <div className="name">
              <h3 className="w">{itemEvaluate.full_name}</h3>
              <div className="star">
                {resultStarEl(itemEvaluate.evaluate_product)}
              </div>
              <div className="date">
                <span>
                  <i className="fa-solid fa-clock" />
                  {" " + formatDatePostSQL(itemEvaluate.createdAt)}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="title">
            <span>{evaluatePoint(itemEvaluate.evaluate_product)} </span>
            <div className="check">
              {isCheck ? (
                <>
                  <i className="fa-solid fa-circle-check fa-size" />
                  <span>Đã kiểm tra </span>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="comment">
            <div className="comment__text">
              <p>{itemEvaluate.text}</p>
            </div>
            <ul className="comment__image">
              {/*
            <li className="comment__image___item video">
              <picture>
                <img
                  src="https://image.cooky.vn/posproduct/g0/48/s400x400/e5fae484-cd78-488d-ae61-3582adc44cf3.jpeg"
                  alt=""
                />
              </picture>

              <div className="playVideo">
                <i className="fa-size fa-solid fa-video" />
                <span>4:30</span>
              </div>
            </li>
            */}
              {/* {CommentItemProps.image &&
                CommentItemProps.image.map((item, key) => {
                  return (
                    <li key={key} className={`comment__image___item`}>
                      <picture>
                        <img src={item} alt="" />
                      </picture>
                    </li>
                  );
                })}
              {CommentItemProps.video &&
                CommentItemProps.video.map((item, key) => {
                  return (
                    <li key={key} className="comment__image___item video">
                      <picture>
                        <img
                          src="https://image.cooky.vn/posproduct/g0/48/s400x400/e5fae484-cd78-488d-ae61-3582adc44cf3.jpeg"
                          alt=""
                        />
                      </picture>
                      <div className="playVideo">
                        <i className="fa-size fa-solid fa-video" />
                        <span>4:30</span>
                      </div>
                    </li>
                  );
                })} */}
            </ul>
          </div>
          {/* {isLogged ? (
            <div className="btnComment">
              <div className="btnComment__content">
                <button
                  className={`btnLike ${isCheckLike(0) ? "activeLike" : ""} `}
                  type="button"
                >
                  <i className="fa-solid fa-thumbs-up fa-size" />
                  {isCheckLike(0) ? " Đã thích" : "Thích"}
                </button>
                <button className="btnRep" type="button">
                  <i className="fa-solid fa-comment-dots fa-size" />
                  Phản hồi
                </button>
              </div>
            </div>
          ) : (
            ""
          )} */}

          {/* <div className="repComment" style={{ display: "" }}>
            {
              dataIsCommentReplay.isActive && dataIsCommentReplay.codeComment === code ? <CommentSendReplay /> : ''
            }
          </div> */}
        </div>
      </div>
    </>
  );
};
export default CommentItem;
