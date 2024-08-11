import React from "react";
import { Link, NavLink } from "react-router-dom";
import { LogoIcon } from "../../assets/svg/LogoIcon";
import { SettingsIcon } from "../../assets/svg/SettingsIcon";
import { GoodsIcon } from "../../assets/svg/GoodsIcon";
import { ProfileIcon } from "../../assets/svg/ProfileIcon";

export const Aside = () => {
    const links = [
        { to: '/', label: <LogoIcon/> },
        { to: '/category-list', label: <SettingsIcon/> },
        { to: '/profile', label: <ProfileIcon/> },
        { to: '/create-product', label: <GoodsIcon/> },
      ];
  return (
    <>
      <div className="lg:h-screen flex justify-center items-start py-5 lg:py-[30px] w-full lg:w-[90px]">
        <div className="flex lg:flex-col justify-center gap-4 lg:gap-5 font-bold text-white text-sm ">
        {links.map(({ to, label }) => (
            <div key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `w-[50px] h-[50px] flex justify-center items-center rounded-md hover:bg-[#6C6DE5] transition-all ${
                    isActive ? 'bg-[#6C6DE5] shadow-md' : 'bg-primary'
                  }`
                }
              >
                {label}
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
