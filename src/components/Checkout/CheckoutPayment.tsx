import { CheckoutPayment } from "@/types/checkout/checkout";
import { useState } from "react";

const CheckOutPayment = () => {
  const [payment, setPayment] = useState<CheckoutPayment[]>([
    {
      code: "PD9482431924132",
      namePayment: "Thanh toán qua tiền mặt",
      image: "http://localhost:3000/images/png-clipart-money-cash-cash-coupon-material-miscellaneous-rectangle-thumbnail.png",
      status: false
    },
    {
      code: "PD9482400947682",
      namePayment: "Thanh toán qua mobile banking ",
      image: "https://danviet.mediacdn.vn/296231569849192448/2021/9/3/3-1630652318565911789967.jpg",
      status: false
    },
    {
      code: "PD9482430117462",
      namePayment: "Thanh toán qua momo ",
      image: "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1458245625/pwegh6kadcb37kuz0woj.png",
      status: false
    }
  ])
  const onCheckPayment = (code: string) => {
    if (code) {
      let paymentNew = [...payment]
      paymentNew.map(item => {
        if (item.code === code) {
          item.status = true
        }
        else {
          item.status = false
        }
      })
      setPayment(paymentNew)
    }
  }
  return (
    <>
      <h4 className="selectBuy__title">
        <i className="fa-solid fa-credit-card" /> Hình thức thanh toán
      </h4>
      <ul className="selectBuy__main">
        {
          payment.map(item => {
            return (
              <li onClick={() => onCheckPayment(item.code)} className="selectBuy__main___item" key={item.code}>
                <div className="inner">
                  <input
                    onChange={(e) => { }}
                    checked={item.status}
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <picture>
                    <img
                      src={item.image}
                      alt=""
                    />
                  </picture>
                  <span>{item.namePayment}</span>
                </div>
              </li>
            )
          })
        }
      </ul>
    </>
  );
};
export default CheckOutPayment;
