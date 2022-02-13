import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { ITemplate } from "../shared/interfaces/template.interface";

const useSearch = () => {
  const [searchResult, setSearchResult] = useState<ITemplate[]>([]);

  const data = useSelector((state: RootState) => {
    const templates = state.template.data;
    const searchQuery = state.template.filter.search;

    if (searchQuery === "") {
      return templates;
    } else {
      return templates.filter(
        (d) =>
          searchQuery !== undefined &&
          d.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
  });

  useEffect(() => {
    if (data.length) {
      console.log("search result", data.length);
      setSearchResult(data);
    }
  }, [data.length]);

  return { searchResult };
};

export default useSearch;
