import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState, AppDispatch } from "../../app/store";
import templateContext from "../../context/template.context";
import Button from "../atoms/Button";
import PageCounter from "../atoms/PageCounter";

const PaginationFooter = () => {
  const templateProps = useContext(templateContext);

  return (
    <div className="flex justify-between items-center py-8">
      <Button
        label="Prev"
        showIconRight={false}
        onClick={templateProps.handlePreviousPage}
      />
      <PageCounter
        value={templateProps.currentPage}
        totalPages={templateProps.totalPages}
        onChange={(e: { target: { value: string } }) =>
          templateProps.setCurrentPage(parseInt(e.target.value))
        }
      />
      <Button
        label="Next"
        showIconRight={true}
        onClick={templateProps.handleNextPage}
      />
    </div>
  );
};

export default PaginationFooter;
