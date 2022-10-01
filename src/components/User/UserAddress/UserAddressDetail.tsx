const UserAddressDetail = () => {
  return (
    <div className="content">
      <div className="title">
        <h4>
          <i className="fa-solid fa-location-dot fa-size" /> Chi tiết địa chỉ
        </h4>
        <i id="showMenuUserIdx" className="fa-solid fa-bars" />
      </div>
      <div className="content__address">
        <div className="content__address___main">
          <div className="content__address___main____csItem">
            <label htmlFor="">
              <i className="fa-solid fa-signature fa-size" /> Họ và tên
            </label>
            <input type="text" value={""} name="adasdasd" id="asdasdasd" />
          </div>
          <div className="content__address___main____csItem">
            <label htmlFor="">
              <i className="fa-solid fa-phone fa-size" />
              Số điện thoại
            </label>
            <input type="text" name="" id="" />
          </div>
          <div className="content__address___main____csItem">
            <label htmlFor="">
              <i className="fa-solid fa-phone fa-size" />
              Số điện thoại phụ
            </label>
            <input type="text" name="" id="" />
          </div>
          <div className="content__address___main____csItem">
            <label htmlFor="">
              <i className="fa-solid fa-at fa-size" /> Email
            </label>
            <input type="text" name="" id="" />
          </div>
          <div className="content__address___main____csItem">
            <label htmlFor="">
              <i className="fa-solid fa-location-arrow fa-size" />
              Số nhà / Đường
            </label>
            <select>
              {/* <option value={userDetail.address.full} >{userDetail.address.full}</option>
              <option value={userDetail.address.city}>{userDetail.address.city}</option>
              <option value={userDetail.address.district}>{userDetail.address.district}</option> */}
            </select>
          </div>
          <div className="content__address___main____csItem">
            <label htmlFor="">
              <i className="fa-solid fa-location-arrow fa-size" />
              Xã / Phường
            </label>
            <select>
              <option value="">#</option>
            </select>
          </div>
          <div className="content__address___main____csItem">
            <label htmlFor="">
              <i className="fa-solid fa-location-arrow fa-size" />
              Quận / Huyện
            </label>
            <select>
              <option value="">#</option>
            </select>
          </div>
          <div className="content__address___main____csItem">
            <label htmlFor="">
              <i className="fa-solid fa-location-arrow fa-size" />
              Tỉnh / Thành phố
            </label>
            <select>
              <option value="">#</option>
            </select>
          </div>
          <div className="content__address___main____csItem">
            <label htmlFor="">
              <i className="fa-solid fa-location-arrow fa-size" />
              Tỉnh / Thành phố
            </label>
            <select>
              <option value="">#</option>
            </select>
          </div>
          <div className="content__address___main____csItemFw">
            <label htmlFor="">
              <i className="fa-solid fa-location-dot fa-size" />
              Địa chỉ cụ thể
            </label>
            <textarea name="" id="" defaultValue={""} />
          </div>
          <div className="content__address___main____btn">
            <button>
              <i className="fa-solid fa-pencil fa-size" /> Cập nhật địa chỉ
            </button>
          </div>
        </div>
        <div className="content__address___not">
          <div className="title">
            <h4>
              <i className="fa-solid fa-triangle-exclamation" /> Lưu ý
            </h4>
          </div>
          <ul className="main">
            <li className="main__item">
              <p>
                <b>1:</b>Địa chi của bạn là đia chỉ giao hàng của bạn , Địa chỉ
                giao hàng phải đúng với địa chỉ của bạn đang ở đề giao đúng nơi
                bạn ở
              </p>
            </li>
            <li className="main__item">
              <p>
                <b>2:</b>1 tài khoản chi được hỗ trợ tối đa 3 địa chỉ . 1 địa
                chỉ chính , 2 địa chỉ phụ
              </p>
            </li>
            <li className="main__item">
              <p>
                <b>3:</b> Việc cung cấp địa chỉ ảo hoặc có tình sẽ bị kiểm tra
                tài khoản và khóa vĩnh viễn nếu vi phạm
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default UserAddressDetail;
