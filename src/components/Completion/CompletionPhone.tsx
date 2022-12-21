import { useState } from "react";

const CompletionPhone = ({
  title,
  phone,
  error,
  back,
  onSuccess,
}: {
  title: string;
  phone: string;
  error: string;
  back: (value: boolean) => void;
  onSuccess: (value: string) => void;
}) => {
  const [code, setCode] = useState<string>("");
  const onCheckPhone = (value: string) => {};
  const onBack = (value: boolean) => {};
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
            <input
              type="password"
              onChange={(e) => setCode(e.target.value)}
              name=""
              id=""
            />
            <button onClick={() => onSuccess(code)}>Xác nhận</button>
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
