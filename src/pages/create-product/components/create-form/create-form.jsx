import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "../../../../ui/input";
import { Button } from "../../../../ui/button";

export const CreateForm = ({ submit,categeory, categeoryId,name,price,img }) => {
  const { handleSubmit, register } = useForm({
    defaultValues:{name,price,img,categeoryId,categeory}
  });

  console.log(categeory);
  
  return (
    <>
      <div className="flex justify-center mt-10">
        <form
          className="flex flex-col gap-5 lg:gap-10 border max-w-screen-md w-full py-5 px-5 lg:py-10 lg:px-10 rounded-lg shadow-lg shadow-primary"
          onSubmit={handleSubmit(submit)}
        >
          <select
            className="w-full p-3 bg-primary cursor-pointer rounded-md shadow-md text-white shadow-primary"
            {...register("categoryId")}
          >
            {categeory?.map((item) => (
              <option
                className="font-bold"
                value={item.id}
                key={item.id}
              >
                {item.name}
              </option>
            ))}
          </select>

          <Input
            register={register}
            name="name"
            placeholder="Product Name"
            className={
              "border font-bold text-base border-primary focus:border-blue-700 focus:shadow-lg focus:shadow-primary"
            }
          />

          <Input
            register={register}
            name="price"
            type="number"
            placeholder="Product Price"
            className={
              "border font-bold text-base border-primary focus:border-blue-700 focus:shadow-lg focus:shadow-primary"
            }
          />

          <Input
            register={register}
            name="img"
            type="text"
            placeholder="Product Image"
            className={
              "border font-bold text-base border-primary focus:border-blue-700 focus:shadow-lg focus:shadow-primary"
            }
          />

          <Button
            type={"submit"}
            children={"Add Product"}
            variant="success"
            className="w-1/2 font-bold py-3 mx-auto mt-5"
          />
        </form>
      </div>
    </>
  );
};
