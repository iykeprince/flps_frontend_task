import React from "react";

const DefaultLayout: React.FC<{}> = ({ children }) => {
  return <div className="p-24 xs:p-4 sm:p-12 lg:p-24">{children}</div>;
};

export default DefaultLayout;
