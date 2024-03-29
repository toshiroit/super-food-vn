import User from "@/components/User/User";
import UserAddressDetail from "@/components/User/UserAddress/UserAddressDetail";
import Head from "next/head";

const UserAddressDetailPage = () => {
  return (
    <>
      <Head>Thông tin địa chỉ #22222</Head>
      <User
        UserChildrenProps={{
          contentUser: (
            <UserAddressDetail
              item={{ title: "Thông tin địa chỉ #000000", type: "edit" }}
            />
          ),
        }}
      />
    </>
  );
};
export default UserAddressDetailPage;
