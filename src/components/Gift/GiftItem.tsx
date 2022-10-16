import { GiftItem } from "src/types/Gift/Gift";

const GiftItem = ({ code, title, image }: GiftItem) => {
  return (
    <li className="main__list___item">
      <div className="image">
        <picture>
          <img
            src="https://cdn.tgdd.vn/2020/04/GameApp/image-180x180.png"
            alt=""
          />
        </picture>
      </div>
      <i className="bd" />
      <div className="price">
        <span>{title}</span>
      </div>
      <div className="btn">
        <button type="submit">Chọn</button>
      </div>
    </li>
  );
};
export default GiftItem;
