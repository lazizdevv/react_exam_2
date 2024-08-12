import { CreateForm } from "./components/create-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Loading } from "../../components/loading";
import { useCategoryList } from "../category-list/service/query/useCategoryList";
import { useCreateProduct } from "./service/mutation/useCreateProduct";

export const CreateProduct = () => {
  const { data, isLoading } = useCategoryList();
  const { mutate } = useCreateProduct();
  const navigate = useNavigate();

  const submit = (data) => {
    mutate(data, {
      onSuccess: () => {
        navigate(-1);
        toast.success("товар успешно добавлен!");
      },
    });
  };
  return (
    <>
      <div className="container">
        {isLoading ? (
          <Loading />
        ) : (
          <CreateForm categeory={data.category} submit={submit} />
        )}
      </div>
    </>
  );
};
