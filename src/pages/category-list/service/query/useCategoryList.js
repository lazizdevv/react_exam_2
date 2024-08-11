import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useCategoryList = (page = 1, limit = 100) => {
  return useQuery({
    queryKey: ["category-list", page, limit],
    queryFn: () =>
      request.get("/category", {
        params: {
          _page: page,
          _limit: limit,
        },
      }).then((res) => {
        return {
          category: res.data,
          totalCount: parseInt(res.headers["x-total-count"], 10),
        };
      }),
    keepPreviousData: true,
  });
};
