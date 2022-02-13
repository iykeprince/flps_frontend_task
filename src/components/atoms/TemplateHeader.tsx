import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import appContext from "../../context/app.context";
import templateContext from "../../context/template.context";

const TemplateHeader = () => {
  const { filteredResult, category } = useSelector(
    (state: RootState) => state.template
  );

  return (
    <div className="flex justify-between items-center py-3">
      <p className="text-md ">{category} Templates</p>
      <p className="text-sm text-gray-400">{filteredResult.length} templates</p>
    </div>
  );
};

export default TemplateHeader;
