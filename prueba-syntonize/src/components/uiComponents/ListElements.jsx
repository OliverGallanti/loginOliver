import React from "react";

const ListElements = ({ item, showDescription }) => {
  return (
    <li
      className="flex items-center bg-gray-100 rounded-lg gap-2 p-2 w-[35vw] h-14"
    >
      <div className="bg-white rounded-full size-6 text-center p-1 text-xs">
        {item.id}
      </div>
      <div className="text-xs flex items-center w-3/4">{item.title}</div>

      <button className="text-xs w-1/5" onClick={() => showDescription(item)}>
        Descripción
      </button>
    </li>
  );
};

export default ListElements;
