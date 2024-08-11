import { useQuery } from "@tanstack/react-query";
import React from "react";
import { request } from "../../config/request";

export const useSearch = (value) => {
  return useQuery({
    queryKey: ["search", value],
    queryFn: () =>
      request
        .get("/category", { params: { name_like: value } })
        .then((res) => res.data),
  });
};
