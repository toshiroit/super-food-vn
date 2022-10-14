import { formatDatePostSQL } from "@/lib/formatDate";
import { CommentItemProps, EvaluateType } from "@/types/comment/comment";
import { NextPage } from "next";
import { ReactElement, useState } from "react";
import CommentReplay from "./CommentReplay";

const CommentItem = ({ CommentItemProps }: CommentItemProps) => {
  const [isCheck] = useState(false);
  const [dataIsCommentReplay] = useState({
    isActive: false,
  });
  const ratingComment = (rating: number): [] => {
    return [];
  };
  const onShowBackgroundFixed = (
    link: string,
    code: string,
    image: string
  ) => { };
  const evaluatePoint = (point: number): ReactElement => {
    let nameEvaluate: EvaluateType = {
      name: 'Hài lòng',
      color: null
    }
    if (point > 8) {
      nameEvaluate.color = '#28a745'
      nameEvaluate.name = 'Quá hài lòng';
    }
    else if (point < 8) {
      nameEvaluate.color = '#28a745'
      nameEvaluate.name = 'Hài lòng';
    }
    else if (point < 6) {
      nameEvaluate.color = '#ffc107'
      nameEvaluate.name = 'Tạm ổn';
    }
    else if (point < 5) {
      nameEvaluate.color = '#dc3545'
      nameEvaluate.name = 'Không ổn';
    }
    else {
      nameEvaluate.color = '#dc3545'
      nameEvaluate.name = 'Quá không ổn '
    }
    return <span style={{ color: nameEvaluate.color }}>
      {
        nameEvaluate.color === '#28a745' ? '😍 '
          : nameEvaluate.color === '#ffc107' ? '😌 '
            : nameEvaluate.color === '#dc3545' ? '😡 ' : ''
      }
      {
        nameEvaluate.name
      }
    </span>;
  }
  const activeCommentReplay = (code: string, isActive: boolean) => { };
  return (
    <>
      {console.log(CommentItemProps)}
      <div className="evaluate__point___user">
        <div className="left comment">
          <div className="content">
            <div className="avatar">
              <picture>
                <img src={CommentItemProps?.avatar || `
                  https://cdn3.iconfinder.com/data/icons/toolbar-people/512/user_error_man_male_profile_warning-512.png
                `} alt="" />
              </picture>
            </div>
            <div className="name">
              <h3 className="w">{CommentItemProps.full_name}</h3>
              <div className="star">
                <i className="fa-size fa-solid fa-star"></i>
                <i className="fa-size fa-solid fa-star"></i>
                <i className="fa-size fa-solid fa-star"></i>
                <i className="fa-size fa-solid fa-star"></i>
                <i className="fa-size fa-solid fa-star"></i>
              </div>
              <div className="date">
                <span>
                  <i className="fa-solid fa-clock" />
                  {" " + formatDatePostSQL(CommentItemProps.createdat)}
                </span>
              </div>
              <div className="like">
                <i className="fa-solid fa-thumbs-up fa-size" />
                <b>{64}</b>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="title">
            <span>{evaluatePoint(CommentItemProps.evaluate)} </span>
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
              <p>{CommentItemProps.comment}</p>
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
              {CommentItemProps.image &&
                CommentItemProps.image.map((item, key) => {
                  return (
                    <li
                      key={key}
                      className={`comment__image___item`}
                    >
                      <picture>
                        <img src={item} alt="" />
                      </picture>
                    </li>
                  );
                })}
              {CommentItemProps.video &&
                CommentItemProps.video.map((item, key) => {
                  return (
                    <li
                      key={key}
                      className="comment__image___item video"
                    >
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
                })}
            </ul>
          </div>
          <div className="btnComment">
            <div className="btnComment__content">
              <button className="btnLike" type="button">
                <i className="fa-solid fa-thumbs-up fa-size" />
                Thích
              </button>
              <button
                onClick={() =>
                  activeCommentReplay(
                    CommentItem.code,
                    !dataIsCommentReplay.isActive
                  )
                }
                className="btnRep"
                type="button"
              >
                <i className="fa-solid fa-comment-dots fa-size" />
                Phản hồi
              </button>
            </div>
          </div>
          {CommentItem.commentReplay &&
            CommentItem.commentReplay.map((item) => {
              return <CommentReplay key={item.code} CommentItemReplay={item} />;
            })}
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
