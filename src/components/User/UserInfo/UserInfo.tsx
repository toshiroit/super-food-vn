import { formDateVN } from "@/lib/formatDate";
import { selectUserSliceDataUpdateW1 } from "@/redux/features/user/user-selects";
import { addInfoUser } from "@/redux/features/user/user-slice";
import { updateUserInfoW1 } from "@/redux/features/user/user-thunks";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import {
  ChangeInfoUser,
  UpdateUserW1Info,
  UserDate,
  UserInfoFull,
} from "@/types/user/user";
import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";
import { useAuthContext } from "src/contexts/Auth/AuthContext";

const UserInfo = () => {
  const { data } = useAuthContext();
  const dispatch = useAppDispatch();
  const dataUpdateW1Rx = useAppSelector(selectUserSliceDataUpdateW1);
  const month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const [settingUser, setSettingUser] = useState<ChangeInfoUser>({
    isChangeEmail: false,
    isChangePhone: false,
    isPasswordV1: false,
    isPasswordV2: false,
  });
  const [fullName, setFullName] = useState<string>(
    data && data.data.payload && data.data.payload.full_name
  );
  const [sex, setSex] = useState<boolean>(false);
  const [date, setDate] = useState<UserDate>({
    day: formDateVN(data && data.data && data.data[0].date_birth)
      .getDay()
      .toString(),
    month: formDateVN(data && data.data && data.data[0].date_birth)
      .getMonth()
      .toString(),
    five: formDateVN(data && data.data && data.data[0].date_birth)
      .getFullYear()
      .toString(),
  });
  const [dataUser, setDataUser] = useState<UserInfoFull | undefined>(
    data && data.data && data.data[0]
  );

  /* Formik validation form user info */
  const onChangeDate = (e: ChangeEvent<HTMLSelectElement>) => {
    setDate({
      ...date,
      [e.target.name]: e.target.value,
    });
  };
  const onCheckSex = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "female") {
      setSex(true);
    } else {
      setSex(false);
    }
  };
  const onChangeUser = (e: ChangeEvent<HTMLInputElement>) => {
    setDataUser({
      ...dataUser,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmitUser = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let newDataUser = { ...dataUser };
    newDataUser.date = `${date?.day + "/" + date?.month + "/" + date?.five}`;
    newDataUser.sex = sex;
    const dataUpdate: UpdateUserW1Info = {
      fullName: newDataUser.full_name || "",
      date: "2022-10-20 00:00:00",
      sex: newDataUser.sex,
    };
    dispatch(updateUserInfoW1(dataUpdate));
    //dispatch(addInfoUser(newDataUser));
  };
  const onChangeSetting = (
    nameSetting: "phone" | "email" | "passv1" | "passv2"
  ) => {
    if (nameSetting === "phone") {
      setSettingUser({
        ...settingUser,
        isChangePhone: !settingUser.isChangePhone,
      });
    }
    if (nameSetting === "email") {
      setSettingUser({
        ...settingUser,
        isChangeEmail: !settingUser.isChangeEmail,
      });
    }
    if (nameSetting === "passv1") {
      setSettingUser({
        ...settingUser,
        isPasswordV1: !settingUser.isPasswordV1,
      });
    }
    if (nameSetting === "passv2") {
      setSettingUser({
        ...settingUser,
        isPasswordV2: !settingUser.isPasswordV2,
      });
    }
  };
  const onChangeUpdate = () => {};
  return (
    <div className="content">
      <div className="title">
        {console.log(dataUpdateW1Rx)}
        <h4>Thông tin tài khoản</h4>
        <Link href={"/user"}>
          <a>
            <i id="showMenuUserIdx" className="fa-solid fa-bars" />
          </a>
        </Link>
      </div>
      <div className="wp">
        <>
          <div className="avatar inline">
            <picture>
              <img src="/images/avatar_nam.jpg" alt="" />
            </picture>
            <i className="fa-solid fa-pen fa-size" />
          </div>
          <ul className="infoUser inline">
            <form onSubmit={onSubmitUser}>
              <li className="infoUser__item">
                <label htmlFor="">
                  <i className="fa-solid fa-signature fa-size" />
                  Tên người dùng
                </label>
                <input
                  type="text"
                  name="full_name"
                  onChange={onChangeUser}
                  value={dataUser?.full_name}
                  placeholder="Thêm tên người dùng "
                />
              </li>
              <li className="infoUser__item">
                <label htmlFor="">
                  <i className="fa-solid fa-calendar-days fa-size" />
                  Ngày sinh
                </label>
                <div className="date">
                  <select
                    name="day"
                    id=""
                    onChange={onChangeDate}
                    defaultValue={
                      data &&
                      formDateVN(data.data && data.data[0].date_birth).getDay()
                    }
                  >
                    <option value={-1}>Ngày</option>
                    <option value={1}>1</option> <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                    <option value={11}>11</option>
                    <option value={12}>12</option>
                  </select>
                  <select
                    name="month"
                    onChange={onChangeDate}
                    id=""
                    defaultValue={
                      data &&
                      month[
                        formDateVN(
                          data.data && data.data[0].date_birth
                        ).getMonth()
                      ]
                    }
                  >
                    <>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={7}>7</option>
                      <option value={8}>8</option>
                      <option value={9}>9</option>
                      <option value={10}>10</option>
                      <option value={11}>11</option>
                      <option value={12}>12</option>
                      <option value={13}>13</option>
                      <option value={14}>14</option>
                      <option value={15}>15</option>
                      <option value={16}>16</option>
                      <option value={17}>17</option>
                      <option value={18}>18</option>
                      <option value={19}>19</option>
                      <option value={20}>20</option>
                      <option value={21}>21</option>
                      <option value={22}>22</option>
                      <option value={23}>23</option>
                      <option value={24}>24</option>
                      <option value={25}>25</option>
                      <option value={26}>26</option>
                      <option value={27}>27</option>
                      <option value={28}>28</option>
                      <option value={29}>29</option>
                      <option value={30}>30</option>
                    </>
                  </select>
                  <select
                    name="five"
                    onChange={onChangeDate}
                    id=""
                    defaultValue={
                      data &&
                      formDateVN(
                        data.data && data.data[0].date_birth
                      ).getFullYear()
                    }
                  >
                    <option value={-1}>Năm</option>
                    <option value={1980}>1980</option>
                    <option value={1981}>1981</option>
                    <option value={1982}>1982</option>
                    <option value={1983}>1983</option>
                    <option value={1984}>1984</option>
                    <option value={1985}>1985</option>
                    <option value={1986}>1986</option>
                    <option value={1987}>1987</option>
                    <option value={1988}>1988</option>
                    <option value={1989}>1989</option>
                    <option value={1990}>1990</option>
                    <option value={1991}>1991</option>
                    <option value={1992}>1992</option>
                    <option value={1993}>1993</option>
                    <option value={1994}>1994</option>
                    <option value={1995}>1995</option>
                    <option value={1996}>1996</option>
                    <option value={1997}>1997</option>
                    <option value={1998}>1998</option>
                    <option value={1999}>1999</option>
                    <option value={2000}>2000</option>
                    <option value={2001}>2001</option>
                    <option value={2002}>2002</option>
                    <option value={2003}>2003</option>
                    <option value={2004}>2004</option>
                    <option value={2005}>2005</option>
                    <option value={2006}>2006</option>
                    <option value={2007}>2007</option>
                    <option value={2008}>2008</option>
                    <option value={2009}>2009</option>
                    <option value={2010}>2010</option>
                    <option value={2011}>2011</option>
                    <option value={2012}>2012</option>
                    <option value={2013}>2013</option>
                    <option value={2014}>2014</option>
                    <option value={2015}>2015</option>
                    <option value={2016}>2016</option>
                    <option value={2017}>2017</option>
                    <option value={2018}>2018</option>
                    <option value={2019}>2019</option>
                    <option value={2020}>2020</option>
                    <option value={2021}>2021</option>
                    <option value={2022}>2022</option>
                  </select>
                </div>
              </li>
              <li className="infoUser__item">
                <label htmlFor="">
                  <i className="fa-solid fa-genderless fa-size" />
                  Giới tính
                </label>
                <div className="checkSex">
                  <div className="checkSex__item">
                    <input
                      type="radio"
                      name="female"
                      onChange={onCheckSex}
                      defaultChecked={
                        data && data.data && data.data[0].sex ? true : false
                      }
                      checked={sex ? true : false}
                    />
                    <span>Nam </span>
                  </div>
                  <div className="checkSex__item">
                    <input
                      type="radio"
                      name="male"
                      onChange={onCheckSex}
                      defaultChecked={
                        data && data.data && data.data[0].sex ? false : true
                      }
                      checked={sex ? false : true}
                    />
                    <span>Nữ </span>
                  </div>
                </div>
              </li>
              <li className="infoUser__item">
                <div className="qt">
                  <label htmlFor="">
                    <i className="fa-solid fa-earth-africa fa-size" />
                    Địa điểm
                  </label>
                  <select
                    name="address"
                    style={{ maxWidth: "100%", width: "100%" }}
                  >
                    <option value={-1}>Chọn địa điểm </option>
                    {/* {Province.map((item) => {
                      return (
                        <option key={item.code} value={item.code}>
                          {item.name}
                        </option>
                      );
                    })} */}
                  </select>
                </div>
              </li>
              <div className="save">
                <button type="submit">
                  <>
                    <i className="fa-solid fa-floppy-disk fa-size" />
                    {dataUpdateW1Rx.loading ? "Đang lưu " : "Lưu thông tin"}
                  </>
                </button>
              </div>
            </form>
          </ul>
        </>
        <ul className="infoUser inline">
          <div className="bow">
            <span className="textFxBow">Số điện thoại / Thư điện tử</span>
            <li className="infoUser__item">
              <label htmlFor="">
                <i className="fa-solid fa-square-envelope fa-size" />
                Địa chỉ thư điện tử
              </label>
              <div className="ipn">
                <input
                  disabled={settingUser.isChangeEmail ? true : false}
                  type="text"
                  onChange={onChangeUser}
                  name="email"
                />
                <button onClick={() => onChangeSetting("email")} type="button">
                  {settingUser.isChangeEmail ? "Thay đổi" : "Xác nhận "}
                </button>
              </div>
            </li>
            <li className="infoUser__item">
              <label htmlFor="">
                <i className="fa-solid fa-phone fa-size" /> Số điện thoại
              </label>
              <div className="ipn">
                <input
                  type="text"
                  onChange={onChangeUpdate}
                  disabled={settingUser.isChangePhone ? true : false}
                  defaultValue={data && data.data && data.data[0].phone.trim()}
                  name="phone"
                />
                <button onClick={() => onChangeSetting("phone")} type="button">
                  {settingUser.isChangeEmail ? "Thay đổi" : "Xác nhận "}
                </button>
              </div>
            </li>
          </div>
          <div className="bow">
            <span className="textFxBow">Bảo mật / Bảo mật cấp 2</span>
            <li className="infoUser__item">
              <label htmlFor="">
                <i className="fa-solid fa-lock fa-size" />
                Mật khẩu cấp 1
              </label>
              <div className="ipn">
                <input
                  disabled={settingUser.isPasswordV1 ? true : false}
                  type="password"
                  defaultValue="##########"
                  onChange={onChangeUser}
                />
                <button onClick={() => onChangeSetting("passv1")} type="button">
                  {settingUser.isChangeEmail ? "Thay đổi" : "Xác nhận "}
                </button>
              </div>
            </li>
            <li className="infoUser__item">
              <label htmlFor="">
                <i className="fa-solid fa-lock fa-size" />
                Mật khẩu cấp 2
              </label>
              <div className="ipn">
                <input
                  disabled={settingUser.isPasswordV2 ? true : false}
                  type="password"
                  defaultValue="##########"
                  onChange={onChangeUser}
                />
                <button onClick={() => onChangeSetting("passv2")} type="button">
                  {settingUser.isChangeEmail ? "Thay đổi" : "Xác nhận "}
                </button>
              </div>
            </li>
          </div>
          <div className="bow">
            <span className="textFxBow">Liên kết mạng xã hội </span>
            <li className="infoUser__item">
              <div className="ipn mxh">
                <h4 className="lkmxh face">
                  <i className="fa-brands fa-facebook fa-size" />
                  Facebook
                </h4>
                <button type="button">Cập nhât</button>
              </div>
            </li>
            <li className="infoUser__item">
              <div className="ipn mxh">
                <h4 className="lkmxh zalo">
                  <i className="fa-solid fa-comment fa-size" />
                  Zalo
                </h4>
                <button type="button">Cập nhât</button>
              </div>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};
export default UserInfo;
