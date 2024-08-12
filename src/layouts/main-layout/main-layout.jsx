import React from "react";
import { Outlet } from "react-router-dom";
import { Aside } from "../aside";
import { Breadcrumb } from "../../components/breadcrumb";
import { Button } from "../../ui/button";
import { LogOutIcon } from "../../assets/svg/LogOutIcon";

export const MainLayout = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row container p-0 relative">
        <aside className="bg-primary float-start z-10 ">
          <Aside />
        </aside>

        <div className="w-full flex-grow-1 relative">
          <header className="w-full shadow-md bg-white px-10 py-1 lg:py-4 lg:h-20">
            <div className="flex justify-between items-center">
              <Breadcrumb />
              <Button
              startIcon={<LogOutIcon/>}
                children={"Выйти"}
                className="bg-[#F7F7FF] font-bold h-10 w-28 flex items-center gap-3"
                variant="secondary"
              />
            </div>
          </header>
          <main className="px-5 lg:px-10 h-[587px] mt-10 relative pb-10">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};
