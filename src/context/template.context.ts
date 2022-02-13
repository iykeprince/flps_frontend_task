import React from "react";
import { TemplateState } from "../app/features/template/templateSlice";

export default React.createContext<{
  handleNextPage: Function;
  handlePreviousPage: Function;
  setCurrentPage: Function;
  currentPage: number;
  totalPages: number;
}>({
  currentPage: 0,
  totalPages: 0,
  handleNextPage: Function,
  handlePreviousPage: Function,
  setCurrentPage: Function,
});
