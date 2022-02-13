import React, { useContext } from "react";
import TemplateHeader from "../components/atoms/TemplateHeader";
import PaginationFooter from "../components/molecules/PaginationFooter";
import templateContext from "../context/template.context";

const TemplateViewLayout: React.FC<{}> = ({ children }) => {
  return (
    <div>
      <TemplateHeader />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-8">
        {children}
      </div>
      <PaginationFooter />
    </div>
  );
};

export default TemplateViewLayout;
