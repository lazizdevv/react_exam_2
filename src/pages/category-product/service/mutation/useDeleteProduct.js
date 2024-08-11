import { useMutation, useQueryClient } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useDeleteProduct = (id) => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: (data) =>
      request.delete(`/products/${id}`, data).then((res) => res.data),
    onSuccess: () => client.invalidateQueries(["get-data"]),
  });
};
