import React, { useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { useSearch } from "../../service/query/useSearch";
import { CategoryCard } from "../../pages/category-list/components/category-card";
import { SearchIcon } from "../../assets/svg/SearchIcon";

export const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const debounceValue = useDebounce(inputValue);
  const { data } = useSearch(debounceValue);
  return (
    <>
      <div className="">
        <div className="flex items-center relative mb-5">
          <div className="absolute left-5">
            <SearchIcon />
          </div>
          <input
            className="w-64 rounded-lg h-10 focus:outline-primary pl-14 bg-special text-base font-bold"
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Поиск"
          />
        </div>
        {inputValue.length >= 3 && (
          <div className="absolute right-0 z-20 p-3 md:p-5 lg:w-[800px] border rounded-lg shadow-md shadow-primary bg-special max-w-screen-md">
            {data?.map((item) => (
              <CategoryCard key={item.id} {...item} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};
