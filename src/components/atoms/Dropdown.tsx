import React from "react";

const Dropdown = ({
  label,
  items = [],
  selectedItem = "",
  handleSelectedChanged = (a: string) => {},
}: {
  label: string;
  items?: string[];
  selectedItem?: string;
  handleSelectedChanged?: (a: string) => void;
}) => {
  return (
    <div className="relative text-gray-400  focus:border-sky-500 focus-within:text-gray-600 block border-solid border border-slate-500 rounded-none">
      <label className="pointer-events-none absolute -top-1 transform -translate-y-1/2 left-3 bg-white">
        {label}
      </label>
      <select
        onChange={(e) => handleSelectedChanged(e.target.value)}
        className="form-select block w-full px-4 py-2  focus:border-none focus:outline-none"
      >
        {items.map((item, i) => (
          <option key={i} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
