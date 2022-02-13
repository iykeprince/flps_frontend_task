import { useState } from "react";
import { ITemplate } from "../shared/interfaces/template.interface";

const usePaginator = ({ itemsPerPage }: { itemsPerPage: number }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = itemsPerPage;
  const [itemData, setItemData] = useState<ITemplate[]>([]);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const indexOfLastPage = currentPage * perPage;
  const indexOfFirstPage = indexOfLastPage - perPage;
  const data = itemData && itemData.slice(indexOfFirstPage, indexOfLastPage);
  const totalPage = itemData && Math.ceil(itemData.length / perPage);

  return {
    data,
    totalPage,
    currentPage,
    setCurrentPage,
    setItemData,
    handleNextPage,
    handlePreviousPage,
  };
};

export default usePaginator;
