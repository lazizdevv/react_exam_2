import React, { useState } from "react";
import { useCategoryList } from "./service/query/useCategoryList";
import { Link } from "react-router-dom";
import { Button } from "../../ui/button";
import { CategoryCard } from "./components/category-card";
import { Search } from "../../components/search/search";
import Pagination from "../../components/pagination/pagination";

export const CategotyList = ({ itemsPerPage = 3 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data } = useCategoryList(currentPage, itemsPerPage);

  const { category = [], totalCount = 0 } = data || {}; // Fallback uchun bo'sh array va nol qiymatlar

  const totalPages = Math.ceil(totalCount / itemsPerPage);

  return (
    <div className="flex flex-col gap-3 relative h-full">
      <Link
        className="w-[154px] mx-auto absolute bottom-0 left-0"
        to={"/create-category"}
      >
        <Button variant="success" className="w-full">
          Create Category
        </Button>
      </Link>
      <div className="flex flex-col gap-6 h-[90%] p-6 rounded-lg relative border-2 shadow-lg bg-white">
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
