import { ExclamationCircleIcon } from "@heroicons/react/outline";
import React from "react";

const Notification = () => {
  return (
    <div
      className="bg-warning border-orange-500 text-orange-700 flex justify-center items-center my-10 py-2 text-center sm:text-left"
      role="alert"
    >
      <img
        src="/warning.png"
        alt="warning icon"
        className="w-4 h-4 mr-2 md:ml-2"
      />
      <p className="text-sm">
        Tada! Get started with a free template. Can’t find what you are looking
        for? Search from the 1000+ available templates
      </p>
    </div>
  );
};

export default Notification;
