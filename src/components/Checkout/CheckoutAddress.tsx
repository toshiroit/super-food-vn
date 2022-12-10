import { selectAddressSliceDataAddress } from "@/redux/features/address/address-selects";
import { useAppSelector } from "@/redux/hooks/hooks";
import React from "react";

const CheckoutAddress = () => {
  const dataAddressUser = useAppSelector(selectAddressSliceDataAddress);
  const getAddressRoot = (dataAddress: any) => {
    let result: any[] = [];
    dataAddress.data?.map((item: any) => {
      console.log(item);
      if (item.status) {
        result.push(
          <>
            <div key={item.code_address} className="info">
              <div className="info__name">
                <span>{item.full_name}</span>
              </div>
              <i className="bd" />
              <div className="info__phone">
                <span>{item.phone.trim()}</span>
              </div>
            </div>
            <div className="address">
              <p>{item.street + "-" + item.village + "-" + item.city}</p>
            </div>
          </>
        );
      }
    });
    return result;
  };
  return (
    <>
      <div className="inline">
        <span>
          <i className="fa-solid fa-location-dot fa-size" />
          Giao tới
        </span>
        <span>
          <i className="fa-solid fa-file-invoice fa-size" />
          Thay đổi
        </span>
      </div>
      {getAddressRoot(dataAddressUser)}
    </>
  );
};
export default CheckoutAddress;
