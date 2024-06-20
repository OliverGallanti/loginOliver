import React from "react";

const Toaster = ({ message, severity }) => {
  return (
    <div className="bottom-0 left-0 fixed">
      <div
        className={`${severity === "success" ? "bg-green-500" : "bg-red-500"} max-w-xs text-sm text-white rounded-md shadow-lg  mb-3 ml-3`}
        role="alert"
      >
        <div className="flex p-4">{message}</div>
      </div>
    </div>
  );
};

export default Toaster;
