import { CommentItemProps } from "@/interfaces/product";
import { NextPage } from "next";
import { useState } from "react";
import CommentReplay from "./CommentReplay";

const CommentItem: NextPage<CommentItemProps> = ({
  CommentItem,
}: CommentItemProps) => {
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
  ) => {};
  const activeCommentReplay = (code: string, isActive: boolean) => {};
  return (
    <>
      <div className="evaluate__point___user">
        <div className="left comment">
          <div className="content">
            <div className="avatar">
              <picture>
                <img src={CommentItem.avatar} alt="" />
              </picture>
            </div>
            <div className="name">
              <h3 className="w">{CommentItem.name}</h3>
              <div className="star">
                {ratingComment(CommentItem.rating).map((item) => {
                  return item;
                })}
              </div>
              <div className="date">
                <span>
                  <i className="fa-solid fa-clock" />
                  {CommentItem.dateComment}
                </span>
              </div>
              <div className="like">
                <i className="fa-solid fa-thumbs-up fa-size" />
                <b>{CommentItem.like}</b>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="title">
            <span>Hài lòng </span>
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
              <p>{CommentItem.textComment}</p>
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
              {}
              {CommentItem.images &&
                CommentItem.images.map((item) => {
                  return (
                    <li
                      onClick={() =>
                        onShowBackgroundFixed(item.link, item.code, "image")
                      }
                      key={item.code}
                      className={`comment__image___item`}
                    >
                      <picture>
                        <img src={item.link} alt="" />
                      </picture>
                    </li>
                  );
                })}
              {CommentItem.videos &&
                CommentItem.videos.map((item) => {
                  return (
                    <li
                      onClick={() =>
                        onShowBackgroundFixed(item.link, item.code, "video")
                      }
                      key={item.code}
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
