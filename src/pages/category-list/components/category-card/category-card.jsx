import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../ui/button";
import { useDeleteCategory } from "../../service/mutation/useDeleteCategory";
import { toast } from "react-toastify";
import { EditIcon } from "../../../../assets/svg/EditIcon";
import { DeleteIcon } from "../../../../assets/svg/DeleteIcon";

export const CategoryCard = ({ id, name, img }) => {
  const navigate = useNavigate();

  const { mutate } = useDeleteCategory(id);
  const deleteCategory = () => {
    mutate(id, {
      onSuccess: () => {
        toast.success("категория успешно удалена!");
      },
    });
  };
  return (
    <div className="flex items-center justify-between gap-10 flex-wrap p-4 border-y">
      <div className="flex items-center gap-5">
        <img className="w-20 border border-dashed" src={img} alt="img" />
        <h2 className="text-center font-bold text-lg">{name}</h2>
      </div>

      <div className="flex items-center gap-5">
        <Button
          children={"просмотреть продукты"}
          onClick={() => navigate(`/category-product/${id}`)}
          className="text-sm h-10 w-48"
        />

        <Button
          onClick={() => navigate(`/edit-category/${id}`)}
          children={<EditIcon />}
          variant="special"
          className="w-8 h-8 flex flex-col justify-center items-center"
        />

        <Button
          onClick={deleteCategory}
          children={<DeleteIcon />}
          variant="special"
          className="w-8 h-8 flex flex-col justify-center items-center"
        />
      </div>
    </div>
  );
};
