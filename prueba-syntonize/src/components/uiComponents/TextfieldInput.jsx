import React, { useState } from "react";

const TextfieldInput = ({ placeholder, type, onChange, error }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <div className="w-full flex flex-col relative text-sm">
      <input
        placeholder={placeholder}
        type={type === "password" && isPasswordVisible ? "email" : type}
        onChange={onChange}
        className={`${error ? "hover:bg-red-500/10 border-red-500/20 placeholder-red-600/70 focus:bg-red-500/20" : "hover:bg-gray-100/30 border-gray-500/20 placeholder-gray-600/70 focus:bg-gray-100/50"} block w-full bg-transparent outline-none border-b-2 py-2 px-4 transition-colors`}
      />
      {type === "password" && (
        <button
          type="button"
          onClick={() => setIsPasswordVisible(!isPasswordVisible)}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-sm text-gray-600"
        >
          {isPasswordVisible ? (
            <span className="text-xs">Ocultar</span>
          ) : (
            <span className="text-xs">Mostrar</span>
          )}
        </button>
      )}
      {error && <span className="text-red-600 text-xs">{error}</span>}
    </div>
  );
};

export default TextfieldInput;
