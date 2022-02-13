import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  filterBySearch,
  sortByAlpha,
  sortByCategory,
  sortByDate,
} from "../../app/features/template/templateSlice";
import { AppDispatch } from "../../app/store";
import Dropdown from "../atoms/Dropdown";
import SearchInput from "../atoms/SearchInput";

export const CATEGORIES: string[] = [
  "All",
  "Health",
  "E-commerce",
  "Education",
];

export const ORDER: string[] = ["Default", "Ascending", "Descending"];

const Navbar = () => {
  const [filter, setFilter] = useState({
    search: "",
    category: "",
    alphaOrder: "Default",
    dateOrder: "Default",
  });

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(filterBySearch(filter.search));
  }, [filter.search]); //< == listen for changes in the filter and dispatch to redux

  const handleSearch = (value: string) => {
    setFilter({ ...filter, search: value });
  };

  return (
    <div className="flex justify-between md:flex-row xs:flex-col sm:flex-col">
      <div className="sm:w-full md:w-full lg:w-1/4 ">
        <SearchInput handleSearch={handleSearch} value={filter.search} />
      </div>
      <div className="xs:h-10 sm:h-10 md:w-2/5 lg:hidden" />
      <div className="w-full md:w-full lg:w-1/2 ">
        <div className="flex gap-x-4">
          <div className="w-1/2">
            <Dropdown
              label="Category"
              items={CATEGORIES}
              selectedItem={filter.category}
              handleSelectedChanged={(value) => {
                setFilter({ ...filter, category: value });

                dispatch(filterBySearch(""));
                dispatch(sortByCategory(value));
              }}
            />
          </div>
          <div className="w-1/2">
            <Dropdown
              label="Order"
              items={ORDER}
              selectedItem={filter.alphaOrder}
              handleSelectedChanged={(value) => {
                setFilter({ ...filter, alphaOrder: value });
                dispatch(filterBySearch(""));
                dispatch(sortByAlpha(value));
              }}
            />
          </div>
          <div className="w-1/2">
            <Dropdown
              label="Date"
              items={ORDER}
              selectedItem={filter.dateOrder}
              handleSelectedChanged={(value) => {
                setFilter({ ...filter, dateOrder: value });
                dispatch(filterBySearch(""));
                dispatch(sortByDate(value));
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
