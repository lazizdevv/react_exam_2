import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Loading } from "../../components/loading";
import { useEditProduct } from "./service/mutation/useEditProduct";
import { useSingleData } from "./service/query/useSingleData";
import { CreateForm } from "../create-product/components/create-form";

export const EditProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading } = useSingleData(id);
  const { mutate } = useEditProduct(id);

  const submit = (value) => {
    mutate(value, {
      onSuccess: () => {
        navigate(-1);
        toast.success("товар успешно изменен!")
      },
    });
  };

  return (
    <>
      {isLoading ? (
        <Loading/>
      ) : (
        <CreateForm submit={submit} {...data} />
      )}
    </>
  );
};
