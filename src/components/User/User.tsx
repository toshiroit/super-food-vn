import { LayoutPropsArr } from "@/interfaces/layout";
import { UserChildrenProps } from "@/interfaces/user";
import { NextPage } from "next";
import { useState } from "react";

const User: NextPage<UserChildrenProps> = ({
  UserChildrenProps,
}: UserChildrenProps) => {
  const [isActive] = useState(1);
  const [sizeWindow] = useState(400);
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
          {sizeWindow > 654 ? (
            <div className="user__content___flex">
              <div className="user__content___flex____left">
                {UserChildrenProps.menuUser}
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
              {isActive === 0 ? (
                <div className="user__content___flex">
                  <div
                    id="userMenuLeftIdx"
                    className="user__content___flex____left"
                  >
                    {UserChildrenProps.menuUser}
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
          )}
        </div>
      </div>
    </div>
  );
};
export default User;
