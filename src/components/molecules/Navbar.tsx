import React, { Props, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterBySearch,
  filterTemplates,
  updateData,
} from "../../app/features/template/templateSlice";
import { AppDispatch, RootState } from "../../app/store";
import useSearch from "../../hooks/useSearch";
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
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedAlphabeticOrder, setSelectedAlphabeticOrder] =
    useState<string>("");
  const [selectedDateOrder, setSelectedDateOrder] = useState<string>("");
  const [filter, setFilter] = useState({
    category: "",
    alphaOrder: "Default",
    dateOrder: "Default",
  });
  const [searchValue, setSearchValue] = useState<string>("");

  const { searchResult } = useSearch();

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (searchResult.length) {
      dispatch(updateData(searchResult));
    }
  }, [searchResult.length]);

  const searchFilter = useSelector(
    (state: RootState) => state.template.filter.search
  );

  useEffect(() => {
    if (searchFilter?.length) {
      handleSearch("");
    }
  }, [searchFilter?.length]);

  useEffect(() => {
    dispatch(filterTemplates(filter));
  }, [filter]); //< == listen for changes in the filter and dispatch to redux

  const handleSearch = (value: string) => {
    setSearchValue(value);
    dispatch(filterBySearch(value));
  };

  return (
    <div className="flex justify-between md:flex-row xs:flex-col sm:flex-col">
      <div className="sm:w-full md:w-full lg:w-1/4 ">
        <SearchInput handleSearch={handleSearch} value={searchValue} />
      </div>
      <div className="xs:h-10 sm:h-10 md:w-2/5 lg:hidden" />
      <div className="w-full md:w-full lg:w-1/2 ">
        <div className="flex gap-x-4">
          <div className="w-1/2">
            <Dropdown
              label="Category"
              items={CATEGORIES}
              selectedItem={selectedCategory}
              handleSelectedChanged={(value) => {
                console.log("this was click", value);
                setSelectedCategory(value);
                setFilter({ ...filter, category: value });
                // dispatch(filterTemplates({ ...filter, category: value }));
              }}
            />
          </div>
          <div className="w-1/2">
            <Dropdown
              label="Order"
              items={ORDER}
              selectedItem={selectedAlphabeticOrder}
              handleSelectedChanged={(value) => {
                setSelectedAlphabeticOrder(value);
                // dispatch(
                //   filterTemplates({
                //     ...filter,
                //     alphaOrder: selectedAlphabeticOrder,
                //   })
                // );
                setFilter({
                  ...filter,
                  alphaOrder: value,
                });
              }}
            />
          </div>
          <div className="w-1/2">
            <Dropdown
              label="Date"
              items={ORDER}
              selectedItem={selectedDateOrder}
              handleSelectedChanged={(value) => {
                setSelectedDateOrder(value);
                // dispatch(
                //   filterTemplates({ ...filter, dateOrder: selectedDateOrder })
                // );
                setFilter({ ...filter, dateOrder: value });
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
