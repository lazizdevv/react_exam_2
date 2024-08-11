import { useMutation, useQueryClient } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useEditCategory = (id) => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: (data) => {
      request.put(`/category/${id}`, data).then((res) => res.data);
    },

    onSuccess: () => {
      client.invalidateQueries(["get-category"]);
    },
  });
};
