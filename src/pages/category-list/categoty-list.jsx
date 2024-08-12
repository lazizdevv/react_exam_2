import React, { useState } from "react";
import { useCategoryList } from "./service/query/useCategoryList";
import { Link } from "react-router-dom";
import { Button } from "../../ui/button";
import { CategoryCard } from "./components/category-card";
import { Search } from "../../components/search";
import { Pagination } from "../../components/pagination";

export const CategotyList = () => {

  const itemsPerPage = 3
  const [currentPage, setCurrentPage] = useState(1);
  const { data } = useCategoryList(currentPage, itemsPerPage);
  const { category = [], totalCount = 0 } = data || {};
  const totalPages = Math.ceil(totalCount / itemsPerPage);

  return (
    <div className="flex flex-col gap-3  h-full">
      <Link
        className="w-[154px] mx-auto absolute -bottom-5 left-10 z-30"
        to={"/create-category"}
      >
        <Button
          children={"создать категорию"}
          variant="success"
          className="lg:w-96 h-10"
        />
      </Link>
      <div className="flex flex-col gap-6  p-5 rounded-lg relative border-2 shadow-lg bg-white h-full">
        <div className="flex justify-end h-10">
          <Search />
        </div>

        <div className="h-full">
          {category.map((item) => (
            <CategoryCard key={item.id} {...item} />
          ))}
        </div>

        <div className="flex justify-end items-center">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    </div>
  );
};
