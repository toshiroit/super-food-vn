import { GiftItem } from "src/types/Gift/Gift";

const GiftItem = ({ code, title, image, onSetVoucher }: GiftItem) => {
  return (
    <li className="main__list___item">
      <div className="image">
        <i className="fa-solid fa-gift"></i>
      </div>
      <i className="bd" />
      <div style={{ width: "188px" }} className="price">
        <span>{title}</span>
      </div>
      <div className="btn">
        <button onClick={() => onSetVoucher(code)} type="button">
          Chọn
        </button>
      </div>
    </li>
  );
};
export default GiftItem;
