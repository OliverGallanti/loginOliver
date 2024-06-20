import React from "react";

const TextfieldInput = ({ placeholder, type, onChange }) => {
  return (
    <div className="w-full flex justify-start gap-2">
      <input
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        className="w-full p-2"
      />
    </div>
  );
};

export default TextfieldInput;
