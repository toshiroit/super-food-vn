import { addPayment } from "@/redux/features/checkout/checkout-slice";
import { selectPaymentSliceData } from "@/redux/features/payment/payment-selects";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { CheckoutPayment } from "@/types/checkout/checkout";
import { useState } from "react";

const CheckOutPayment = () => {
  const dataPayment = useAppSelector(selectPaymentSliceData)
  const dispatch = useAppDispatch()
  const [payment, setPayment] = useState<string>()
  const onCheckPayment = (code: string) => {
    setPayment(code)
    if (code) {
      dispatch(addPayment({ code: code || '' }))
    }
  }
  return (
    <>
      <h4 className="selectBuy__title">
        <i className="fa-solid fa-credit-card" /> Hình thức thanh toán
      </h4>
      <ul className="selectBuy__main">
        {
          dataPayment.data && dataPayment.data.data.map((item: any) => {
            return (
              <li key={item.code_payment} onClick={() => onCheckPayment(item.code_payment)} className="selectBuy__main___item" >
                <div className="inner">
                  <input
                    onChange={() => { }}
                    checked={payment === item.code_payment ? true : false}
                    type="checkbox"
                    name=""
                    id=""
                  />
                  <picture>
                    <img
                      src={"http://localhost:3000/images/png-clipart-money-cash-cash-coupon-material-miscellaneous-rectangle-thumbnail.png"}
                      alt=""
                    />
                  </picture>
                  <span>{item.name_payment}</span>
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
