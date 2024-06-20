import React from "react";

const TextfieldInput = ({ placeholder, type, ref }) => {
  return (
    <div className="w-full flex justify-start gap-2">
      <input
        placeholder={placeholder}
        type={type}
        ref={ref}
        className="w-full p-2"
      />
    </div>
  );
};

export default TextfieldInput;
