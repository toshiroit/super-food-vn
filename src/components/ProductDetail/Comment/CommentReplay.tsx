import { CommentItemReplayProps } from "@/interfaces/product";
import { useState } from "react";

const CommentReplay = ({ CommentItemReplay }: CommentItemReplayProps) => {
  const [dataUser] = useState({ codeShop: "124" });
  const onRemoveComment = (
    codeComment: string,
    codeCommentReplay: string,
    codeShop: string
  ) => {};
  return (
    <div className="repComment">
      <div className="repComment__avatar">
        <picture>
          <img
            src="https://phunugioi.com/wp-content/uploads/2020/10/anh-dai-dien-avt-anime-1.jpg"
            alt=""
          />
        </picture>
      </div>
      <div className="repComment__content">
        <div className="title">
          {CommentItemReplay.name}
          <i className="fa-solid fa-circle-check fa-size" />
          <b>{CommentItemReplay.dateComment}</b>
        </div>
        <div className="text">
          <p>{CommentItemReplay.textComment}</p>
        </div>
        {dataUser && dataUser.codeShop === CommentItemReplay.codeShop ? (
          <div className="remove">
            <i
              onClick={() =>
                onRemoveComment(
                  "124",
                  CommentItemReplay.code,
                  CommentItemReplay.codeShop
                )
              }
              className="fa-regular fa-trash-can fa-size"
            ></i>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default CommentReplay;
