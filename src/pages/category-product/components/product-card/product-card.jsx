import React from "react";
import { Button } from "../../../../ui/button";
import { useNavigate } from "react-router-dom";
import { useDeleteProduct } from "../../service/mutation/useDeleteProduct";
import { toast } from "react-toastify";
import { DeleteIcon } from "../../../../assets/svg/DeleteIcon";
import { EditIcon } from "../../../../assets/svg/EditIcon";

export const ProductCard = ({ id, name, img, price }) => {
  const navigate = useNavigate();
  const { mutate } = useDeleteProduct(id);

  const deleteProduct = () => {
    mutate(id, {
      onSuccess: () => {
        toast.success("Товар(ы) был успешно удален");
      },
    });
  };
  return (
    <>
      <div className="flex items-center justify-center lg:justify-between p-6 shadow-md shadow-primary rounded-lg border-2 relative h-fit bg-white">
        <div className="flex flex-col lg:flex-row gap-5">
          <img
            className="w-[150px] h-fit border border-dashed"
            src={img}
            alt="img"
          />
          <div className="">
            <h2>{name}</h2>
            <strong>${price}</strong>
          </div>
        </div>
        <div className="flex items-center gap-5 absolute right-5 bottom-5">
          <Button
            onClick={deleteProduct}
            children={<DeleteIcon />}
            variant="special"
            className="w-8 h-8 flex flex-col justify-center items-center"
          />
          <Button
            onClick={() => navigate(`/edit-product/${id}`)}
            children={<EditIcon />}
            variant="special"
            className="w-8 h-8 flex flex-col justify-center items-center"
          />
        </div>
      </div>
    </>
  );
};
