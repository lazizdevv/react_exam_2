import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductCard } from "./components/product-card";
import { useGetData } from "./service/query/useGetData";
import { Button } from "../../ui/button";
import { Pagination } from "../../components/pagination";
import { Loading } from "../../components/loading";
import { Empty } from "../../components/empty/empty";
import { PlusIcon } from "../../assets/svg/PlusIcon";

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
            startIcon={<PlusIcon />}
            children={"Новый товар"}
            variant="success"
            className="flex items-center gap-2  w-40 h-10"
          />
        </Link>
        {data?.products.length > 0 ? (
          <>
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
          </>
        ) : (
          <>
            <div className="border-2 flex justify-center items-center md:items-start px-2 md:px-6 py-3 lg:py-7 mb-4 md:h-full bg-white rounded-lg shadow-md">
              <Empty />
            </div>
          </>
        )}
      </div>
    </>
  );
};
