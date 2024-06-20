import React from "react";

const ButtonAction = ({ title, action, style, disabled }) => {
  return (
    <div className="w-full flex justify-center">
      <button
        onClick={action}
        className={`
          ${
            style === "signup"
              ? "bg-emerald-600 hover:bg-emerald-800 px-12 py-2"
              : "bg-sky-600 hover:bg-sky-800  px-4 py-1"
          } transition-colors text-white font-bold w-fit`}
        disabled={disabled}
      >
        {title}
      </button>
    </div>
  );
};

export default ButtonAction;
