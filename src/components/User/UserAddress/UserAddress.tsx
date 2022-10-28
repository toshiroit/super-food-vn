import { selectAddressSliceData, selectAddressSliceLoading } from "@/redux/features/address/address-selects";
import { getAddressByUser } from "@/redux/features/address/address-thunks";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import Link from "next/link";
import { useEffect, useState } from "react";
import UserAddressItem from "./UserAddressItem";

const UserAddress = () => {

  const dispatch = useAppDispatch()
  const dataAddress = useAppSelector(selectAddressSliceData)
  const loadingAddress = useAppSelector(selectAddressSliceLoading)
  useEffect(() => {
    dispatch(getAddressByUser())
  }, [dispatch])
  return (
    <div className="content">
      <div className="title">
        <h4>
          <i className="fa-solid fa-location-dot fa-size" /> Quản lí địa chỉ
        </h4>
        <Link href={"/user"}>
          <a>
            <i id="showMenuUserIdx" className="fa-solid fa-bars" />
          </a>
        </Link>
      </div>
      <div className="content__address">
        <ul className="content__address___main">
          {console.log(dataAddress)}
          {
            loadingAddress ? <h1> Dang tai</h1> :
              dataAddress && dataAddress.data.map(item => {
                return (
                  <UserAddressItem

                    itemAddress={item}
                    key={item.code_address}
                  />
                )
              })
          }

          {/* {userAddressArr &&
            userAddressArr.address.map((item: any) => {
              return (
                <UserAddressItem active={true} value={item} key={item.code} />
              );
            })} */}
        </ul>
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
export default UserAddress;
