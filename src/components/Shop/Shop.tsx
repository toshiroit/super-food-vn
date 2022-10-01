import ShopHeader from "./ShopHeader";

const Shop = ({ children }: any) => {
  return (
    <div className="shop">
      <div className="container">
        <div className="shop__content___breadcrumb breadcrumb__content">
          <ul className="main">
            <li className="main__item">SuperFood</li>
            <li className="main__item">Tài khoản</li>
            <li className="main__item">Thông tin</li>
          </ul>
        </div>
        <div className="shop__content">
          <div className="shop__content___inner">
            <div className="shopIf">
              <ShopHeader />
              {/**Shop Info */}
              <>{children}</>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Shop;
