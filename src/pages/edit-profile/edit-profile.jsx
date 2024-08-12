import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../ui/input";
import { Button } from "../../ui/button";
import { useAdminProfile } from "../../hooks/admin/useAdminProfile";
import { useUpdateAdminProfile } from "../../hooks/admin/useUpdateAdminProfile";
import { Loading } from "../../components/loading";
import { profileSchema } from "../../validation/schema/profileSchema";

export const EditProfile = () => {
  const { id } = useParams();
  const { data: user, isLoading } = useAdminProfile(id);
  const { mutate } = useUpdateAdminProfile();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      email: "",
      name: "",
      img: "",
      password: "",
    },
  });

  // Formani yangilash uchun useEffect
  React.useEffect(() => {
    if (user) {
      reset({
        email: user.email,
        name: user.name,
        img: user.img,
        password: "",
      });
    }
  }, [user, reset]);

  const onSubmit = (data) => {
    mutate(
      { id, ...data },
      {
        onSuccess: () => {
          navigate("/login");
        },
      }
    );
  };

  if (isLoading) return <Loading />;

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <h2 className="text-2xl font-bold">Редактировать профиль</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-6 bg-white max-w-screen-sm w-full rounded-lg shadow-md shadow-primary"
      >
        <div className="relative pb-7">
          <Input
            className={
              "border font-bold text-base border-primary/90 focus:border-primary focus:shadow-md focus:shadow-primary"
            }
            name={"name"}
            register={register}
            placeholder="Name"
          />
          <p className="absolute text-sm bottom-0 text-red-600">
            {errors.name?.message}
          </p>
        </div>

        <div className="relative pb-7">
          <Input
            className={
              "border font-bold text-base border-primary/90 focus:border-primary focus:shadow-md focus:shadow-primary"
            }
            placeholder="Email"
            register={register}
            name={"email"}
          />
          <p className="absolute text-sm bottom-0 text-red-600">
            {errors.email?.message}
          </p>
        </div>

        <div className="relative pb-7">
          <Input
            className={
              "border font-bold text-sm border-primary/90 focus:border-primary focus:shadow-md focus:shadow-primary"
            }
            register={register}
            name={"img"}
            placeholder="Image Url"
          />
          <p className="absolute text-sm bottom-0 text-red-600">
            {errors.img?.message}
          </p>
        </div>

        <div className="relative pb-7">
          <Input
            className={
              "border font-bold text-base border-primary/90 focus:border-primary focus:shadow-md focus:shadow-primary"
            }
            name={"password"}
            register={register}
            placeholder="New Password"
            type="password"
          />
          <p className="absolute text-sm bottom-0 text-red-600">
            {errors.password?.message}
          </p>
        </div>

        <div className="flex justify-center mt-5">
          <Button
            className="w-96 hover:shadow-md hover:shadow-secondary/50"
            type="submit"
          >
            сохранить
          </Button>
        </div>
      </form>
    </div>
  );
};
