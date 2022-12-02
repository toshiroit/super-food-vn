const CompletionPhone = ({
  title,
  phone,
  back,
}: {
  title: string;
  phone: string;
  back: (value: boolean) => void;
}) => {
  return (
    <div className="content">
      <div className="title">
        <h4>
          <i className="fa-solid fa-shield-halved"></i>
          {title}
        </h4>
        <i id="showMenuUserIdx" className="fa-solid fa-bars" />
      </div>
      <div className="content__restPass">
        <div className="content__restPass___main">
          <div className="title">
            <label htmlFor="">
              <i className="fa-solid fa-passport fa-size" />
              Xác nhận đó là bạn
            </label>
            <p>
              Vui lòng nhập mã xác nhận gửi qua số điện thoại{" "}
              {phone.slice(0, 5) + "******"}
            </p>
          </div>
          <div className="ipn">
            <input type="password" name="" id="" />
            <button>Xác nhận</button>
            <button onClick={() => back(false)} type="button">
              Huỷ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CompletionPhone;
