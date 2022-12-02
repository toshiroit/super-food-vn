import LoadingSpinner from "@/components/Loading/LoadingSpinner";
import { selectAddressSliceDataAddress } from "@/redux/features/address/address-selects";
import { getAddressByUser } from "@/redux/features/address/address-thunks";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import UserAddressItem from "./UserAddressItem";

const UserAddress = () => {
  const dispatch = useAppDispatch();
  const dataAddress = useAppSelector(selectAddressSliceDataAddress);
  const router = useRouter();
  useEffect(() => {
    dispatch(getAddressByUser());
    //eslint-disable-next-line
  }, [router]);
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
          {dataAddress.loading ? (
            <LoadingSpinner css={{ textAlign: "center", width: "100%" }} />
          ) : dataAddress.data && dataAddress.data.length === 0 ? (
            <div
              style={{ padding: "50px", margin: "auto", textAlign: "center" }}
            >
              <h4
                style={{
                  fontWeight: 500,
                }}
              >
                Không có địa chỉ thanh toán nào
              </h4>
              <Link href={"address/add-new"}>
                <a>
                  <button
                    style={{
                      padding: "5px",
                      marginTop: "5px",
                      width: "170px",
                      borderRadius: "4px",
                      border: "1px solid #8d8989",
                      fontSize: "0.8rem",
                      cursor: "pointer",
                      fontWeight: 500,
                    }}
                  >
                    THÊM ĐỊA CHỈ MỚI
                  </button>
                </a>
              </Link>
            </div>
          ) : (
            <>
              {dataAddress.data &&
                dataAddress.data.map((item) => {
                  return (
                    <UserAddressItem
                      itemAddress={item}
                      key={item.code_address}
                    />
                  );
                })}
              {dataAddress.data && dataAddress.data.length < 6 ? (
                <li
                  className={`content__address___main____item `}
                  style={{
                    display: "flex",
                  }}
                >
                  <div
                    className="btn"
                    style={{ margin: "auto", border: "none" }}
                  >
                    <Link href={"address/add-new"}>
                      <a>
                        <button>
                          <i className="fa-solid fa-eye fa-size" />
                          Thêm mới
                        </button>
                      </a>
                    </Link>
                  </div>
                </li>
              ) : (
                ""
              )}
            </>
          )}
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
