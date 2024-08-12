import React from "react";
import { Input } from "../../../../ui/input";
import { useForm } from "react-hook-form";
import { Button } from "../../../../ui/button";
import { loginSchema } from "../../../../validation/schema/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export const LoginCard = ({ submit }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  return (
    <>
      <div className="container">
        <div className="flex justify-center items-center h-screen">
          <form
            onSubmit={handleSubmit(submit)}
            className="flex flex-col gap-5 max-w-screen-sm w-full mx-5 p-5 lg:p-12 border rounded-lg shadow-lg shadow-primary bg-white"
          >
            <div className="pb-7 relative">
              <Input
                className={
                  "md:py-2 border-2 border-primary font-bold text-lg text-secondary"
                }
                placeholder="Email"
                register={register}
                name="email"
              />
              {errors.email && (
                <p className="text-red-600 text-sm absolute bottom-0 transition-all font-bold">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="pb-7 relative">
              <Input
                className={
                  "md:py-2 border-2 border-primary font-bold text-lg text-secondary"
                }
                type="password"
                placeholder="Password"
                register={register}
                name="password"
              />
              {errors.password && (
                <p className="text-red-600 text-sm absolute bottom-0 transition-all font-bold">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="flex justify-center mt-2">
              <Button
                type={"submit"}
                children={"Login"}
                className="w-96 py-3 hover:shadow-md hover:shadow-primary transition-all"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
