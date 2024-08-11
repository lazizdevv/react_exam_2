import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductCard } from "./components/product-card";
import { useGetData } from "./service/query/useGetData";
import { Button } from "../../ui/button";
import { Pagination } from "../../components/pagination";
import { Loading } from "../../components/loading";

export const CategoryProduct = () => {
  const { id } = useParams();
  const [currentPage, setCurrentPage] = useState(1);

  const [itemsPerPage, setItemsPerPage] = useState(6);

  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      if (width < 1024) {
        setItemsPerPage(4);
      } else {
        setItemsPerPage(6);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);

    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const { data, isLoading } = useGetData(id, currentPage, itemsPerPage);

  if (isLoading) return <Loading />;

  const totalPages = Math.ceil(data.totalCount / itemsPerPage);

  return (
    <>
      <div className="flex flex-col gap-5 relative pb-12 h-full">
        <Link
          to={"/create-product"}
          className="w-1/2 mx-auto absolute bottom-0 left-0"
        >
          <Button
            children={"Create Product"}
            variant="success"
            className="flex items-center justify-center w-40 h-10"
          />
        </Link>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 items-center justify-center pb-20 h-full">
          {data?.products.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>

        <div className="absolute bottom-5 flex justify-end w-full">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    </>
  );
};
