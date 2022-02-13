import React from "react";
import { ITemplate } from "../../shared/interfaces/template.interface";

const TemplateCard = ({
  template: { name, description, created },
}: {
  template: ITemplate;
}) => {
  return (
    <div className="shadow-lg flex flex-col">
      <div className="bg-white p-4 flex-1">
        <h3 className="text-2xl font-normal">{name}</h3>
        <p className="text-sm my-3">{description}</p>
        <p>{created}</p>
      </div>
      <div className="bg-gray-50 p-4">
        <a href="#!" className="text-green-500">
          Use Template
        </a>
      </div>
    </div>
  );
};

export default TemplateCard;
