import React from "react";

const ButtonAction = ({ title, action, style, disabled }) => {
  return (
    <div className="w-full flex justify-center">
      <button
        onClick={action}
        className={`
          ${
            style === "signup"
              ? ` ${disabled ? "bg-gray-500" : "bg-emerald-600 hover:bg-emerald-800 "}`
              : ` ${disabled ? "bg-gray-500" : "bg-sky-600 hover:bg-sky-800"}`
          } px-12 py-2 transition-colors text-white font-bold w-fit ${disabled ? "text-white/50" : "text-white"}`}
        disabled={disabled}
      >
        {title}
      </button>
    </div>
  );
};

export default ButtonAction;
