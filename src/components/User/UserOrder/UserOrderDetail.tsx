const UserOrderDetail = () => {
  return (
    <div className="content">
      <div className="title">
        <h4>
          <i className="fa-solid fa-circle-info" />
          Chi tiết đơn hàng
        </h4>
        <i id="showMenuUserIdx" className="fa-solid fa-bars" />
      </div>
      <div className="content__order">
        <div className="content__order___imageName">
          <picture>
            <img
              src="https://cdn.cet.edu.vn/wp-content/uploads/2019/04/fastfood-la-gi.jpg"
              alt=""
            />
          </picture>
          <div className="namePrice">
            <h4>
              <i className="fa-solid fa-signature fa-size" /> Lẩu Thái Hải Sản
              (Gồm Nước Cốt Lẩu)
            </h4>
            <span className="tag">
              <i className="fa-solid fa-tag fa-size" />
              Lẩu cay , Cơm , Bún
            </span>
            <div className="grpPro">
              <span>
                <b>
                  <i className="fa-solid fa-layer-group fa-size" />
                  Loại sản phẩm
                </b>
                : Không toping , Thêm bún
              </span>
            </div>
            <div className="grpPro">
              <span>
                <b>
                  <i className="fa-brands fa-affiliatetheme fa-size" />
                  Số lượng
                </b>
                : 260
              </span>
            </div>
            <div className="price">
              <span className="price__w2">
                <b>Tổng tiền : </b>140.000 đ
              </span>
            </div>
          </div>
          <div className="removeOrder">
            <button type="button" name="removeOrder">
              Hủy đơn hàng{" "}
            </button>
          </div>
        </div>
        <div className="content__order___infoW">
          <ul className="statusMain">
            <span className="fxNd">
              <i className="fa-solid fa-truck-fast" /> Tình trạng đơn hàng
            </span>
            <li className="statusMain__item active">
              <i className="fa-solid fa-check fa-size" />
              <span> Đang xác nhận</span>
            </li>
            <li className="statusMain__item active">
              <i className="fa-solid fa-check fa-size" />
              <span>Gửi yều câu đến shipper </span>
            </li>
            <li className="statusMain__item active">
              <i className="fa-solid fa-check fa-size" />
              <span>Shipper đã nhận đơn hàng </span>
            </li>
            <li className="statusMain__item">
              <i className="fa-solid fa-rotate fa-size fa-size-waitLoad" />
              <span> Gửi yêu cầu người bán </span>
            </li>
            <li className="statusMain__item">
              <i className="fa-solid fa-quote-left fa-size" />
              <span> Người bán đã nhận yêu cầu</span>
            </li>
            <li className="statusMain__item">
              <i className="fa-solid fa-quote-left fa-size" />
              <span> Đang chuẩn bị</span>
            </li>
            <li className="statusMain__item">
              <i className="fa-solid fa-quote-left fa-size" />
              <span> Đang giao hàng</span>
            </li>
            <li className="statusMain__item">
              <i className="fa-solid fa-quote-left fa-size" />
              <span> Giao hàng thành công </span>
            </li>
          </ul>
          <div className="gifOrder">
            <div className="gifOrder__image">
              <picture>
                <img
                  src="./public/gif/b0067ade5e832d2aefec8ee9bda50fdc.gif"
                  alt=""
                />
              </picture>
            </div>
          </div>
          <div className="show">
            <p className="show__infoFx">
              <i className="fa-solid fa-triangle-exclamation" /> Quý khách có
              thể kiểm tra đối chiều giữa Shipper và shop đúng sản phẩm bạn đặt
              hay chưa . Nếu sản phẩm không đúng bạn liên hệ với shipper để hỏi
              hoặc liên hệ bên hỗ trợ của chúng tối
            </p>
            <p className="show__infoFx">
              <i className="fa-solid fa-triangle-exclamation" /> Quý khách khi
              nhận hàng vui lòng đeo khẩu trang để phòng dich
            </p>
            <div className="show__infoBuy">
              <div className="show__infoBuy___shop show__infoBuy___item">
                <div className="title">
                  <h4 className="title__shop">
                    <i className="fa-solid fa-shop" /> Thông tin người bán
                  </h4>
                </div>
                <ul className="nd">
                  <li className="nd__item">
                    <span>
                      <i className="fa-solid fa-signature fa-size" />
                      Tên của hàng :<b>Cửa hàng lẩu thái Buôn ma thuột </b>
                    </span>
                  </li>
                  <li className="nd__item">
                    <span>
                      <i className="fa-solid fa-phone fa-size" /> Số điện thoại
                      : <b> 0941.714.714</b>
                    </span>
                  </li>
                  <li className="nd__item">
                    <span>
                      <i className="fa-solid fa-location-dot fa-size" />
                      Địa chỉ :<b>86/24 Hà huy tập , tân An , Buôn ma thuột</b>
                    </span>
                  </li>
                  <li className="nd__item">
                    <span>
                      <i className="fa-solid fa-bowl-rice fa-size" />
                      Sản phẩm đặt :
                      <b>Lẩu thái cay ( Không Topping , cay nhiều )</b>
                    </span>
                  </li>
                  <li className="nd__item">
                    <span>
                      <i className="fa-solid fa-envelope-open-text fa-size" />
                      Thông tin thêm cho Shop :
                    </span>
                    <p>
                      Lorem facere at blanditiis doloribus! Similique aliquid
                      error vel ratione quos reiciendis nisi illo!
                    </p>
                  </li>
                  <li className="nd__item">
                    <span>
                      <i className="fa-solid fa-list-check fa-size" />
                      Tình trang : <b>Đang chế biến </b>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="show__infoBuy___wd" />
              <div className="show__infoBuy___shop show__infoBuy___item">
                <div className="title">
                  <h4 className="title__shipper">
                    <i className="fa-solid fa-truck-fast" />
                    Thông tin Shipper
                  </h4>
                </div>
                <ul className="nd">
                  <li className="nd__item">
                    <span>
                      <i className="fa-solid fa-signature fa-size" />
                      Tên Shipper: <b>Đậu Văn Nam </b>
                    </span>
                  </li>
                  <li className="nd__item">
                    <span>
                      <i className="fa-solid fa-phone fa-size" /> Số điện thoại
                      : <b> 0941.714.714</b>
                    </span>
                  </li>
                  <li className="nd__item">
                    <span>
                      <i className="fa-solid fa-bowl-rice fa-size" />
                      Sản phẩm đặt :
                      <b>Lẩu thái cay ( Không Topping , cay nhiều 124124)</b>
                    </span>
                  </li>
                  <li className="nd__item">
                    <span>
                      <i className="fa-solid fa-location-dot fa-size" />
                      Địa chỉ nhận :
                      <b>Lẩu thái cay ( Không Topping , cay nhiều 124124)</b>
                    </span>
                  </li>
                  <li className="nd__item">
                    <span>
                      <i className="fa-solid fa-location-dot fa-size" />
                      Địa chỉ giao :
                      <b>Lẩu thái cay ( Không Topping , cay nhiều 124124)</b>
                    </span>
                  </li>
                  <li className="nd__item">
                    <span>
                      <i className="fa-solid fa-dollar-sign fa-size" />
                      Phí Ship :<b>24.000 đ </b>
                    </span>
                  </li>
                  <li className="nd__item">
                    <span>
                      <i className="fa-solid fa-money-bills fa-size" />
                      Tổng tiền thanh toán :<b>168.000 đ </b>
                    </span>
                  </li>
                  <li className="nd__item">
                    <span>
                      <i className="fa-solid fa-location-dot fa-size" />
                      Phương thức thanh toán :<b>Tiền mặt </b>
                    </span>
                  </li>
                  <li className="nd__item">
                    <span>
                      <i className="fa-solid fa-envelope-open-text fa-size" />
                      Thông tin thêm cho Shipper :
                    </span>
                    <p>
                      Lorem facere at blanditiis doloribus! Similique aliquid
                      error vel ratione quos reiciendis nisi illo!
                    </p>
                  </li>
                  <li className="nd__item">
                    <span>
                      <i className="fa-solid fa-list-check fa-size" />
                      Tình trang : <b>Đang chế biến </b>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserOrderDetail;
