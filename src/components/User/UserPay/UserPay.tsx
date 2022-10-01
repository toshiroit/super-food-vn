const UserPay = () => {
  return (
    <div className="content">
      <div className="title">
        <h4>
          <i className="fa-solid fa-location-dot fa-size" /> Thanh toán
        </h4>
        <i id="showMenuUserIdx" className="fa-solid fa-bars" />
      </div>
      <div className="content__pay">
        <ul className="content__pay___main">
          <li className="content__pay___main____item">
            <h4 className="title">
              <i className="fa-solid fa-hand-holding-dollar" />
              Nhận hàng khi thanh toán
            </h4>
            <p className="wp">Trả tiền khi nhận được sản phẩm</p>
            <div className="status active">
              <span>
                ĐANG HOẠT ĐỘNG
                <i className="fa-solid fa-circle-check fa-size fa-size-status-yes" />
              </span>
            </div>
          </li>
          <li className="content__pay___main____item">
            <h4 className="title">
              <i className="fa-solid fa-credit-card" />
              Thanh toán qua Internet/Banking - Thẻ nội địa
            </h4>
            <p className="wp">Thanh toán qua thiết bị di động của bạn</p>
            <div className="status active">
              <span>
                ĐANG HOẠT ĐỘNG
                <i className="fa-solid fa-circle-check fa-size fa-size-status-yes" />
              </span>
            </div>
          </li>
          <li className="content__pay___main____item">
            <h4 className="title">
              <i className="fa-solid fa-credit-card" />
              Thanh toán Momo / Zalo Pay / Viettel Pay
            </h4>
            <p className="wp">
              Thanh toán qua cổng điện của các nhà cung cấp trên được cho phép
            </p>
            <div className="status inActive">
              <span>
                KHÔNG HOẠT ĐỘNG
                <i className="fa-solid fa-ban fa-size fa-size-status-inActive" />
              </span>
            </div>
          </li>
          <li className="content__pay___main____item">
            <h4 className="title">
              <i className="fa-solid fa-credit-card" />
              Thanh toán qua thẻ Visa
            </h4>
            <p className="wp">
              Thanh toán quả thẻ Visa cho mọi đối tượng ở các nước không phải
              Quốc Tịch Việt Nam
            </p>
            <div className="status inBlock">
              <span>
                BỊ KHÓA
                <i className="fa-solid fa-triangle-exclamation fa-size fa-size-status-inBlock" />
              </span>
            </div>
          </li>
        </ul>
        <div className="content__pay___not">
          <h4 className="content__pay___not____title">
            <i className="fa-solid fa-quote-left" /> Lưu ý
          </h4>
          <div className="content__pay___not____item">
            <p>
              <b>
                <i className="fa-solid fa-angles-right" />
              </b>
              Các cổng thanh toán hiện đang được hoạt động là 4
            </p>
            <p>
              <b>
                <i className="fa-solid fa-angles-right" />
              </b>
              Thanh toán khi nhận là khi bạn nhận hàng sẽ thanh toán cho Shipper
              đúng với tổng tiền mà bạn đặt hàng
            </p>
            <p>
              <b>
                <i className="fa-solid fa-angles-right" />
              </b>
              Thanh toán qua Internet/Banking - Thẻ nội địa là thanh toán qua
              thiết bị di động của bạn có cài Internet/Banking và ngân hàng của
              bạn phải hỗ trợ cổng than hoán này
            </p>
            <p>
              <b>
                <i className="fa-solid fa-angles-right" />
              </b>
              Thanh toán Momo / Zalo Pay / Viettel Pay là thanh toán qua cổng
              điện tử do bên thử 3 cung cấp cho bạn và hiện tại chỉ hỗ trợ qua
              các cổng điện tử gồm Momo / Zalo Pay / Vittel Pay
            </p>
            <p>
              <b>
                <i className="fa-solid fa-angles-right" />
              </b>
              Thanh toán qua thẻ Visa là thanh toán qua cổng quốc tê phù hợp với
              người nước ngoài đang cư trú tại việt nam cũng có thể thanh toán
              và mua hàng được
            </p>
            <p>
              <b>
                <i className="fa-solid fa-angles-right" />
              </b>
              Việc thanh toán hoặc cung cấp thông tin không hợp pháp bị phát hạn
              hiện sẽ bị khóa cổng thanh toán và mở lại khi cung cấp đúng lí do
              bạn đưa ra
            </p>
            <p>
              <b>
                <i className="fa-solid fa-angles-right" />
              </b>
              Nếu cổng thanh toán bị khóa không lí do , bạn vui lòng liên hệ tới
              hỗ trợ viên của chúng tôi để phán án tình trang hoặc gửi Email về
              abc@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserPay;
