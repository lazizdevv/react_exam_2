import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useGetData = (id, page = 1, limit = 100) => {
  return useQuery({
    queryKey: ["product-list", id, page, limit],
    queryFn: () =>
      request
        .get("/products", {
          params: {
            categoryId: id,
            _page: page,
            _limit: limit,
          },
        })
        .then((res) => ({
          products: res.data,
          totalCount: parseInt(res.headers['x-total-count'], 10),
        })),
    keepPreviousData: true,
  });
};
