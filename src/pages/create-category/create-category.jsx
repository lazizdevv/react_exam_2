import React from "react";
import { CreateCategoryForm } from "./components/create-category-form";
import { useCreateCategory } from "../category-list/service/mutation/useCreateCategory";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Loading } from "../../components/loading";
import { useCategoryList } from "../category-list/service/query/useCategoryList";
import { useQueryClient } from "@tanstack/react-query";

export const CreateCategory = () => {
  const { mutate } = useCreateCategory();
  const navigate = useNavigate();
  const { data, isLoading } = useCategoryList();
  const queryClient = useQueryClient();
  console.log(data);
  


  const submit = (data) => {
    mutate(data, {
      onSuccess: () => {
        queryClient.invalidateQueries("category-list")
        queryClient.invalidateQueries("product-list")
        navigate(-1);
        toast.success("category muvaffaqiyatli qo'shildi!");
      },
    });
  };
  return (
    <>
      {isLoading ? (
        <Loading/>
      ) : (
        <CreateCategoryForm submit={submit} />
      )}
    </>
  );
};
