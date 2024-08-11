import React from "react";
import { LeftIcon } from "../../assets/svg/LeftIcon";
import { RightIcon } from "../../assets/svg/RightIcon";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="flex justify-center items-center">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-8 h-8 flex justify-center items-center mx-2 border-2 cursor-pointer bg-[#F7F7FF] rounded-md shadow-md shadow-primary"
      >
        {<LeftIcon />}
      </button>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-8 h-8 flex justify-center items-center mx-2 transition-all border border-primary font-semibold text-base  rounded-md ${
            currentPage === page
              ? "bg-primary shadow-md shadow-primary text-white"
              : "bg-[#F7F7FF] text-[#60607A] border-gray-400"
          }`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-8 h-8 flex justify-center items-center mx-2 border-2 cursor-pointer bg-[#F7F7FF] rounded-md shadow-md shadow-primary"
      >
        {<RightIcon />}
      </button>
    </div>
  );
};

export default Pagination;
