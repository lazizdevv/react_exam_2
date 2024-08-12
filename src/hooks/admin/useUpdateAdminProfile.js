import { useMutation, useQueryClient } from "@tanstack/react-query";
import { request } from "../../config/request"; // API qo'ng'iroqlari uchun custom request util

export const useUpdateAdminProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (updatedUser) =>
      request.patch(`/users/${updatedUser.id}`, updatedUser),
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries(["user", variables.id]);
    },
  });
};
