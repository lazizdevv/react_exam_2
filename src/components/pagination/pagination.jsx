import React from "react";
import { LeftIcon } from "../../assets/svg/LeftIcon";
import { RightIcon } from "../../assets/svg/RightIcon";

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="flex justify-center items-center">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-8 h-8 flex justify-center items-center mx-2 hover:bg-secondary/10 cursor-pointer bg-special rounded-md shadow-md shadow-primary"
      >
        {<LeftIcon />}
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-8 h-8 flex justify-center items-center mx-2 transition-all border border-primary font-semibold text-base rounded-md ${
            currentPage === page
              ? "bg-primary shadow-md shadow-primary text-white"
              : "bg-special text-secondary hover:bg-primary/50 hover:text-white"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-8 h-8 flex justify-center items-center mx-2 hover:bg-secondary/10 cursor-pointer bg-special rounded-md shadow-md shadow-primary"
      >
        {<RightIcon />}
      </button>
    </div>
  );
};
