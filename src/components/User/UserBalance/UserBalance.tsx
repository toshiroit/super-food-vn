import Link from "next/link";

const UserBalance = () => {
  return (
    <div className="content">
      <div className="title">
        <h4>
          <i className="fa-solid fa-coins" /> Quản lí số dư
        </h4>
        <Link href={"/user"}>
          <a>
            <i id="showMenuUserIdx" className="fa-solid fa-bars" />
          </a>
        </Link>
      </div>
      <div className="wp">
        <ul className="wp__list">
          <span className="ndFx">Thông tin chung </span>
          <li className="wp__list___item">
            <h4 className="title">
              <i className="fa-solid fa-coins fa-size fa-size-coin" />
              Số dư
            </h4>
            <span>140.246 đ</span>
          </li>
          <li className="wp__list___item">
            <h4 className="title">
              <i className="fa-solid fa-credit-card fa-size fa-size-card" />
              Thẻ đã liên kết
            </h4>
            <span>4</span>
          </li>
          <li className="wp__list___item">
            <h4 className="title">
              <i className="fa-solid fa-credit-card fa-size" />
              Thẻ bị khóa / cấm
            </h4>
            <span>13</span>
          </li>
          <li className="wp__list___item">
            <h4 className="title">
              <i className="fa-solid fa-hand-holding-dollar fa-size" />
              Tổng tiền đã chi trong tháng
            </h4>
            <span>140.246 đ</span>
          </li>
          <li className="wp__list___item">
            <h4 className="title">
              <i className="fa-solid fa-hand-holding-dollar fa-size" />
              Tổng tiền đã chi trong tuần
            </h4>
            <span>140.246 đ</span>
          </li>
          <li className="wp__list___item">
            <h4 className="title" />
            <span>140.246 đ</span>
          </li>
        </ul>
        <ul className="wp__list">
          <span className="ndFx">Giao dịch </span>
          <li className="wp__list___item">
            <h4 className="title">
              <i className="fa-solid fa-coins fa-size fa-size-coin" />
              Nạp thêm số dư
            </h4>
            <button>
              <i className="fa-solid fa-plus fa-size fa-size-coinAdd" />
              Nạp ngay
            </button>
          </li>
          <li className="wp__list___item">
            <h4 className="title">
              <i className="fa-solid fa-credit-card fa-size fa-size-card" />
              Thêm liên kết thẻ
            </h4>
            <button>
              <i className="fa-solid fa-plus fa-size fa-size-coinAdd" />
              Thêm ngay
            </button>
          </li>
        </ul>
        <ul className="wp__list">
          <span className="ndFx">Mã giảm giá / Code / Ưu đãi </span>
          <li className="wp__list___item">
            <h4 className="title">
              <i className="fa-solid fa-coins fa-size fa-size-coin" />
              Mã giảm giá
            </h4>
            <span>
              140 <b>Mã</b>
            </span>
          </li>
          <li className="wp__list___item">
            <h4 className="title">
              <i className="fa-solid fa-coins fa-size fa-size-coin" />
              Code giảm giá
            </h4>
            <span>
              140 <b>Mã</b>
            </span>
          </li>
          <li className="wp__list___item">
            <h4 className="title">
              <i className="fa-solid fa-coins fa-size fa-size-coin" />
              Ưu đãi dành riêng
            </h4>
            <span>
              140 <b>Mã</b>
            </span>
          </li>
        </ul>
        <div className="ndF">
          <ul className="listNot">
            <span className="listNot__text">Các lưu ý </span>
            <li className="listNot__item">
              <b>1 :</b>
              <p>Các mã ưu đãi sẽ có các thời gian nhất định</p>
            </li>
            <li className="listNot__item">
              <b>2 :</b>
              <p>
                Các thẻ vi phạm khi giao dịch quá lần cho phép hay các giao dịch
                không vi phạm sẽ bị khóa có thời hạn hoặc bị khóa vĩnh viễn
              </p>
            </li>
            <li className="listNot__item">
              <b>3 :</b>
              <p>
                Nếu thẻ bị khóa đến ngày chưa được mở , bạn có thể liên hệ tới
                các nhân viên của hệ thống để được hỗ trợ
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default UserBalance;
