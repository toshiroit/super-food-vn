import { LayoutPropsArr } from "@/interfaces/layout";
import { UserChildrenProps } from "@/interfaces/user";
import useWindowSize from "@/lib/windowSize";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import UserSlider from "./UserSlider/UserSlider";

const User: NextPage<UserChildrenProps> = ({
  UserChildrenProps,
}: UserChildrenProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const sizeWindow = useWindowSize().width;
  useEffect(() => {
    if (sizeWindow) {
      if (sizeWindow < 654) {
        if (document.getElementById("userMenuLeftIdx")) {
          const data = document.getElementById("userMenuLeftIdx");
          if (data) {
            data.style.width = "100%";
          }
        }
        if (document.getElementById("userMenuRightIdx")) {
          const data = document.getElementById("userMenuRightIdx");
          if (data) {
            data.style.width = "100%";
          }
        }
      } else {
        console.log("VO");
      }
    }
  }, [isActive, sizeWindow]);
  return (
    <div className="user">
      <div className="container">
        <div className="user__content breadcrum ">
          <div className="user__content___breadcrumb breadcrumb__content">
            <ul className="main">
              <li className="main__item">SuperFood</li>
              <li className="main__item">Tài khoản</li>
              <li className="main__item">Thông tin</li>
            </ul>
          </div>
          <div className="user__content___flex">
            <div className="user__content___flex____left">
              <UserSlider />
            </div>
            <div
              id="userMenuRightIdx"
              className="user__content___flex____right"
            >
              {UserChildrenProps.contentUser}
            </div>
          </div>
          {/* {sizeWindow > 654 ? (
            <div className="user__content___flex">
              <div className="user__content___flex____left">
                <UserSlider />
              </div>
              <div
                id="userMenuRightIdx"
                className="user__content___flex____right"
              >
                {UserChildrenProps.contentUser}
              </div>
            </div>
          ) : (
            <>
              {isActive ? (
                <div className="user__content___flex">
                  <div
                    id="userMenuLeftIdx"
                    className="user__content___flex____left"
                  >
                    <UserSlider />
                  </div>
                </div>
              ) : (
                <div className="user__content___flex">
                  <div
                    id="userMenuRightIdx"
                    className="user__content___flex____right"
                  >
                    {UserChildrenProps.contentUser}
                  </div>
                </div>
              )}
            </>
          )} */}
        </div>
      </div>
    </div>
  );
};
export default User;
