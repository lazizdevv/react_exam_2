import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "../../../../ui/input";
import { Button } from "../../../../ui/button";
import { PlusIcon } from "../../../../assets/svg/PlusIcon";

export const CreateForm = ({
  submit,
  categeory,
  categeoryId,
  name,
  price,
  img,
}) => {
  const { handleSubmit, register } = useForm({
    defaultValues: { name, price, img, categeoryId, categeory },
  });

  console.log(categeory);

  return (
    <>
      <div className="flex justify-center mt-10">
        <form
          className="flex flex-col gap-5 lg:gap-10 border bg-white max-w-screen-md w-full py-5 px-5 lg:py-10 lg:px-10 rounded-lg shadow-lg shadow-primary"
          onSubmit={handleSubmit(submit)}
        >
          <select
            className="w-full p-3 bg-primary cursor-pointer rounded-md shadow-md text-white shadow-primary"
            {...register("categoryId")}
          >
            {categeory?.map((item) => (
              <option className="font-bold" value={item.id} key={item.id}>
                {item.name}
              </option>
            ))}
          </select>

          <div className="">
            <Input
              register={register}
              name="name"
              placeholder="название продукта"
              className={
                "border font-bold text-base border-primary focus:border-blue-700 focus:shadow-lg focus:shadow-primary"
              }
            />
          </div>

          <div className="">
            <Input
              register={register}
              name="price"
              type="number"
              placeholder="цена продукта"
              className={
                "border font-bold text-base border-primary focus:border-blue-700 focus:shadow-lg focus:shadow-primary"
              }
            />
          </div>

          <div className="">
            <Input
              register={register}
              name="product-img"
              type="text"
              placeholder="URL изображения продукта"
              className={
                "border font-bold text-base border-primary focus:border-blue-700 focus:shadow-lg focus:shadow-primary"
              }
            />
          </div>

          <Button
            type={"submit"}
            startIcon={<PlusIcon />}
            children={"добавить продукт"}
            variant="success"
            className="lg:w-96 w-64 h-10 font-bold  mx-auto mt-5 flex items-center justify-center gap-2"
          />
        </form>
      </div>
    </>
  );
};
