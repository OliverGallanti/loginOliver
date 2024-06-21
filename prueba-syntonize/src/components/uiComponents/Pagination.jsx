import React from "react";
import { generatePageNumbers } from "../controllers/Pagination.controller";

const Pagination = ({ currentPage, totalPages, handleClick }) => {
  return (
    <div className="w-full flex justify-between p-3 font-bold">
      <div>
        <button
          className={`${currentPage === 1 ? "bg-gray-300 text-white" : "bg-gray-100 hover:bg-sky-500/50"}  size-6 p-1 text-xs rounded-full mx-1 transition-all`}
          onClick={() => handleClick(1)}
          disabled={currentPage === 1}
        >
          {"<<"}
        </button>
        <button
          className={`${currentPage === 1 ? "bg-gray-300 text-white" : "bg-gray-100 hover:bg-sky-500/50"} size-6 p-1 text-xs rounded-full mx-1 transition-all`}
          onClick={() => handleClick(currentPage - 1)}
          disabled={currentPage === 1}
        >
          {"<"}
        </button>
      </div>
      <div>
        {generatePageNumbers(totalPages, currentPage).map((number, index) => (
          <button
            className={`${
              currentPage === number
                ? "bg-sky-500 text-white "
                : "bg-gray-100 hover:bg-sky-500/50"
            } size-6 p-1 text-xs rounded-full mx-1 transition-all`}
            key={index}
            onClick={() => handleClick(number)}
            disabled={currentPage === number || number === "..."}
          >
            {number}
          </button>
        ))}
      </div>
      <div>
        <button
          className={`${currentPage === totalPages ? "bg-gray-300 text-white" : "bg-gray-100 hover:bg-sky-500/50"}  size-6 p-1 text-xs rounded-full mx-1 transition-all`}
          onClick={() => handleClick(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          {">"}
        </button>
        <button
          className={`${currentPage === totalPages ? "bg-gray-300 text-white" : "bg-gray-100 hover:bg-sky-500/50"}  size-6 p-1 text-xs rounded-full mx-1 transition-all`}
          onClick={() => handleClick(totalPages)}
          disabled={currentPage === totalPages}
        >
          {">>"}
        </button>
      </div>
    </div>
  );
};

export default Pagination;
