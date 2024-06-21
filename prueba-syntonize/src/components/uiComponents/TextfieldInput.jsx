import React from "react";

const TextfieldInput = ({ placeholder, type, onChange, error }) => {
  return (
    <div className="w-full flex flex-col">
      <input
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        className={`${error ? "hover:bg-red-500/10 placeholder-red-600/70 focus:bg-red-500/20" : "hover:bg-gray-100/30 placeholder-gray-600/70 focus:bg-gray-100/50"} block w-full bg-transparent outline-none border-b-2 py-2 px-4  transition-colors`}
      />
      {error && <span className="text-red-600 text-xs">{error}</span>}
    </div>
  );
};

export default TextfieldInput;
