import { formDateVN } from "@/lib/formatDate";
import { randomLengthText } from "@/lib/random";
import { selectUserSliceDataUpdateW1 } from "@/redux/features/user/user-selects";
import { addInfoUser } from "@/redux/features/user/user-slice";
import { updateUserInfoW1 } from "@/redux/features/user/user-thunks";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import {
  ChangeInfoUser,
  UpdateUserW1Info,
  UserDataInfo,
  UserDate,
  UserInfoFull,
} from "@/types/user/user";
import Link from "next/link";
import {
  ChangeEvent,
  FormEvent,
  MouseEvent,
  MouseEventHandler,
  useEffect,
  useState,
} from "react";
import { useAuthContext } from "src/contexts/Auth/AuthContext";

const UserInfo = () => {
  const { data } = useAuthContext();
  const dispatch = useAppDispatch();
  const [dataUser, setDataUser] = useState<UserDataInfo>({
    box1: {
      avatar: "",
      avatar_file: null,
      full_name: "",
      address: "",
      date: {
        day: 1,
        month: 1,
        five: 1975,
      },
      sex: false,
    },
    box2: {
      email: "",
      phone: "",
    },
  });
  const dataUpdateW1Rx = useAppSelector(selectUserSliceDataUpdateW1);
  const onSubmitUser = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updateUserInfoW1(dataUser));
  };
  useEffect(() => {
    if (data) {
      console.log(data);
      const file_name_1 = `IMAGE_SUPER_FOOD-${randomLengthText(15)}`;
      fetch(data.avatar)
        .then(async (res) => {
          const blob = await res.blob();
          const file = new File([blob], file_name_1, { type: blob.type });
          setDataUser({
            box1: {
              avatar: data.avatar,
              avatar_file: file,
              full_name: data.full_name,
              sex: data.sex,
              date: {
                day: new Date(data.date_birth).getDay(),
                month: new Date(data.date_birth).getMonth(),
                five: new Date(data.date_birth).getFullYear(),
              },
              address: "124",
            },
            box2: {
              email: "",
              phone: data.phone,
            },
          });
        })
        .catch((err) => {
          setDataUser({
            box1: {
              avatar: data.avatar,
              avatar_file: null,
              full_name: data.full_name,
              sex: data.sex,
              date: {
                day: new Date(data.date_birth).getDay(),
                month: new Date(data.date_birth).getMonth(),
                five: new Date(data.date_birth).getFullYear(),
              },
              address: "124",
            },
            box2: {
              email: "",
              phone: data.phone,
            },
          });
        });
    }
    //eslint-disable-next-line
  }, [data]);
  const onSettingData = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    if (
      e.target.name === "day" ||
      e.target.name === "month" ||
      e.target.name === "five"
    ) {
      setDataUser({
        ...dataUser,
        box1: {
          ...dataUser.box1,
          date: {
            ...dataUser.box1.date,
            day:
              e.target.name === "day"
                ? Number(e.target.value)
                : dataUser.box1.date.day,
            month:
              e.target.name === "month"
                ? Number(e.target.value)
                : dataUser.box1.date.month,
            five:
              e.target.name === "five"
                ? Number(e.target.value)
                : dataUser.box1.date.five,
          },
        },
      });
    } else {
      setDataUser({
        ...dataUser,
        box1: {
          ...dataUser.box1,
          [e.target.name]: e.target.value,
        },
      });
    }
  };
  const onSetSex = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "female") {
      setDataUser({
        ...dataUser,
        box1: {
          ...dataUser.box1,
          sex: true,
        },
      });
    } else if (e.target.name === "male") {
      setDataUser({
        ...dataUser,
        box1: {
          ...dataUser.box1,
          sex: false,
        },
      });
    }
  };

  const onChangeAvatar = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files;
    if (file && file[0]) {
      const url_file_image = URL.createObjectURL(file[0]);
      setDataUser({
        ...dataUser,
        box1: {
          ...dataUser.box1,
          avatar: url_file_image,
          avatar_file: file[0],
        },
      });
    }
  };

  return (
    <div className="content">
      <div className="title">
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
              <img src={dataUser.box1.avatar || ""} alt="" />
            </picture>
            <i className="fa-solid fa-pen fa-size" />
          </div>
          <ul className="infoUser inline">
            <form onSubmit={onSubmitUser}>
              <li className="infoUser__item">
                <label htmlFor="">
                  <i className="fa-solid fa-signature fa-size" />
                  Ảnh đại diện
                </label>
                <input onChange={onChangeAvatar} type="file" name="avatar" />
              </li>
              <li className="infoUser__item">
                <label htmlFor="">
                  <i className="fa-solid fa-signature fa-size" />
                  Tên người dùng
                </label>
                <input
                  type="text"
                  name="full_name"
                  onChange={onSettingData}
                  defaultValue={dataUser.box1.full_name}
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
                    onChange={onSettingData}
                    value={dataUser.box1.date.day}
                  >
                    <option value={-1}>Ngày</option>
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
                  </select>
                  <select
                    name="month"
                    onChange={onSettingData}
                    id=""
                    value={dataUser.box1.date.month}
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
                    onChange={onSettingData}
                    id=""
                    value={dataUser.box1.date.five}
                  >
                    <option value={-1}>Năm</option>
                    <option value={1975}>1975</option>
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
                      onChange={onSetSex}
                      checked={dataUser.box1.sex}
                      type="radio"
                      name="female"
                    />
                    <span>Nam </span>
                  </div>
                  <div className="checkSex__item">
                    <input
                      onChange={onSetSex}
                      checked={dataUser.box1.sex ? false : true}
                      // defaultChecked={dataUser.box1.sex ? true : false}
                      type="radio"
                      name="male"
                    />
                    <span>Nữ </span>
                  </div>
                </div>
              </li>
              <div className="save">
                <button
                  disabled={dataUpdateW1Rx.loading ? true : false}
                  type="submit"
                >
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
                  type="text"
                  defaultChecked={data && data.email}
                  name="email"
                  disabled={true}
                />
              </div>
            </li>
            <li className="infoUser__item">
              <label htmlFor="">
                <i className="fa-solid fa-phone fa-size" /> Số điện thoại
              </label>
              <div className="ipn">
                <input
                  disabled={true}
                  type="text"
                  name="phone"
                  defaultValue={data && data?.phone.trim()}
                />
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
