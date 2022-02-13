import React from "react";

export interface IButton {
  label: string;
  showIconRight: boolean;
  onClick?: any;
}

const Button = ({ label, showIconRight = false, onClick }: IButton) => (
  <button className="flex items-center" onClick={onClick}>
    {label} {showIconRight && <i className="fa fa-chevron-right ml-2"></i>}
  </button>
);

export default Button;
