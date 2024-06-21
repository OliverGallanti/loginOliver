import React, { useState } from "react";

const PageElementSelector = ({ itemsPerPage, setItemsPerPage }) => {
  // Handle change in select input
  const handleChange = (e) => {
    setItemsPerPage(parseInt(e.target.value)); // Update state with selected value
  };

  return (
    <div>
      <label className="text-xs">Items per Page:</label>
      <select className="text-sm" id="itemsPerPage" value={itemsPerPage} onChange={handleChange}>
        <option value={5}>5</option>
        <option value={8}>8</option>
        <option value={12}>12</option>
        <option value={20}>20</option>
      </select>
    </div>
  );
};

export default PageElementSelector;
