const CompletionPass = () => {
  return (
    <div
      id="fromConfirmPass"
      style={{ display: "block" }}
      className="fxConfirm"
    >
      <div className="fxConfirm__inner">
        <h4 className="title">
          <i className="fa-solid fa-unlock" /> Xác nhận mật khẩu của bạn
        </h4>
        <div className="ipn">
          <input type="password" name="" id="" />
          <i className="fa-solid fa-unlock fa-size" />
        </div>
        <div className="btn">
          <button>Xác nhận</button>
          <button>Hủy</button>
        </div>
      </div>
    </div>
  );
};
export default CompletionPass;
