import React from "react";
import { Input } from "../../../../ui/input";
import { useForm } from "react-hook-form";
import { Button } from "../../../../ui/button";

export const LoginCard = ({ submit }) => {
  const { handleSubmit, register } = useForm();
  return (
    <>
      <div className="">
        <div className="flex justify-center items-center h-screen">
          <form
            onSubmit={handleSubmit(submit)}
            className="flex flex-col gap-5 max-w-screen-sm w-full mx-5 p-5 lg:p-12 border rounded-lg shadow-lg shadow-primary bg-white"
          >
            <div className="">
              <Input
                className={"py-3 border-2 border-primary font-bold text-lg text-secondary"}
                placeholder="Email"
                register={register}
                name="email"
              />
            </div>
            <div className="">
              <Input
                className={"py-3 border-2 border-primary font-bold text-lg text-secondary"}
                type="password"
                placeholder="Password"
                register={register}
                name="password"
              />
            </div>

            <div className="flex justify-center my-5">
              <Button
                type={"submit"}
                children={"Login"}
                className="w-1/2 py-3 hover:shadow-md hover:shadow-primary transition-all"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
