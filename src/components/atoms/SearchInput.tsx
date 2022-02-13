import React, { useEffect } from "react";
import { SearchIcon } from "@heroicons/react/outline";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

const SearchInput = ({
  handleSearch = (a: string) => {},
  value = "",
}: {
  handleSearch: (a: string) => void;
  value: string;
}) => {
  return (
    <div className="relative text-gray-400  focus:border-sky-500 focus-within:text-gray-600 block border-solid border border-black-500 rounded-none">
      <SearchIcon className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 right-3" />

      <input
        type="text"
        name="search_template"
        id="search_template"
        placeholder="Search Template"
        className="form-input w-full px-4 py-2 focus:outline-none"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
