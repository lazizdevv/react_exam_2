import React from "react";
import { Outlet } from "react-router-dom";
import { Aside } from "../aside";
import { Breadcrumb } from "../../components/breadcrumb";
import { Button } from "../../ui/button";

export const MainLayout = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row container relative">
        <aside className="bg-primary float-start z-10 ">
          <Aside />
        </aside>

        <div className="w-full flex-grow-1 relative">
          <header className="w-full shadow-md bg-white  px-10 py-1 lg:py-4 lg:h-20">
            <div className="flex justify-between items-center">
              <Breadcrumb />
              <Button
                children={"Выйти"}
                className="bg-secondary/20 text-secondary h-10 w-28"
                variant="secondary"
              />
            </div>
          </header>
          <main className="px-5 lg:px-10 h-[587px] mt-10 relative">
            <Outlet />
          </main>

          <footer className="">
            <div className="container">
              <h1 className="text-end">© Anymarket 2024</h1>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};
