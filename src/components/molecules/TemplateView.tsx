import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../app/store";
import templateContext from "../../context/template.context";
import usePaginator from "../../hooks/usePaginator";
import TemplateViewLayout from "../../layouts/TemplateViewLayout";
import { ITemplate } from "../../shared/interfaces/template.interface";
import TemplateCard from "../atoms/TemplateCard";

const TemplateView = () => {
  // const appState = useContext(appContext);
  const { filteredResult, loading } = useSelector(
    (state: RootState) => state.template
  );

  const {
    setItemData,
    data,
    handleNextPage,
    handlePreviousPage,
    currentPage,
    totalPage,
    setCurrentPage,
  } = usePaginator({ itemsPerPage: 12 });

  useEffect(() => {
    if (filteredResult) {
      setItemData(filteredResult);
    }
  }, [filteredResult]);

  if (loading) return <h1 className="text-center text-2xl">Please wait..</h1>;

  return (
    <templateContext.Provider
      value={{
        handleNextPage,
        handlePreviousPage,
        currentPage,
        totalPages: totalPage,
        setCurrentPage,
      }}
    >
      <TemplateViewLayout>
        {data.map((template: ITemplate, index) => (
          <TemplateCard key={index} template={template} />
        ))}
      </TemplateViewLayout>
    </templateContext.Provider>
  );
};

export default TemplateView;
