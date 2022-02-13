import React from "react";
interface IPageCounter {
  value: number;
  totalPages: number;
  onChange: any;
}

const PageCounter: React.FC<IPageCounter> = ({
  value,
  totalPages,
  onChange,
}: IPageCounter) => {
  return (
    <div className="w-40 flex items-center justify-center">
      <input
        value={value}
        onChange={onChange}
        className="w-10 border-solid border-2 border-black-400 rounded focus:outline-none text-center"
      />{" "}
      <p className="px-2"> of {totalPages}</p>
    </div>
  );
};

export default PageCounter;
