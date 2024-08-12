import React, { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { Loading } from "../../../../components/loading";
import { useCategoryList } from "../../../category-list/service/query/useCategoryList";
import { useGetData } from "../../../category-product/service/query/useGetData";
import { Pagination } from "../../../../components/pagination";

export const CategoryStatistics = () => {
  const queryClient = useQueryClient();

  const { data: products, isLoading: isProductsLoading } = useGetData({
    onSuccess: () => {
      queryClient.invalidateQueries("category-list");
      queryClient.invalidateQueries("product-list");
    },
  });

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const { data: categories, isLoading: isCategoriesLoading } = useCategoryList(
    currentPage,
    itemsPerPage
  );

  if (isCategoriesLoading || isProductsLoading) return <Loading />;
  const totalPages = Math.ceil(categories.totalCount / itemsPerPage);

  const categoriesWithProductCount = categories.category.map((category) => {
    const productCount = products.products.filter(
      (product) => product.categoryId == category.id
    ).length;
    return {
      ...category,
      productCount,
    };
  });

  return (
    <div className="relative h-full">
      <div className="p-3 lg:p-6 bg-white shadow-lg shadow-primary rounded-lg">
        <h2 className="text-xl font-bold text-secondary mb-6 border-b-2 pb-2">
          Статистика категорий и продуктов
        </h2>
        <ul className="">
          {categoriesWithProductCount.map((category) => (
            <li
              key={category.id}
              className="flex justify-between gap-5 items-center p-2 border-y rounded-sm text-secondary"
            >
              <div className="flex gap-5 items-center">
                <img
                  className="w-14 border border-dashed"
                  src={category.img}
                  alt="category-img"
                />
                <span className="text-lg font-bold">{category.name}</span>
              </div>
              <div className="text-lg flex items-center justify-center gap-2">
                <h2 className="font-bold text-base">продукты:</h2>
                <p className="font-semibold text-sm">{category.productCount}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="absolute -bottom-10 flex justify-center w-full">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};
