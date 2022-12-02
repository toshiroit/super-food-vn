import User from "@/components/User/User";
import UserAddress from "@/components/User/UserAddress/UserAddress";
import UserAddressDetail from "@/components/User/UserAddress/UserAddressDetail";
import Head from "next/head";

const UserAddNewAddress = () => {
  return (
    <>
      <Head>
        <title>Thêm địa chỉ mới</title>
      </Head>
      <User
        UserChildrenProps={{
          contentUser: (
            <UserAddressDetail
              item={{ title: "Thêm địa chỉ mới ", type: "add" }}
            />
          ),
        }}
      />
    </>
  );
};
export default UserAddNewAddress;
