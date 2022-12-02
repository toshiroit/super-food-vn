import { district, province, village } from "@/config/provinces";
import {
  selectAddressSliceDataAddAddress,
  selectAddressSliceDataAddressDetail,
  selectAddressSliceDataUpdateAddress,
} from "@/redux/features/address/address-selects";
import {
  addAddressByUser,
  getAddressByUser,
  getAddressDetailUserByCode,
  getAllProvinces,
  updateAddressUserByCode,
} from "@/redux/features/address/address-thunks";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";
import { validationAddAddress } from "@/schema/addressSchema";
import {
  AddRessItemIProps,
  DataAddress,
  ItemAddressShow,
  Province,
  City,
  Village,
} from "@/types/address/address";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import { ChangeEvent, useEffect, useState } from "react";
import CompletionPass from "@/components/Completion/ComletionPass";
import CompletionEmail from "@/components/Completion/CompletionEmail";
import { useAuthContext } from "src/contexts/Auth/AuthContext";
import CompletionPhone from "@/components/Completion/CompletionPhone";
import { slug } from "@/lib/slug";
const UserAddressDetail: React.FC<AddRessItemIProps> = ({ item }) => {
  const dispatch = useAppDispatch();
  const dataAddressRdx = useAppSelector(selectAddressSliceDataAddAddress);
  const dataUpdateAddressRdx = useAppSelector(
    selectAddressSliceDataUpdateAddress
  );
  const dataAddressDetail = useAppSelector(selectAddressSliceDataAddressDetail);
  const router = useRouter();
  const dataCheckPhone = false;
  const { data } = useAuthContext();

  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const [isCheckPhone, setIsCheckPhone] = useState<boolean>(false);
  const [isSubmitEdit, setIsSubmitEdit] = useState<boolean>(false);
  const [dataAddress, setDataAddress] = useState<ItemAddressShow>({
    code_address: "",
    full_name: "",
    detail_address: "",
    phone: "",
    city: "",
    status: false,
    email: "",
    street: "",
    village: "",
    district: "",
  });
  const formik = useFormik({
    initialValues: dataAddress,
    validationSchema: validationAddAddress,
    onSubmit(values, formikHelpers) {
      dispatch(addAddressByUser({ title: "", type: "add", value: values }));
    },
  });
  const [awDataAddress, setAwDataAddress] = useState<DataAddress>({
    city: {
      value: "66",
      data: [],
    },
    province: {
      value: "-1",
      data: [],
    },
    village: {
      value: "-1",
      data: [],
    },
  });
  const onChangeDataAddress = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    if (e.target.name === "city") {
      const data = province.filter((item) => item.code === e.target.value);
      setAwDataAddress({
        ...awDataAddress,
        city: {
          ...awDataAddress.city,
          value: e.target.value,
        },
        village: {
          ...awDataAddress.village,
          value: "-1",
        },
      });
      formik.setFieldValue("city", data[0]?.name);
    } else if (e.target.name === "district") {
      const data = district.filter((item) => item.code === e.target.value);
      setAwDataAddress({
        ...awDataAddress,
        village: {
          ...awDataAddress.village,
          value: e.target.value,
        },
      });
      formik.setFieldValue("district", data[0]?.name);
    } else if (e.target.name === "village") {
      const data = village.filter((item) => item.code === e.target.value);
      setDataAddress({
        ...dataAddress,
        village: e.target.value,
      });

      formik.setFieldValue("village", data[0]?.name);
    } else {
      setDataAddress({
        ...dataAddress,
        [e.target.name]: e.target.value,
      });
    }
  };
  const onButtonAddress = (type: "edit" | "add") => {
    if (type == "add") {
      setIsSubmit(true);
      if (data.phone && data.phone.trim() === formik.values.phone.trim()) {
        formik.handleSubmit();
        setIsCheckPhone(false);
      } else {
        setIsCheckPhone(true);
      }
    } else if (type === "edit") {
      setIsSubmitEdit(true);
      dispatch(updateAddressUserByCode(formik.values));
    } else {
    }
  };
  useEffect(() => {
    let arrProvince: Province[] = [];
    let arrDistrict: City[] = [];
    let arrVillage: Village[] = [];
    for (let i = 0; i < province.length; i++) {
      if (province[i].code === "66") {
        let objProvince: Province = {
          code: province[i].code,
          name: province[i].name,
          name_with_type: province[i].name_with_type,
          slug: province[i].slug,
          type: province[i].type,
        };
        arrProvince.push(objProvince);
      }
    }
    for (let i = 0; i < district.length; i++) {
      if (awDataAddress.city.value === district[i].parent_code) {
        let objDistrict: City = {
          code: district[i].code,
          name: district[i].name,
          name_with_type: district[i].name_with_type,
          path: district[i].path,
          type: province[i]?.type,
          parent_code: district[i].parent_code,
        };
        arrDistrict.push(objDistrict);
      }
    }
    for (let i = 0; i < village.length; i++) {
      if (awDataAddress.village.value === village[i].parent_code) {
        let objVillage: Village = {
          code: village[i].code,
          name: village[i].name,
          name_with_type: village[i].name_with_type,
          path: village[i].path,
          type: village[i]?.type,
          parent_code: village[i].parent_code,
          path_with_type: village[i].path_with_type,
        };
        arrVillage.push(objVillage);
      }
    }
    setAwDataAddress({
      ...awDataAddress,
      province: {
        ...awDataAddress.province,
        data: arrProvince,
      },
      city: {
        ...awDataAddress.city,
        data: arrDistrict,
      },
      village: {
        ...awDataAddress.village,
        data: arrVillage,
      },
    });
    //eslint-disable-next-line
  }, [
    awDataAddress.city.value,
    awDataAddress.province.value,
    awDataAddress.village.value,
  ]);
  const onSelectAddress = (e: ChangeEvent<HTMLSelectElement>) => {};
  useEffect(() => {
    if (isSubmit && !dataAddressRdx.loading && dataAddressRdx.message) {
      dispatch(getAddressByUser());
      router.push("/user/address");
    }
    //eslint-disable-next-line
  }, [dataAddressRdx.loading, dataAddressRdx.message, isSubmit]);

  useEffect(() => {
    if (item.type === "edit" && router.query.code) {
      const code_address = router.query.code;
      dispatch(
        getAddressDetailUserByCode({
          code_address: (code_address as string) || "",
        })
      );
    }
    //eslint-disable-next-line
  }, [item.type]);
  useEffect(() => {
    if (!dataAddressDetail.loading && item.type === "edit") {
      if (dataAddressDetail.data) {
        formik.setValues({
          ...formik.values,
          full_name: dataAddressDetail.data.full_name,
          city: dataAddressDetail.data.city,
          phone: dataAddressDetail.data.phone,
          email: dataAddressDetail.data.email,
          street: dataAddressDetail.data.street,
          village: dataAddressDetail.data.village,
          district: dataAddressDetail.data.district,
          detail_address: dataAddressDetail.data.detail_address,
          code_address: dataAddressDetail.data.code_address,
          status: dataAddressDetail.data.status,
        });
      }
    }
    //eslint-disable-next-line
  }, [dataAddressDetail.loading, item.type]);

  useEffect(() => {
    if (
      !dataUpdateAddressRdx.loading &&
      isSubmitEdit &&
      dataAddressDetail.data
    ) {
      dispatch(
        getAddressDetailUserByCode({
          code_address: dataAddressDetail.data.code_address,
        })
      );
      router.push("/user/address");
    }
    //eslint-disable-next-line
  }, [dataUpdateAddressRdx.loading, isSubmitEdit]);
  return (
    <div className="content">
      {isCheckPhone ? (
        <CompletionPhone
          phone={formik.values.phone}
          title="Xác nhận số điện thoại "
          back={() => setIsCheckPhone(false)}
        />
      ) : (
        <>
          <div className="title">
            <h4>
              <i className="fa-solid fa-location-dot fa-size" /> {item.title}
            </h4>
            <i id="showMenuUserIdx" className="fa-solid fa-bars" />
          </div>
          <div className="content__address">
            <div className="content__address___main">
              <div className="content__address___main____csItem">
                <label htmlFor="">
                  <i className="fa-solid fa-signature fa-size" /> Họ và tên
                </label>
                <input
                  onChange={formik.handleChange}
                  type="text"
                  value={formik.values.full_name}
                  name="full_name"
                  id=""
                />
                <p
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    color: "#F33030",
                    marginTop: "5px",
                  }}
                >
                  {formik.touched.full_name && formik.errors.full_name}
                </p>
              </div>
              <div className="content__address___main____csItem">
                <label htmlFor="">
                  <i className="fa-solid fa-phone fa-size" />
                  Số điện thoại
                </label>
                <input
                  onChange={formik.handleChange}
                  type="text"
                  value={formik.values.phone}
                  name="phone"
                  id=""
                />
                <p
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    color: "#F33030",
                    marginTop: "5px",
                  }}
                >
                  {formik.touched.phone && formik.errors.phone}
                </p>
              </div>
              <div className="content__address___main____csItem">
                <label htmlFor="">
                  <i className="fa-solid fa-at fa-size" /> Email
                </label>
                <input
                  onChange={formik.handleChange}
                  type="text"
                  value={formik.values.email}
                  name="email"
                  id=""
                />
                <p
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    color: "#F33030",
                    marginTop: "5px",
                  }}
                >
                  {formik.touched.email && formik.errors.email}
                </p>
              </div>
              <div className="content__address___main____csItem">
                <label htmlFor="">
                  <i className="fa-solid fa-location-arrow fa-size" />
                  Số nhà / Đường
                </label>
                <input
                  onChange={formik.handleChange}
                  type="text"
                  value={formik.values.street}
                  name="street"
                  id=""
                />
                <p
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    color: "#F33030",
                    marginTop: "5px",
                  }}
                >
                  {formik.touched.street && formik.errors.street}
                </p>
              </div>
              <div className="content__address___main____csItem">
                <label htmlFor="">
                  <i className="fa-solid fa-location-arrow fa-size" />
                  Tỉnh / Thành phố
                </label>
                <select name="city" onChange={onChangeDataAddress}>
                  <option value="">Chọn </option>
                  {awDataAddress.province.data.map((item) => {
                    return (
                      <option key={item.code} value={item.code}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>
                <p
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    color: "#F33030",
                    marginTop: "5px",
                  }}
                >
                  {formik.touched.city && formik.errors.city}
                </p>
              </div>
              <div className="content__address___main____csItem">
                <label htmlFor="">
                  <i className="fa-solid fa-location-arrow fa-size" />
                  Quận / Huyện
                </label>
                <select name="district" id="" onChange={onChangeDataAddress}>
                  <option value="">Chọn </option>
                  {awDataAddress.city.data.map((item) => {
                    return (
                      <option key={item.code} value={item.code}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>
                <p
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    color: "#F33030",
                    marginTop: "5px",
                  }}
                >
                  {formik.touched.district && formik.errors.district}
                </p>
              </div>
              <div className="content__address___main____csItem">
                <label htmlFor="">
                  <i className="fa-solid fa-location-arrow fa-size" />
                  Xã / Phường
                </label>
                <select name="village" onChange={onChangeDataAddress}>
                  <option value="">Chọn </option>
                  {awDataAddress.village.data.map((item) => {
                    return (
                      <option key={item.code} value={item.code}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>
                <p
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    color: "#F33030",
                    marginTop: "5px",
                  }}
                >
                  {formik.touched.village && formik.errors.village}
                </p>
              </div>

              <div className="content__address___main____csItemFw">
                <label htmlFor="">
                  <i className="fa-solid fa-location-dot fa-size" />
                  Địa chỉ cụ thể
                </label>
                <textarea
                  onChange={formik.handleChange}
                  name="detail_address"
                  id=""
                  value={formik.values.detail_address}
                />
                <p
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    color: "#F33030",
                    marginTop: "5px",
                  }}
                >
                  {formik.touched.detail_address &&
                    formik.errors.detail_address}
                </p>
              </div>
              <div
                className="content__address___main____csItemFw"
                style={{ textAlign: "end", display: "flex" }}
              >
                <label htmlFor="">
                  <i className="fa-solid fa-location-dot fa-size" />
                  Đặt làm địa chỉ mặc định
                </label>
                <input
                  onChange={formik.handleChange}
                  style={{ marginLeft: "5px" }}
                  type="checkbox"
                  checked={formik.values.status}
                  name="status"
                  id=""
                />
              </div>
              <p
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  color: "#F33030",
                  marginTop: "5px",
                }}
              >
                {!dataAddressRdx.message && dataAddressRdx.error}
              </p>
              <div className="content__address___main____btn">
                <button
                  disabled={dataAddressRdx.loading}
                  onClick={() => onButtonAddress(item.type)}
                >
                  <i className="fa-solid fa-pencil fa-size" />
                  {dataAddressRdx.loading ? (
                    <>Đang xử lí</>
                  ) : (
                    <>
                      {" "}
                      {item.type === "add" ? "Thêm địa chỉ mới" : "Sửa địa chỉ"}
                    </>
                  )}
                </button>
              </div>
            </div>
            <div className="content__address___not">
              <div className="title">
                <h4>
                  <i className="fa-solid fa-triangle-exclamation" /> Lưu ý
                </h4>
              </div>
              <ul className="main">
                <li className="main__item">
                  <p>
                    <b>1:</b>Địa chi của bạn là đia chỉ giao hàng của bạn , Địa
                    chỉ giao hàng phải đúng với địa chỉ của bạn đang ở đề giao
                    đúng nơi bạn ở
                  </p>
                </li>
                <li className="main__item">
                  <p>
                    <b>2:</b>1 tài khoản chi được hỗ trợ tối đa 3 địa chỉ . 1
                    địa chỉ chính , 2 địa chỉ phụ
                  </p>
                </li>
                <li className="main__item">
                  <p>
                    <b>3:</b> Việc cung cấp địa chỉ ảo hoặc có tình sẽ bị kiểm
                    tra tài khoản và khóa vĩnh viễn nếu vi phạm
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default UserAddressDetail;
