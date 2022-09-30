const CheckoutShip = () => {
  return (
    <>
      <h4>
        <i className="fa-solid fa-boxes-stacked" /> Lựa chọn giao hàng
      </h4>
      <ul className="list">
        <li className="list__item">
          <input type="radio" name="" id="" />
          <div className="image">
            <picture>
              <img src="./public/images/ghn.png" alt="" />
            </picture>
          </div>
          <div className="name">
            <span>Giao hàng nhanh -20K phí ship hôm nay 11/7</span>
            <p>Có 13 sản phẩm hỗ trợ giao hàng này</p>
          </div>
        </li>
      </ul>
    </>
  );
};
export default CheckoutShip;
