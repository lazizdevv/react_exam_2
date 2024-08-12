import { useQuery } from "@tanstack/react-query";
import { request } from "../../config/request"; // API qo'ng'iroqlari uchun custom request util

export const useAdminProfile = (id) => {
  return useQuery({
    queryKey: ["user", id],
    queryFn: () => request.get(`/users/${id}`).then((res) => res.data),
  });
};
